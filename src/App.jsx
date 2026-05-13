import { useState, useMemo, useRef } from "react";

// ─── STYLE ─────────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Mono:wght@400;500&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:         #efebe4;
    --bg-mid:     #e8e3db;
    --card:       #ffffff;
    --ink:        #111110;
    --ink-mid:    #3c3b38;
    --ink-muted:  #8a8a85;
    --ink-subtle: #c2c1bb;
    --border:     rgba(0,0,0,0.07);
    --border-md:  rgba(0,0,0,0.13);
    --green:      #22c55e;
    --shadow-sm:  0 1px 3px rgba(0,0,0,0.06);
    --shadow-md:  0 4px 16px rgba(0,0,0,0.08);
    --shadow-lg:  0 12px 40px rgba(0,0,0,0.12);
    --mono:       'DM Mono', monospace;
    --sans:       'DM Sans', sans-serif;
    --serif:      'Lora', serif;
  }

  html, body, #root { height: 100%; }
  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--ink);
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--ink-subtle); border-radius: 99px; }

  /* ── GRID SHELL ── */
  .app-shell {
    display: grid;
    grid-template-rows: 52px 1fr;
    grid-template-columns: 1fr;
    height: 100vh;
    overflow: hidden;
  }

  /* ── HEADER ── */
  .header {
    grid-column: 1 / -1;
    display: flex; align-items: center; gap: 14px;
    padding: 0 20px;
    background: var(--card);
    border-bottom: 1px solid var(--border-md);
    z-index: 10;
  }
  .header-logo {
    display: flex; align-items: center; gap: 7px;
    font-family: var(--mono); font-size: 12.5px; font-weight: 700;
    color: var(--ink); letter-spacing: 0.1em; text-transform: uppercase;
  }
  .header-logo-icon {
    width: 22px; height: 22px; border-radius: 6px;
    background: var(--ink);
    display: flex; align-items: center; justify-content: center;
    color: var(--card); font-size: 11px;
  }
  .header-sep { width: 1px; height: 18px; background: var(--border-md); }
  .header-specialty {
    display: flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 500; color: var(--ink-mid);
    padding: 4px 10px; border-radius: 99px;
    border: 1px solid var(--border-md);
    background: var(--bg);
  }
  .specialty-dot { width: 7px; height: 7px; border-radius: 99px; background: var(--green); }
  .header-spacer { flex: 1; }
  .header-badge {
    font-family: var(--mono); font-size: 10.5px;
    padding: 3px 9px; border-radius: 99px;
    border: 1px solid var(--border-md);
    color: var(--ink-muted); background: var(--bg);
    letter-spacing: 0.06em;
  }

  /* ── TAB BAR ── */
  .tab-bar {
    display: flex; align-items: stretch;
    padding: 0 16px;
    background: var(--card);
    border-bottom: 1px solid var(--border-md);
    overflow-x: auto; flex-shrink: 0;
    gap: 0;
  }
  .tab-bar::-webkit-scrollbar { display: none; }
  .tab-item {
    display: flex; align-items: center; gap: 7px;
    padding: 0 14px; height: 40px;
    font-size: 13.5px; font-weight: 500; color: var(--ink-muted);
    cursor: pointer; transition: all 0.14s;
    border-bottom: 2px solid transparent;
    white-space: nowrap; flex-shrink: 0;
    border-top: none; border-left: none; border-right: none;
    background: none;
  }
  .tab-item:hover { color: var(--ink); }
  .tab-item.active {
    color: var(--ink);
    border-bottom-color: var(--ink);
    font-weight: 600;
  }
  .sys-dot { width: 6px; height: 6px; border-radius: 99px; flex-shrink: 0; }

  /* ── MAIN ── */
  .main { display: flex; flex-direction: column; overflow: hidden; position: relative; background: var(--bg); }

  /* ── SEARCH BAR ── */
  .search-bar {
    padding: 11px 16px;
    border-bottom: 1px solid var(--border-md);
    display: flex; align-items: center; gap: 10px;
    background: var(--card);
  }
  .search-input {
    flex: 1; background: var(--bg);
    border: 1px solid var(--border-md);
    border-radius: 8px; padding: 7px 13px;
    color: var(--ink); font-family: var(--sans);
    font-size: 14.5px; outline: none;
    transition: border-color 0.2s;
  }
  .search-input::placeholder { color: var(--ink-subtle); }
  .search-input:focus { border-color: var(--ink-subtle); }
  .search-meta {
    font-family: var(--mono); font-size: 11px; color: var(--ink-subtle);
    white-space: nowrap;
  }

  /* ── CONTENT PANE ── */
  .content-pane {
    display: grid;
    grid-template-columns: 290px 1fr;
    flex: 1; overflow: hidden;
  }

  /* ── RESULTS LIST ── */
  .results-list {
    border-right: 1px solid var(--border-md);
    overflow-y: auto; padding: 8px 6px;
    background: var(--bg);
  }
  .result-card {
    padding: 10px 12px; border-radius: 8px;
    cursor: pointer; margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.14s;
  }
  .result-card:hover { background: var(--card); border-color: var(--border-md); }
  .result-card.selected {
    background: var(--card);
    border-color: var(--border-md);
    box-shadow: var(--shadow-sm);
  }
  .rc-sys-row { display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
  .rc-sys-label { font-size: 10.5px; font-weight: 700; color: var(--ink-muted); letter-spacing: 0.04em; text-transform: uppercase; }
  .rc-title { font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 5px; line-height: 1.3; }
  .rc-keywords { font-size: 12px; color: var(--ink-muted); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .no-results { padding: 32px 16px; text-align: center; font-size: 12px; color: var(--ink-muted); }

  /* ── DETAIL PANE ── */
  .detail-pane { overflow-y: auto; padding: 20px 24px; background: var(--bg); }
  .empty-state {
    height: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 10px;
    color: var(--ink-muted);
  }
  .empty-icon { font-size: 36px; opacity: 0.2; }
  .empty-text { font-size: 12.5px; color: var(--ink-muted); text-align: center; line-height: 1.6; }

  .detail-header {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 16px;
    margin-bottom: 16px; padding-bottom: 16px;
    border-bottom: 1px solid var(--border-md);
  }
  .detail-title {
    font-size: 23px; font-weight: 700; color: var(--ink);
    line-height: 1.2; letter-spacing: -0.02em;
  }
  .detail-sys-badge {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 14px; font-weight: 500; color: var(--ink-muted);
    margin-top: 6px;
  }
  .copy-all-btn {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 6px;
    padding: 7px 13px; border-radius: 8px;
    border: 1px solid var(--border-md);
    background: var(--card);
    color: var(--ink-mid); font-family: var(--mono);
    font-size: 11px; cursor: pointer;
    transition: all 0.15s; white-space: nowrap;
    box-shadow: var(--shadow-sm);
  }
  .copy-all-btn:hover { background: var(--ink); color: var(--card); border-color: var(--ink); }
  .copy-all-btn.copied { background: #16a34a; color: #fff; border-color: #16a34a; }

  .tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
  .tag-pill {
    font-size: 11.5px; padding: 4px 10px; border-radius: 99px;
    background: var(--card); color: var(--ink-muted);
    border: 1px solid var(--border-md);
  }

  .ap-section { margin-bottom: 10px; border-radius: 9px; overflow: hidden; border: 1px solid var(--border-md); }
  .ap-section-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 7px 13px;
    background: var(--bg-mid);
    border-bottom: 1px solid var(--border-md);
  }
  .ap-section-label {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); letter-spacing: 0.1em; text-transform: uppercase;
  }
  .copy-section-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 3px 8px; border-radius: 4px;
    background: transparent; border: 1px solid var(--border-md);
    color: var(--ink-muted); font-family: var(--mono);
    font-size: 9px; cursor: pointer; transition: all 0.15s;
  }
  .copy-section-btn:hover { background: var(--ink); color: var(--card); border-color: var(--ink); }
  .copy-section-btn.copied { background: #16a34a; color: #fff; border-color: #16a34a; }
  .ap-content {
    padding: 13px; background: var(--card);
    font-family: var(--mono); font-size: 12.5px;
    color: var(--ink-mid); line-height: 1.85;
    white-space: pre-wrap; word-break: break-word;
  }

  /* ── WHITE BOOK SOURCE REFERENCE ── */
  .source-block {
    margin-bottom: 10px;
    border: 1px solid var(--border-md);
    border-radius: 9px; overflow: hidden;
    background: var(--card);
  }
  .source-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 13px;
    background: var(--ink);
    cursor: pointer; user-select: none;
  }
  .source-header-left {
    display: flex; align-items: center; gap: 8px;
  }
  .source-header-icon { font-size: 12px; color: var(--card); }
  .source-header-title {
    font-family: var(--mono); font-size: 10.5px; font-weight: 700;
    color: var(--card); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .source-page-badge {
    font-family: var(--mono); font-size: 9px; font-weight: 700;
    padding: 2px 8px; border-radius: 99px;
    background: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.85);
    letter-spacing: 0.05em;
  }
  .source-header-actions { display: flex; align-items: center; gap: 6px; }
  .source-open-pdf-btn {
    display: flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 6px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.9);
    font-family: var(--mono); font-size: 9.5px; font-weight: 700;
    cursor: pointer; transition: all 0.15s; letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .source-open-pdf-btn:hover {
    background: rgba(255,255,255,0.22);
    border-color: rgba(255,255,255,0.4);
    color: #fff;
  }
  .source-expand-icon {
    font-size: 10px; color: rgba(255,255,255,0.5);
    transition: transform 0.2s; padding: 4px; cursor: pointer;
  }
  .source-expand-icon.open { transform: rotate(180deg); }

  .source-body { padding: 12px 13px; background: var(--card); }
  .source-meta-row {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-bottom: 12px; padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
  }
  .source-meta-item { display: flex; flex-direction: column; gap: 2px; }
  .source-meta-label {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); letter-spacing: 0.06em; text-transform: uppercase;
  }
  .source-meta-value { font-size: 13.5px; font-weight: 600; color: var(--ink); }
  .source-facts-label {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 8px;
  }
  .source-facts-list { display: flex; flex-direction: column; gap: 6px; }
  .source-fact {
    display: flex; align-items: flex-start; gap: 8px;
    padding: 8px 10px; border-radius: 6px;
    background: var(--bg); border: 1px solid var(--border);
  }
  .source-fact-bullet {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    color: var(--ink-muted); flex-shrink: 0; margin-top: 1px;
  }
  .source-fact-text { font-size: 13px; color: var(--ink-mid); line-height: 1.6; }
  .source-disclaimer {
    margin-top: 10px; padding: 7px 10px; border-radius: 6px;
    background: #fffbeb; border: 1px solid #fcd34d;
    font-size: 11.5px; color: #92400e; line-height: 1.55;
  }

  /* result card page badge */
  .rc-page-badge {
    display: inline-flex; align-items: center; gap: 4px;
    font-family: var(--mono); font-size: 9px;
    color: var(--ink-muted); margin-top: 4px;
  }

  /* ── SUMMARIZE ── */
  .summarize-btn {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 6px;
    padding: 7px 13px; border-radius: 8px;
    border: 1px solid var(--border-md);
    background: var(--bg);
    color: var(--ink-mid); font-family: var(--mono);
    font-size: 11px; cursor: pointer;
    transition: all 0.15s; white-space: nowrap;
    box-shadow: var(--shadow-sm);
  }
  .summarize-btn:hover:not(:disabled) { background: var(--ink); color: var(--card); border-color: var(--ink); }
  .summarize-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .summarize-btn.active { background: var(--ink); color: var(--card); border-color: var(--ink); }

  .summary-block {
    margin-bottom: 12px;
    border: 1.5px solid var(--ink);
    border-radius: 10px; overflow: hidden;
    animation: summaryFadeIn 0.2s ease;
  }
  @keyframes summaryFadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  .summary-block-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 13px;
    background: var(--ink);
  }
  .summary-block-title {
    display: flex; align-items: center; gap: 7px;
    font-family: var(--mono); font-size: 10.5px; font-weight: 700;
    color: var(--card); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .summary-block-actions { display: flex; align-items: center; gap: 6px; }
  .summary-copy-btn {
    display: flex; align-items: center; gap: 5px;
    padding: 4px 10px; border-radius: 6px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.9);
    font-family: var(--mono); font-size: 9.5px; font-weight: 700;
    cursor: pointer; transition: all 0.15s;
  }
  .summary-copy-btn:hover { background: rgba(255,255,255,0.22); color: #fff; }
  .summary-copy-btn.copied { background: #16a34a; border-color: #16a34a; color: #fff; }
  .summary-dismiss-btn {
    width: 24px; height: 24px; border-radius: 6px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.6); font-size: 12px;
    cursor: pointer; display: flex; align-items: center;
    justify-content: center; transition: all 0.15s;
  }
  .summary-dismiss-btn:hover { background: rgba(255,255,255,0.18); color: #fff; }

  .summary-content {
    padding: 14px 16px;
    background: var(--card);
    font-family: var(--mono); font-size: 12.5px;
    color: var(--ink); line-height: 1.9;
    white-space: pre-wrap; word-break: break-word;
  }
  .summary-hint {
    padding: 6px 13px 8px;
    background: var(--bg);
    border-top: 1px solid var(--border);
    font-size: 11px; color: var(--ink-muted);
    font-style: italic;
  }

  .summary-loading {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 16px;
    background: var(--card);
  }
  .summary-loading-dots { display: flex; gap: 4px; }
  .summary-loading-dots span {
    width: 5px; height: 5px; border-radius: 99px;
    background: var(--ink-muted); opacity: 0.35;
    animation: pulse 1.2s ease-in-out infinite;
  }
  .summary-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
  .summary-loading-dots span:nth-child(3) { animation-delay: 0.4s; }
  .summary-loading-text { font-size: 12px; color: var(--ink-muted); font-style: italic; }

  /* ── FLOATING SYNAPSE BUTTON ── */
  .ddx-fab {
    position: absolute; bottom: 24px; right: 24px; z-index: 20;
    display: flex; align-items: center; gap: 8px;
    padding: 9px 16px; border-radius: 99px;
    background: var(--ink); border: none; cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    transition: all 0.2s;
    font-family: var(--sans); font-size: 12.5px; font-weight: 600;
    color: var(--card);
  }
  .ddx-fab:hover { background: var(--ink-mid); box-shadow: 0 6px 28px rgba(0,0,0,0.22); transform: translateY(-1px); }
  .ddx-fab.open {
    background: var(--bg-mid); color: var(--ink-muted);
    border: 1px solid var(--border-md); box-shadow: none;
  }
  .ddx-fab.open:hover { background: var(--card); color: var(--ink); }
  .fab-icon { font-size: 14px; }

  /* ── SYNAPSE POP-OUT ── */
  .ddx-popout {
    position: absolute; bottom: 0; right: 0;
    width: 400px; height: 540px; z-index: 19;
    display: flex; flex-direction: column;
    background: var(--card);
    border: 1px solid var(--border-md); border-bottom: none;
    border-radius: 14px 14px 0 0;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    transform: translateY(100%);
    transition: transform 0.28s cubic-bezier(0.32,0.72,0,1);
    pointer-events: none;
  }
  .ddx-popout.visible { transform: translateY(0); pointer-events: all; }

  .ddx-panel-header {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px; border-bottom: 1px solid var(--border-md);
    flex-shrink: 0; background: var(--card);
  }
  .ddx-panel-avatar {
    width: 26px; height: 26px; border-radius: 8px;
    background: var(--ink); display: flex; align-items: center;
    justify-content: center; font-size: 13px; color: var(--card); flex-shrink: 0;
  }
  .ddx-panel-title { flex: 1; font-size: 13px; font-weight: 700; color: var(--ink); letter-spacing: -0.01em; }
  .ddx-panel-subtitle { font-size: 9.5px; color: var(--ink-muted); margin-top: 1px; }
  .ddx-panel-actions { display: flex; align-items: center; gap: 5px; }
  .ddx-panel-btn {
    width: 26px; height: 26px; border-radius: 6px;
    background: transparent; border: 1px solid var(--border-md);
    color: var(--ink-muted); cursor: pointer; font-size: 12px;
    display: flex; align-items: center; justify-content: center; transition: all 0.15s;
  }
  .ddx-panel-btn:hover { background: var(--bg-mid); color: var(--ink); }

  .ddx-pane { display: flex; flex-direction: column; flex: 1; overflow: hidden; }

  .ddx-welcome {
    flex: 1; display: flex; flex-direction: column;
    align-items: flex-start; gap: 11px;
    padding: 16px 14px; overflow-y: auto;
  }
  .ddx-welcome-title { font-size: 13.5px; font-weight: 700; color: var(--ink); }
  .ddx-welcome-sub { font-size: 11.5px; color: var(--ink-muted); line-height: 1.55; }
  .ddx-chips-label {
    font-family: var(--mono); font-size: 9px; color: var(--ink-subtle);
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .ddx-chips-grid { display: flex; flex-direction: column; gap: 5px; width: 100%; }
  .ddx-chip {
    padding: 8px 12px; border-radius: 8px;
    background: var(--bg); border: 1px solid var(--border-md);
    color: var(--ink-muted); font-size: 11px; line-height: 1.4;
    cursor: pointer; transition: all 0.14s; text-align: left; font-family: var(--sans);
  }
  .ddx-chip:hover { background: var(--bg-mid); color: var(--ink); border-color: var(--ink-subtle); }

  .ddx-thread { flex: 1; overflow-y: auto; padding: 13px; display: flex; flex-direction: column; gap: 11px; }

  .msg-user {
    align-self: flex-end; max-width: 82%;
    background: var(--ink); color: var(--card);
    padding: 9px 13px; border-radius: 14px 14px 4px 14px;
    font-size: 12.5px; line-height: 1.5; font-weight: 500; word-break: break-word;
  }
  .msg-ai { align-self: flex-start; width: 100%; display: flex; flex-direction: column; gap: 7px; }
  .msg-ai-header {
    display: flex; align-items: center; gap: 6px;
    font-size: 10px; font-weight: 600; color: var(--ink-muted);
  }
  .ai-avatar {
    width: 20px; height: 20px; border-radius: 5px;
    background: var(--ink); display: flex; align-items: center;
    justify-content: center; font-size: 10px; color: var(--card); flex-shrink: 0;
  }
  .ddx-summary-box {
    padding: 9px 12px; background: var(--bg);
    border: 1px solid var(--border-md); border-radius: 8px;
    font-size: 11.5px; color: var(--ink-mid); line-height: 1.5;
  }
  .ddx-summary-box strong { color: var(--ink); }

  .msg-loading {
    align-self: flex-start; display: flex; align-items: center; gap: 8px;
    padding: 9px 13px; background: var(--bg);
    border: 1px solid var(--border-md); border-radius: 14px 14px 14px 4px;
  }
  .dot-pulse { display: flex; gap: 4px; align-items: center; }
  .dot-pulse span {
    width: 5px; height: 5px; border-radius: 99px;
    background: var(--ink-muted); opacity: 0.4;
    animation: pulse 1.2s ease-in-out infinite;
  }
  .dot-pulse span:nth-child(2) { animation-delay: 0.2s; }
  .dot-pulse span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes pulse {
    0%, 80%, 100% { opacity: 0.2; transform: scale(0.85); }
    40% { opacity: 0.8; transform: scale(1); }
  }
  .loading-label { font-size: 10px; color: var(--ink-muted); }
  .msg-error {
    padding: 9px 12px; border-radius: 8px;
    background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; font-size: 11.5px;
  }

  .ddx-item { border: 1px solid var(--border-md); border-radius: 8px; overflow: hidden; background: var(--card); }
  .ddx-item-header {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 11px; background: var(--bg);
    border-bottom: 1px solid var(--border-md);
  }
  .ddx-rank {
    font-family: var(--mono); font-size: 10px; font-weight: 700;
    width: 20px; height: 20px; border-radius: 5px;
    display: flex; align-items: center; justify-content: center;
    background: var(--card); border: 1px solid var(--border-md);
    color: var(--ink-muted); flex-shrink: 0;
  }
  .ddx-item-title { flex: 1; font-size: 12px; font-weight: 600; color: var(--ink); }
  .ddx-urgency {
    font-family: var(--mono); font-size: 8.5px;
    padding: 2px 7px; border-radius: 99px; border: 1px solid;
    letter-spacing: 0.05em; font-weight: 700;
  }
  .urgency-critical { color: #dc2626; border-color: #fca5a5; background: #fef2f2; }
  .urgency-high     { color: #d97706; border-color: #fcd34d; background: #fffbeb; }
  .urgency-moderate { color: #2563eb; border-color: #93c5fd; background: #eff6ff; }
  .urgency-low      { color: #16a34a; border-color: #86efac; background: #f0fdf4; }
  .ddx-item-body { padding: 9px 11px; }
  .ddx-reasoning { font-size: 11.5px; color: var(--ink-mid); line-height: 1.55; margin-bottom: 7px; }
  .ddx-features { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 7px; }
  .ddx-feature-tag {
    font-size: 10px; padding: 2px 7px; border-radius: 4px;
    background: var(--bg-mid); color: var(--ink-muted); border: 1px solid var(--border-md);
  }
  .ddx-template-btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 10px; border-radius: 6px;
    background: var(--ink); color: var(--card);
    border: none; font-size: 10px; font-family: var(--sans); font-weight: 600;
    cursor: pointer; transition: all 0.15s;
  }
  .ddx-template-btn:hover { background: var(--ink-mid); }
  .ddx-no-template { font-size: 10px; color: var(--ink-subtle); }

  .ddx-input-bar {
    flex-shrink: 0; padding: 10px 12px 12px;
    border-top: 1px solid var(--border-md); background: var(--card);
  }
  .ddx-input-wrap {
    display: flex; align-items: flex-end; gap: 7px;
    background: var(--bg); border: 1px solid var(--border-md);
    border-radius: 11px; padding: 7px 7px 7px 12px;
    transition: border-color 0.2s;
  }
  .ddx-input-wrap:focus-within { border-color: var(--ink-subtle); }
  .ddx-chat-input {
    flex: 1; background: transparent; border: none;
    color: var(--ink); font-family: var(--sans); font-size: 12.5px; line-height: 1.5;
    resize: none; outline: none; min-height: 20px; max-height: 90px;
    overflow-y: auto; padding: 2px 0;
  }
  .ddx-chat-input::placeholder { color: var(--ink-subtle); }
  .ddx-send-btn {
    flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
    background: var(--ink); border: none; color: var(--card);
    cursor: pointer; display: flex; align-items: center;
    justify-content: center; font-size: 13px;
    transition: all 0.15s; align-self: flex-end;
  }
  .ddx-send-btn:hover:not(:disabled) { background: var(--ink-mid); }
  .ddx-send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .ddx-input-hint {
    font-size: 9px; color: var(--ink-subtle); margin-top: 5px;
    padding: 0 2px; display: flex; justify-content: space-between;
  }
  .ddx-new-chat-btn {
    font-size: 9px; color: var(--ink-subtle); background: none;
    border: none; cursor: pointer; transition: color 0.15s;
  }
  .ddx-new-chat-btn:hover { color: var(--ink-muted); }

  /* ── PDF TOAST ─────────────────────────────────────── */
  .pdf-toast {
    position: fixed;
    bottom: 88px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--ink);
    color: var(--cream);
    padding: 10px 16px;
    border-radius: 10px;
    font-size: 12.5px;
    line-height: 1.5;
    max-width: 340px;
    width: max-content;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: toastIn 0.2s ease;
  }
  .pdf-toast a {
    color: #a8d5ff;
    text-decoration: underline;
    font-weight: 600;
  }
  .pdf-toast-dismiss {
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    line-height: 1;
    flex-shrink: 0;
  }
  .pdf-toast-dismiss:hover { color: #fff; }
  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(8px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
`;


// ─── SYSTEM CONFIG ──────────────────────────────────────────────────────────
const SYSTEMS = [
  { id: "all",   label: "All Topics",            color: "#94a3b8" },
  { id: "cv",    label: "Cardiology",             color: "#ef4444" },
  { id: "pulm",  label: "Pulm / Critical Care",   color: "#3b82f6" },
  { id: "gi",    label: "Gastroenterology",        color: "#f59e0b" },
  { id: "neph",  label: "Nephrology",              color: "#8b5cf6" },
  { id: "id",    label: "Infectious Disease",      color: "#10b981" },
  { id: "endo",  label: "Endocrinology",           color: "#f97316" },
  { id: "neuro", "label": "Neurology / Psych",     color: "#06b6d4" },
  { id: "heme",  label: "Hematology",              color: "#ec4899" },
  { id: "onc",   label: "Oncology",                color: "#a16207" },
  { id: "rheum", label: "Rheumatology",            color: "#0891b2" },
];

// ─── TEMPLATE DATA (sourced exclusively from MGH White Book 2025-26) ────────
const TEMPLATES = [
  // ════════════════════ CARDIOLOGY ════════════════════
  {
    id: "cap",
    system: "id",
    title: "Community Acquired Pneumonia (CAP)",
    keywords: ["pna","pneumonia","cap","infiltrate","cough","fever","hypoxemia","leukocytosis"],
    source: {
      chapter: "Infectious Disease",
      section: "Community-Acquired Pneumonia (CAP)",
      pages: "106–107",
      authors: "Alexandra Miller, Amanda Ward",
      keyFacts: [
        "Severe CAP (ATS/IDSA): 1 major criterion (vasopressors or MV) OR ≥3 minor criteria (RR>30, PaO₂/FiO₂<250, multilobar infiltrates, confusion, BUN>19, WBC<4k, plt<100k, T<36°C, hypotension)",
      "CURB-65: 1 point each for Confusion, Urea>19, RR≥30, BP<90/60, Age≥65 — Score 0-1: outpatient; 2: inpatient; ≥3: consider ICU",
      "Empiric non-severe CAP: ceftriaxone 1g IV q24h + azithromycin 500mg q24h",
      "MRSA nares swab: NPV ~98% — negative result supports de-escalating MRSA coverage at 48-72h",
      "Blood cultures: obtain ONLY if severe CAP, empiric MRSA/PsA coverage, prior MRSA/PsA, or IV abx within 90d"
      ]
    },
    assessment: `#Community Acquired Pneumonia (CAP)
[NEW ONSET / WORSENING] pneumonia consistent with CAP based on new infiltrate on chest imaging with associated [fever / leukocytosis / productive cough / hypoxemia].
CURB-65 score: ___  |  PSI Class: ___  |  Severity: [ ] Non-Severe  [ ] Severe CAP (ATS/IDSA)
Severe CAP if: 1 Major criterion (vasopressors or mechanical ventilation) OR ≥3 Minor criteria (RR>30, P:F<250, multilobar infiltrates, confusion, BUN>19, WBC<4, plt<100, T<36°C, hypotension requiring aggressive IVF)`,
    ddx: `• S. pneumoniae (most common bacterial)
• Respiratory viruses (influenza, SARS-CoV-2, RSV)
• S. aureus / MRSA (severe CAP)
• Legionella (consider: hyponatremia, fever, diarrhea, recent travel)
• H. influenzae, GNRs
• Aspiration pneumonitis vs. pneumonia
• Non-infectious: pulmonary edema, ARDS, PE, malignancy`,
    workup: `• CXR (PA/lateral) — confirm infiltrate; CT chest if CXR non-diagnostic or concern for empyema
• CBC with diff, BMP, LFTs
• Blood cultures x2 (obtain if: severe CAP, empiric MRSA/PsA coverage, prior MRSA/PsA, IV abx within 90d)
• Sputum Gram stain + culture (obtain if: severe CAP or resistance risk; adequate if >25 PMN and <10 squamous cells)
• Procalcitonin
• Legionella urine antigen (check if: severe CAP or recent travel/exposure)
• Streptococcal urine antigen (consider in severe CAP)
• MRSA nasal swab (NPV ~98%; negative → consider de-escalating MRSA coverage)
• Influenza testing (seasonally); treat with oseltamivir if positive
• SpO2 and ABG/VBG if hypoxemic or clinical deterioration`,
    management: `NON-SEVERE CAP (Inpatient — no MRSA/PsA risk factors):
• Ceftriaxone 1g IV q24h + Azithromycin 500mg PO/IV q24h
• If atypical organism suspected or monotherapy: Respiratory fluoroquinolone (levofloxacin 750mg IV/PO q24h)
• PCN allergy: respiratory FLQ

SEVERE CAP (No MRSA/PsA risk factors):
• Ceftriaxone 1-2g IV q24h + Azithromycin 500mg IV q24h OR respiratory FLQ
• Duration: typically 5 days; can extend based on clinical response

MRSA risk factors present (severe CAP, previous MRSA, IV abx within 90d):
• Add vancomycin OR linezolid

PsA risk factors present:
• Add anti-pseudomonal beta-lactam (pip-tazo, cefepime, ceftazidime, meropenem)

Supportive:
• Supplemental O2; target SpO2 ≥92-94%
• IVF if dehydrated; ambulation when clinically appropriate
• DVT prophylaxis
• Smoking cessation counseling`,
    monitoring: `• Fever curve, WBC trend, SpO2 daily
• Repeat CXR if clinical deterioration or lack of improvement at 48-72h
• Monitor procalcitonin trend to guide antibiotic duration
• MRSA nasal swab result → de-escalate if negative at 48-72h
• Blood/sputum culture results → narrow antibiotic therapy if pathogen identified`,
    disposition: `• Outpatient: CURB-65 0-1 or PSI Class I-II (no severe criteria)
• Inpatient/floor: CURB-65 2 or PSI Class III-IV
• ICU/stepdown: Severe CAP (≥3 minor criteria or ≥1 major criterion)
• Discharge criteria: afebrile, tolerating PO, SpO2 ≥92% on room air, clinically improving`
  },

  {
    id: "copd-exac",
    system: "pulm",
    title: "COPD Exacerbation (AECOPD)",
    keywords: ["copd","exacerbation","wheezing","dyspnea","hypercapnia","obstructive","bronchitis","aecopd"],
    source: {
      chapter: "Pulmonary & Critical Care",
      section: "COPD Exacerbation",
      pages: "44–45",
      authors: "Lauren Nguyen",
      keyFacts: [
        "NIV/BiPAP indications: pH <7.35 + PaCO₂ >45, RR >25, or moderate-severe dyspnea — reduces intubation rate, mortality, and ICU LOS",
      "Steroids: prednisone 40mg PO qday ×5d — no benefit to longer courses; equivalent to IV methylprednisolone",
      "O₂ target: SpO₂ 88-92% — avoid excess O₂ (risk of hypercapnic worsening via Haldane effect)",
      "Antibiotics: only if purulent sputum, infectious trigger, or pneumonia — 5-day course",
      "Short-acting albuterol + ipratropium: first-line bronchodilator combination for AECOPD"
      ]
    },
    assessment: `#COPD Exacerbation (AECOPD)
Acute exacerbation of COPD presenting with [increased dyspnea / increased sputum production / change in sputum color / worsening wheeze].
Known COPD: [ ] Yes (GOLD Grade ___, GOLD Group ___) [ ] No/Unknown
Home inhalers: ___   Home O2: [ ] Yes ___L  [ ] No
Baseline SpO2: ___  ABG if obtained: pH ___ / PaCO2 ___ / PaO2 ___`,
    ddx: `• Infectious trigger (most common: viral URI, bacterial bronchitis, PNA)
• Pneumothorax
• Pulmonary embolism
• Acute heart failure / ADHF
• Cardiac arrhythmia
• Medication nonadherence
• Pneumonia (CAP, HAP)
• De novo diagnosis of obstructive lung disease (asthma, first exacerbation)`,
    workup: `• CXR (PA/lateral): r/o pneumothorax, PNA, ADHF
• SpO2, ABG/VBG (especially if SpO2 <92% or suspected hypercapnic failure)
• CBC, BMP, BNP/NT-proBNP (if concern for ADHF)
• Sputum culture if purulent change or concern for pneumonia
• ECG (r/o arrhythmia, RV strain, cor pulmonale)
• CT chest/PE protocol if high clinical suspicion for PE
• Blood cultures if fever, systemic signs, or consolidation on imaging
• Influenza/viral respiratory panel (seasonally)`,
    management: `BRONCHODILATORS (first-line, start immediately):
• Short-acting albuterol (2.5mg nebulized q20min x3, then q2-4h PRN) AND
• Ipratropium (0.5mg nebulized q6h)
• Can space to MDI with spacer once stable

STEROIDS:
• Prednisone 40mg PO qday x5d (equivalent to IV methylprednisolone; no benefit to longer courses)
• IV methylprednisolone 40mg q24h if unable to take PO

ANTIBIOTICS (if purulent sputum, clear infectious trigger, or pneumonia):
• Mild/moderate: azithromycin 500mg PO x1 then 250mg q24h x4d, OR doxycycline 100mg BID, OR amoxicillin-clavulanate
• Severe/MDR risk: respiratory FLQ (levofloxacin 750mg IV/PO q24h) ± expanded gram-negative coverage
• Duration: typically 5 days

OXYGEN:
• Target SpO2 88-92% (avoid excessive O2 — risk of hypercapnic worsening)
• High-flow NC or simple facemask; titrate carefully

NONINVASIVE VENTILATION (NIV/BiPAP):
• Indications: moderate-severe respiratory acidosis (pH <7.35, PaCO2 >45), RR >25, moderate-severe dyspnea
• Start: IPAP 10-12 / EPAP 4-5 cmH2O; titrate to comfort and CO2 clearance
• Reduces intubation rate, mortality, and ICU LOS

INTUBATION (if NIV fails or contraindicated):
• Consider if: progressive hypercapnic acidosis (pH <7.25), AMS, hemodynamic instability, inability to protect airway`,
    monitoring: `• Serial SpO2 on O2 therapy; repeat ABG/VBG if hypercapnic failure
• Hourly bronchodilator response for first 4-6h
• Monitor for hyperkalemia with frequent albuterol dosing
• Peak flow or clinical response to bronchodilators
• Steroid glucose monitoring (fingerstick BG q6h)`,
    disposition: `• ICU: pH <7.25, intubation, hemodynamic instability, NIV failure
• SDU/stepdown: requires NIV, borderline hypercapnia, comorbidities
• Floor: moderate exacerbation, responsive to initial treatment
• Discharge: if SpO2 ≥88-92% on home O2 (or room air), tolerating PO meds, minimal bronchospasm at rest`
  },

  {
    id: "hf-exac",
    system: "cv",
    title: "Heart Failure Exacerbation (ADHF)",
    keywords: ["chf","heart failure","adhf","fluid overload","dyspnea","edema","bnp","hfref","hfpef","orthopnea"],
    source: {
      chapter: "Cardiology",
      section: "Heart Failure",
      pages: "22–24",
      authors: "Frederick Lang, Emily Manning",
      keyFacts: [
        "NT-proBNP: ADHF unlikely if <300; likely if >450 (age <50), >900 (age 50-75), >1800 (age >75)",
      "Diuresis: start 2-2.5× home oral furosemide dose IV; goal UOP 0.5-1 mL/kg/h, net negative 1-2L/day",
      "GDMT for HFrEF (LVEF ≤40%): ACEi/ARB/ARNI + BB + MRA + SGLT-2 inhibitor — all 4 pillars",
      "IV iron if ferritin <100 OR ferritin <300 with TSAT <20% — improves outcomes in HFrEF",
      "Refractory diuresis: add metolazone 2.5-5mg PO 30 min before loop diuretic"
      ]
    },
    assessment: `#Acute Decompensated Heart Failure (ADHF)
Presenting with acute decompensated heart failure — [warm/cold] and [wet/dry] profile.
Known HF: [ ] Yes (EF ___, last TTE ___, last NTproBNP ___)  [ ] New diagnosis
Decompensation trigger (FAILURE mnemonic):
[ ] Forgot meds   [ ] Arrhythmia/Anemia/Afterload   [ ] Infection/Ischemia
[ ] Lifestyle (dietary Na indiscretion)   [ ] Upregulation (pregnancy, hyperthyroid)
[ ] Renal failure  [ ] Embolism
NT-proBNP: ___  (ADHF unlikely if <300; likely if >450, or >900 if age >50)`,
    ddx: `• ADHF with preserved EF (HFpEF) vs. reduced EF (HFrEF)
• Cardiac: new arrhythmia (AF with RVR), ACS, pericardial disease
• Acute valvular pathology (new MR, AR)
• Non-cardiac: renal failure, ARDS, transfusion-related, hypoalbuminemia
• Pulmonary embolism (if predominantly right-sided)
• Hypertensive emergency with flash pulmonary edema`,
    workup: `• ECG: r/o ischemia, arrhythmia, LBBB
• CXR: pulmonary vascular congestion, pleural effusions, cardiomegaly
• BMP, CBC, magnesium, phosphorus
• Troponin (rule out ACS as trigger)
• NT-proBNP
• TTE: assess EF, wall motion, valves, pericardial effusion
  → Initiate if not obtained in prior 3 months or new decompensation
• Urinalysis and urine electrolytes (baseline before diuresis)
• TSH, iron studies with TSAT and ferritin
• Lipid panel, HbA1c if ischemic CM workup needed
• Non-ischemic CM workup if new dx: iron studies, SPEP/UPEP, TSH, HIV, ANA`,
    management: `DIURESIS (primary treatment for volume overload):
• If diuretic-naive: IV furosemide 20-40mg IV
• If on home diuretics: start 2-2.5x home dose IV (e.g., furosemide 40mg PO → give furosemide 80-100mg IV)
• Goal UOP 0.5-1 mL/kg/h; aim for 1-2L net negative/day
• Refractory diuresis: add metolazone 2.5-5mg PO 30 min before loop diuretic
• Monitor BMP q12-24h; replete K+ and Mg2+ as needed
• Admission orders: telemetry, 2g Na-restricted diet, daily standing weights, strict I&Os, electrolyte repletion scales

GDMT OPTIMIZATION (for HFrEF, LVEF ≤40%):
• Continue/initiate as hemodynamics allow:
  - ACEi/ARB/ARNI (sacubitril-valsartan preferred over ACEi if tolerated)
  - Beta-blocker (hold if decompensated; restart/uptitrate before discharge)
  - MRA (spironolactone or eplerenone)
  - SGLT-2 inhibitor (dapagliflozin or empagliflozin)
• Iron deficiency: IV iron if ferritin <100 or ferritin <300 + TSAT <20%

AVOID: CCB (especially non-dihydropyridines), NSAIDs, flecainide

CARDIOGENIC SHOCK (if present):
• Norepinephrine: first-line vasopressor (target MAP >60 mmHg)
• Dobutamine: inodilator if hypoperfusion without shock
• Early cardiology consult; consider right heart catheterization
• Activate cath lab if concern for ischemic etiology (r/o ACS)`,
    monitoring: `• Daily weights (standing); strict I&Os (target net negative 1-2L/day)
• BMP every 12-24h (K+, Cr, BUN — watch for diuretic-induced AKI and hypokalemia)
• Telemetry (arrhythmia monitoring)
• Repeat NT-proBNP at discharge for comparison
• Fingerstick glucose monitoring if on high-dose steroids or diabetic`,
    disposition: `• SDU admission: EF <25%, NT-proBNP ≥2500, arrhythmia-induced HF, hemodynamic compromise
• ICU/CCU: cardiogenic shock, mechanical ventilation, refractory ADHF
• Discharge planning: document discharge weight and NT-proBNP, arrange HF Transitions Clinic follow-up, cardiac rehab referral, explicit instructions for oral diuretic dosing and rescue doses`
  },

  {
    id: "afib-rvr",
    system: "cv",
    title: "Atrial Fibrillation with RVR",
    keywords: ["afib","atrial fibrillation","rvr","rapid ventricular response","arrhythmia","palpitations","irregular"],
    source: {
      chapter: "Cardiology",
      section: "Atrial Fibrillation & Flutter",
      pages: "10–11",
      authors: "Yichi Zhang",
      keyFacts: [
        "IV metoprolol: 2.5-5mg over 2 min, repeat q5 min, max 15mg; IV diltiazem 0.25 mg/kg over 2 min (AVOID if LVEF unknown or HFrEF)",
      "AF >48h or unknown: anticoagulate ≥3 weeks before cardioversion OR TEE to exclude LA thrombus; post-CV anticoagulate ≥4 weeks regardless of CHA₂DS₂-VASc score",
      "Long-term AC: CHA₂DS₂-VASc ≥2 (males) or ≥3 (females) → DOAC preferred over warfarin",
      "Pre-excited AF (WPW delta wave): AVOID adenosine, diltiazem, digoxin, IV amiodarone — use procainamide",
      "Correct K+ >4.0 and Mg2+ >2.0 before cardioversion or antiarrhythmics"
      ]
    },
    assessment: `#Atrial Fibrillation with Rapid Ventricular Response (AF with RVR)
New-onset [or known chronic/paroxysmal] AF with ventricular rate ___ bpm.
Duration: [ ] <48h  [ ] >48h  [ ] Unknown
Hemodynamically: [ ] Stable  [ ] Unstable (hypotension / AMS / ischemia / pulmonary edema)
CHA₂DS₂-VASc score: ___   HAS-BLED score: ___
Precipitants assessed: [ ] Infection  [ ] Ischemia  [ ] Surgery  [ ] PE  [ ] Thyrotoxicosis  [ ] EtOH  [ ] Acute pulmonary disease`,
    ddx: `• Primary AF (paroxysmal, persistent, long-standing persistent)
• AF with underlying precipitant: sepsis/infection, ACS, thyrotoxicosis, PE, acute pulmonary disease, post-operative state
• AFL (atrial flutter) with variable block
• MAT (multifocal atrial tachycardia) — especially in COPD
• Pre-excited AF (WPW) — AVOID AV nodal agents`,
    workup: `• ECG: confirm AF, assess for pre-excitation (delta waves), ischemic changes, QTc
• BMP (K+, Mg2+ — correct before cardioversion or antiarrhythmics)
• CBC, TFTs, LFTs, coagulation studies
• Troponin (if concern for ischemic trigger or hemodynamic compromise)
• NT-proBNP (if concern for HF trigger or decompensation)
• CXR (r/o pulmonary process, HF)
• TTE: LV function, LA size, valves, pericardial effusion (obtain if new CM workup needed or prior EF unknown)
• TEE or CT-PV (pulmonary vein CT): if cardioversion planned and AF duration >48h or unknown`,
    management: `HEMODYNAMICALLY UNSTABLE (hypotension, AMS, ischemia, pulmonary edema):
• Immediate synchronized electrical cardioversion
  - Sedate: dilaudid 1-2mg + lorazepam 2mg (or procedural sedation if available)
  - Start at 150J biphasic; increase energy if NSR not achieved
• Anticoagulation status: consider risk/benefit; cardioversion urgent in unstable patients

RATE CONTROL (hemodynamically stable):
• IV metoprolol: 2.5-5mg IV push over 2 min; repeat q5 min; max 15mg
• IV diltiazem: 0.25 mg/kg IV bolus over 2 min → gtt (AVOID if LVEF unknown or HFrEF)
• Oral BB preferred once IV rate controlled
• Amiodarone: if low EF (HFrEF) or HF; 150mg IV over 10 min → infusion

RHYTHM CONTROL (pharmacologic cardioversion — higher success if AF onset <7d):
• Elective DCCV: start 150J biphasic
• Chemical: amiodarone IV (for persistent/HFrEF); consult cardiology

ANTICOAGULATION:
• AF <48h onset: may cardiovert without anticoagulation (or after anticoagulation)
• AF >48h or unknown: anticoagulate ≥3 weeks prior to cardioversion OR TEE/CT-PV to exclude LA thrombus
• Post-cardioversion: anticoagulate ≥4 weeks regardless of CHA₂DS₂-VASc (risk of atrial stunning)
• Long-term AC: CHA₂DS₂-VASc ≥2 (males) or ≥3 (females) → DOAC preferred over warfarin

ELECTROLYTES: Correct K+ >4.0 and Mg2+ >2.0 before cardioversion or antiarrhythmics`,
    monitoring: `• Continuous telemetry with ventricular rate monitoring
• Serial vital signs and hemodynamic assessment
• Daily BMP (K+, Mg2+) — maintain electrolytes in therapeutic range
• QTc monitoring if initiating antiarrhythmic therapy
• If on digoxin: check levels; correct low K+ and Mg2+`,
    disposition: `• ICU/stepdown: hemodynamic instability, cardiogenic shock, refractory RVR, acute decompensated HF
• Cardiology consult for: new AF, cardioversion planning, initiation of rhythm control agents, complex anticoagulation decisions
• Outpatient follow-up: Holter monitor, repeat TTE if new CM, anticoagulation management`
  },

  {
    id: "acs",
    system: "cv",
    title: "Acute Coronary Syndrome (NSTEMI/STEMI)",
    keywords: ["acs","nstemi","stemi","troponin","chest pain","myocardial infarction","mi","st elevation"],
    source: {
      chapter: "Cardiology",
      section: "Acute Coronary Syndrome",
      pages: "14–15",
      authors: "Emily Manning",
      keyFacts: [
        "STEMI: new ≥1mm STE in ≥2 contiguous leads (V2-V3: >2.5mm men <40, >2mm men >40, >1.5mm women) OR new LBBB",
      "Door-to-balloon goal: <90 min for primary PCI; if PCI unavailable within 120 min → fibrinolysis",
      "Type 2 MI: supply-demand mismatch (sepsis, arrhythmia, anemia, surgery) — must have clear precipitating factor; if not, treat as Type 1",
      "Early invasive strategy (cath <24h): troponin elevation, new ischemic ECG changes, GRACE ≥140, hemodynamic instability",
      "hsTnT rule-in (onset ≥3h): ≥52ng/L (F) or ≥34ng/L (M) at 0h AND ≥6ng/L rise at 1h"
      ]
    },
    assessment: `#Acute Coronary Syndrome — [STEMI / NSTEMI / UA]
Troponin: ___  (peak ___). ECG: [STE / STD / TWI / LBBB / normal]
Onset: ___  |  TIMI Risk Score: ___  |  GRACE Score: ___
STEMI criteria: ≥1mm STE in ≥2 contiguous leads (V2-V3: >2.5mm M<40, >2mm M>40, >1.5mm F) OR new LBBB
Type 2 MI: consider if clear precipitating factor (sepsis, arrhythmia, anemia, severe HTN, HF, surgery)`,
    ddx: `• STEMI (ST elevation myocardial infarction) — activate cath lab
• NSTEMI (non-ST elevation MI)
• Unstable angina
• Type 2 MI (supply-demand mismatch: sepsis, severe anemia, arrhythmia, hypertensive emergency, HF)
• Myocarditis (especially young patients, viral prodrome, diffuse STE)
• Aortic dissection (tearing pain, BP differential, widened mediastinum — DO NOT anticoagulate)
• Pericarditis (pleuritic, positional, PR depression, diffuse ST elevation)
• PE (right heart strain pattern, S1Q3T3)
• GERD, esophageal spasm (non-cardiac chest pain)`,
    workup: `• Serial ECGs: q15-30 min initially; posterior leads (V7-V9) if inferior STE or large R in V2-V3
• Troponin I/T (high-sensitivity): 0h and 1-3h; repeat at 6h if initial negative with high suspicion
• BMP, CBC, coagulation studies, LFTs, lipid panel, HbA1c
• CXR (portable)
• Bedside TTE: LV function, WMA, pericardial effusion, r/o mechanical complication
• Type & screen
• Point-of-care ABG if hemodynamically compromised`,
    management: `STEMI (activate cath lab immediately — "door to balloon" <90 min for PCI center):
• Aspirin 324mg PO chewed (load) + P2Y12 inhibitor (ticagrelor 180mg load OR clopidogrel 600mg load)
• Heparin UFH bolus per ACS weight-based protocol
• Activate STEMI protocol — page interventional cardiology
• If PCI unavailable within 120 min from first medical contact: fibrinolysis (tenecteplase preferred)
• Supplemental O2 only if SpO2 <90%
• Nitrates: sublingual NTG × 3 PRN (AVOID if suspected RV infarction, recent PDEi use, or hypotension)

NSTEMI:
• Aspirin 324mg PO chewed + P2Y12 inhibitor (ticagrelor 90mg BID or clopidogrel 75mg daily)
• Anticoagulation: UFH, enoxaparin, or fondaparinux per weight/renal function
• High-intensity statin: atorvastatin 80mg PO
• Beta-blocker: metoprolol succinate (avoid if AV block, active HF, or hypotension)
• ACEi/ARB: initiate if EF ≤40%, HF, HTN, or DM; hold if hemodynamically unstable
• Early invasive strategy (cardiac cath within 24h): troponin elevation, new ischemic ECG changes, GRACE score ≥140, hemodynamic instability, high-risk features
• Urgent cath (<2h): refractory ischemia, cardiogenic shock, severe hemodynamic instability

UNIVERSAL:
• NPO for potential procedure
• Continuous telemetry, IV access, pulse oximetry
• Repeat ECG and troponin per protocol`,
    monitoring: `• Continuous telemetry (watch for reperfusion arrhythmias, new ischemic changes)
• Serial troponins q3-6h until peak identified
• Daily BMP (electrolytes, renal function — especially with ACEi/ARB initiation)
• Blood glucose (target <180 mg/dL inpatient)
• Mechanical complications post-MI: new holosystolic murmur (papillary muscle rupture / VSD), hypotension (free wall rupture)
• HR and BP monitoring with beta-blocker/ACEi titration`,
    disposition: `• ICU/CCU: cardiogenic shock, mechanical complications, malignant arrhythmias
• Stepdown/SDU: NSTEMI pending cath, complex medical management
• Pre-discharge: ensure GDMT (aspirin + P2Y12 + statin + BB + ACEi/ARB) and cardiology follow-up`
  },

  {
    id: "syncope",
    system: "cv",
    title: "Syncope",
    keywords: ["syncope","loss of consciousness","LOC","faint","presyncope","near-syncope","vasovagal","cardiac syncope"],
    source: {
      chapter: "Cardiology",
      section: "Syncope",
      pages: "34",
      authors: "Alexander Jacobs",
      keyFacts: [
        "San Francisco Syncope Rule (SFSR): admit if ≥1 of: non-sinus rhythm or ECG changes, dyspnea, Hct <30%, SBP <90, known HF",
      "Orthostatic hypotension: SBP drop ≥20mmHg OR DBP drop ≥10mmHg within 3 min of standing",
      "Syncope etiology: Reflex ~60%, Orthostatic ~15%, Cardiac ~15%, Neurologic <10%",
      "Head CT/MRI: NOT indicated for routine syncope — only if focal neurological findings",
      "TTE yield: <1% if no underlying heart disease and normal ECG (use ROMEO criteria)"
      ]
    },
    assessment: `#Syncope
Transient loss of consciousness with self-limited recovery consistent with syncope.
Suspected etiology: [ ] Reflex/vasovagal  [ ] Orthostatic  [ ] Cardiac  [ ] Unexplained
High-risk features: [ ] Preceding palpitations  [ ] Exertional syncope  [ ] Syncope while supine  [ ] No prodrome  [ ] Angina  [ ] Known structural heart disease  [ ] ECG changes
SFSR criteria: [ ] ECG changes  [ ] Dyspnea  [ ] Hct <30  [ ] SBP <90  [ ] Known HF (≥1 → high risk, consider admission)`,
    ddx: `• Reflex syncope (~60%): vasovagal (emotion, pain, prolonged standing), situational (cough, micturition, defecation), carotid sinus
• Orthostatic hypotension (~15%): volume depletion, autonomic failure, medication-induced
• Cardiac (~10%): arrhythmia (Brady: CHB, SSS, sinus arrest; Tachy: VT, SVT with hemodynamic compromise), structural (HOCM, AS, cardiac tamponade, PE, acute MI)
• Neurologic (NOT true syncope): vertebrobasilar TIA, seizure (post-ictal, tongue bite, urinary incontinence, prolonged LOC)
• Metabolic: hypoglycemia, hypoxia — exclude first
• Intoxication`,
    workup: `• ECG (obtain immediately): look for ischemia, arrhythmia, QT prolongation, LBBB, Brugada pattern, preexcitation
• Orthostatic vital signs: systolic SBP ≥20 mmHg or diastolic ≥10 mmHg drop within 3 min of standing
• BMP (glucose, electrolytes), CBC
• Cardiac biomarkers (troponin) if concern for ACS or cardiac syncope
• BNP/NT-proBNP if concern for HF
• Fingerstick glucose (immediately — r/o hypoglycemia)
• TTE: if structural heart disease suspected, murmur on exam, or abnormal ECG
• Ambulatory ECG monitoring (Holter, Zio patch): if arrhythmia suspected without captured event
• Tilt table test: if vasovagal suspected and clinical diagnosis unclear
• Head CT/MRI: only if focal neurological findings; NOT indicated for routine syncope workup
• EEG: if seizure suspected`,
    management: `VASOVAGAL / REFLEX SYNCOPE:
• Education: avoid triggers, hydration, increase dietary salt
• Isometric counterpressure maneuvers (leg crossing, hand grip, arm tensing)
• Select patients: midodrine, fludrocortisone, or beta-blockers

ORTHOSTATIC HYPOTENSION:
• Volume repletion (IVF if dehydrated, oral hydration if able)
• Discontinue or reduce offending medications (diuretics, vasodilators, antihypertensives)
• Compression stockings, head-of-bed elevation at night
• Midodrine or fludrocortisone for refractory cases

CARDIAC SYNCOPE:
• Arrhythmia: treat underlying rhythm disorder (pacing for bradycardia, antiarrhythmic or ablation for tachycardia)
• Structural: treat underlying condition (e.g., AVR for critical AS, decompression for tamponade)
• Urgent cardiology consult for high-risk features

ALL PATIENTS:
• Initiate cardiac monitoring (continuous telemetry) during inpatient evaluation
• NPO if going to electrophysiology study or procedure`,
    monitoring: `• Continuous telemetry throughout hospitalization
• Serial orthostatic vital signs
• Repeat ECG if clinical change or new symptoms
• Glucose, electrolytes if metabolic etiology suspected`,
    disposition: `• Discharge home (low risk): single vasovagal episode, clear benign etiology, age <60, no high-risk features, normal ECG and vitals
• Observation/admission: SFSR ≥1 criterion, unexplained syncope, suspected cardiac etiology, trauma from fall, elderly with functional impairment, high-risk occupation
• Cardiology consult: suspected arrhythmic etiology, structural heart disease, high-risk ECG findings`
  },

  // ════════════════════ PULM / CCM ════════════════════
  {
    id: "sepsis",
    system: "pulm",
    title: "Sepsis / Septic Shock",
    keywords: ["sepsis","septic shock","infection","fever","hypotension","lactate","SOFA","vasopressors","bacteremia"],
    source: {
      chapter: "Pulmonary & Critical Care",
      section: "Sepsis & Septic Shock",
      pages: "55–57",
      authors: "Lauren Nguyen",
      keyFacts: [
        "Sepsis-3: life-threatening organ dysfunction (SOFA ≥2) from dysregulated host response to infection",
      "Septic shock: vasopressors required to maintain MAP >65 AND lactate >2 despite adequate IVF resuscitation",
      "Antibiotics: within 1 hour of recognition — each hour of delay ~7.6%/h increase in mortality",
      "Norepinephrine: first-line vasopressor; add vasopressin 0.04 U/min (fixed, not titrated) when NE ≥5-15 mcg/min",
      "IVF: 30 mL/kg LR/NS (crystalloid preferred; balanced > NS for large volumes)"
      ]
    },
    assessment: `#Sepsis / Septic Shock
Meets Sepsis-3 definition: life-threatening organ dysfunction (SOFA ≥2) from dysregulated host response to suspected/confirmed infection.
Suspected source: [ ] Pulmonary  [ ] Urinary  [ ] Skin/soft tissue  [ ] Intraabdominal  [ ] Bloodstream  [ ] Other/Unknown
[ ] SEPTIC SHOCK: vasopressors required to maintain MAP >65 AND lactate >2 mmol/L despite adequate volume resuscitation
Lactate: ___  |  BP: ___  |  MAP: ___  |  SOFA score: ___  |  qSOFA: ___`,
    ddx: `• Infectious sources: pneumonia, UTI, intraabdominal (cholangitis, perforation, abscess), SSTI, bloodstream (CLABSI, endocarditis), meningitis, necrotizing fasciitis
• Non-infectious SIRS mimics: PE, MI, pancreatitis, adrenal crisis, thyroid storm, drug toxicity
• Distributive shock: anaphylaxis, adrenal insufficiency, hepatic failure, neurogenic
• Other shock: hypovolemic, cardiogenic, obstructive (PE, tamponade, tension PTX)`,
    workup: `• Blood cultures x2 sets (at least 1 percutaneous) — BEFORE antibiotics unless will significantly delay
• CBC with differential, BMP, LFTs, coagulation studies (PT/INR, fibrinogen)
• Lactate (initial and 2-3h repeat to assess clearance)
• Urinalysis with micro + urine culture
• CXR (PA or portable)
• Procalcitonin (baseline and trend to guide antibiotic duration)
• Source-directed cultures: sputum (if PNA), wound/fluid cultures, LP if meningitis suspected
• ABG/VBG (if hypoxemia or severe acidemia)
• Troponin + ECG (r/o cardiac trigger; monitor for cardiac dysfunction in sepsis)
• CT chest/abdomen/pelvis (once stabilized, to identify source if occult)
• Consider: 1,3-beta-D-glucan, galactomannan, cryptococcal Ag if fungal infection suspected`,
    management: `1. ANTIBIOTICS (STAT — within 1 hour of recognition):
• Empiric broad-spectrum IV antibiotics — each hour of delay increases mortality ~7.6%/h
• Tailor to suspected source:
  - Pulmonary: ceftriaxone + azithromycin (CAP) OR pip-tazo/cefepime ± vancomycin (HAP/VAP/MRSA risk)
  - UTI: ceftriaxone (uncomplicated); pip-tazo or carbapenem (ESBL risk, urosepsis)
  - Intraabdominal: pip-tazo OR meropenem + metronidazole
  - Skin/soft tissue: vancomycin + pip-tazo (severe); add clindamycin if necrotizing fasciitis
  - Source unknown: vancomycin + pip-tazo (or carbapenem if MDR risk)
• Blood/culture-directed de-escalation at 48-72h

2. FLUIDS:
• Initiate IVF for MAP <65 or lactate ≥4: 30 mL/kg LR/NS over 3h (crystalloid preferred)
• Reassess fluid responsiveness (IVC collapsibility, pulse pressure variation, passive leg raise)
• Avoid over-resuscitation: balanced crystalloid (LR) preferred over NS for large volumes

3. VASOPRESSORS (if MAP <65 despite adequate fluid resuscitation):
• Norepinephrine: FIRST-LINE; start 0.1-0.3 mcg/kg/min; titrate to MAP ≥65
• Vasopressin: add when NE ≥5-15 mcg/min (fixed dose 0.04 U/min; not titrated)
• Epinephrine: second or third agent; consider when NE escalating >25 mcg/min
• Phenylephrine: use if serious NE-associated arrhythmias or high CO with persistent hypotension
• Avoid dopamine (increased arrhythmia risk)

4. CORTICOSTEROIDS (consider in septic shock refractory to vasopressors):
• Hydrocortisone 200-300mg/day IV (continuous infusion or divided q6-8h) if refractory to ≥2 vasopressors
• Ongoing debate; use clinical judgment

5. SOURCE CONTROL:
• Identify conditions requiring intervention: abscesses, cholangitis, GI perforation, empyema, septic arthritis, necrotizing fasciitis
• Remove/replace infected devices when possible
• Low threshold for cross-sectional imaging once stabilized`,
    monitoring: `• Continuous MAP monitoring (arterial line preferred in shock)
• UOP via Foley catheter (goal >0.5 mL/kg/h)
• Repeat lactate at 2-3h (target clearance ≥10-20%)
• Serial CBC, BMP, LFTs q12-24h
• Troponin trend (sepsis-induced cardiomyopathy)
• Glucose monitoring: target <180 mg/dL (start insulin protocol if >180 x2)
• Procalcitonin trend for antibiotic stewardship`,
    disposition: `• ICU: septic shock (pressors, severe organ dysfunction), lactate ≥4 mmol/L, respiratory failure, severe AMS
• Stepdown/SDU: sepsis without shock, high-risk features, close monitoring needed
• Floor: sepsis with contained source, hemodynamically stable, single organ dysfunction`
  },

  {
    id: "pe",
    system: "pulm",
    title: "Pulmonary Embolism (VTE)",
    keywords: ["pe","pulmonary embolism","dvt","deep vein thrombosis","vte","anticoagulation","dyspnea","pleuritic chest pain","hemoptysis"],
    source: {
      chapter: "Pulmonary & Critical Care",
      section: "VTE Diagnostics & Management",
      pages: "47–49",
      authors: "Lauren Nguyen",
      keyFacts: [
        "Massive PE (SBP <90): systemic alteplase 100mg IV over 2h if no contraindications; catheter-directed therapy if contraindications to lysis",
      "Age-adjusted D-dimer (age >50): threshold = age × 10 mcg/L instead of standard 500 mcg/L cutoff",
      "Apixaban for PE: 10mg BID ×7 days → 5mg BID for ≥3 months (DOAC preferred; no LMWH bridge needed)",
      "Provoked PE: 3 months anticoagulation; Unprovoked PE: minimum 3 months, individualize extension decision",
      "Sub-massive PE: anticoagulation cornerstone; PERT activation if available; monitor for decompensation"
      ]
    },
    assessment: `#Pulmonary Embolism
Clinical probability: [ ] Low  [ ] Intermediate  [ ] High  |  Wells Score: ___  |  PERC negative: [ ] Yes  [ ] No
Confirmed PE: [ ] Subsegmental  [ ] Segmental  [ ] Lobar  [ ] Saddle  |  PE Risk: [ ] Low  [ ] Sub-massive (intermediate)  [ ] Massive
RV strain on imaging: [ ] Yes  [ ] No  |  Troponin: ___  |  BNP/NT-proBNP: ___
DVT: [ ] Proximal  [ ] Distal  [ ] Upper extremity  [ ] None identified`,
    ddx: `• Pulmonary embolism (VTE spectrum)
• Pneumothorax (sudden onset, chest pain, dyspnea, decreased breath sounds)
• Pneumonia / pleuritis
• ACS / pericarditis
• ADHF / flash pulmonary edema
• ARDS
• Aortic dissection
• Musculoskeletal / costochondritis`,
    workup: `DIAGNOSTIC WORKUP:
• ECG: sinus tachycardia most common; S1Q3T3, RBBB, anterior TWI (RV strain pattern)
• CXR: often normal; Hampton's hump, Westermark sign (rare and insensitive)
• D-dimer: use only if low-to-intermediate pre-test probability (high NPV, low specificity)
  - Adjust threshold by age: D-dimer threshold = age × 10 mcg/L if >50 yo (or use YEARS algorithm)
• CT Pulmonary Angiography (CTPA): diagnostic gold standard; obtain IV contrast if indicated
• V/Q scan: if CTPA contraindicated (CrCl <30, contrast allergy, pregnancy)
• Bilateral lower extremity Doppler US: if clinical suspicion for DVT or if CTPA not immediately available
• BNP/NT-proBNP, troponin: risk stratification (high values → higher risk of decompensation)
• TTE or bedside echo: RV dilation, McConnell sign, RV dysfunction, assess for shunt
• Hypercoagulability workup: consider in unprovoked VTE (defer to outpatient if possible)`,
    management: `ANTICOAGULATION (start as soon as PE confirmed or high clinical suspicion without contraindication):
Low-risk PE (hemodynamically stable, no RV dysfunction):
• DOAC preferred (apixaban or rivaroxaban first-line over VKA/LMWH)
  - Apixaban 10mg BID x7d then 5mg BID for ≥3 months
  - Rivaroxaban 15mg BID with meals x21d then 20mg daily
• Enoxaparin 1mg/kg SQ BID or 1.5mg/kg SQ daily (if DOAC not available or malignancy)
• UFH: preferred if high bleeding risk or surgical intervention anticipated (reversible with protamine)

Sub-massive PE (intermediate-high risk — hemodynamically stable but RV dysfunction or elevated biomarkers):
• Anticoagulation (as above) — cornerstone of management
• Monitor closely for hemodynamic decompensation
• PE Response Team (PERT) activation if available
• Consider systemic thrombolysis or catheter-directed therapy if deteriorating

MASSIVE PE (hemodynamic instability: SBP <90, shock, cardiac arrest):
• Systemic thrombolysis (if no contraindications): alteplase 100mg IV over 2h
• Catheter-directed thrombolysis or embolectomy: consult IR/CT surgery
• Anticoagulation with UFH infusion
• Vasopressors: norepinephrine first-line for hemodynamic support
• Heparin during CPR (if PE code): tenecteplase preferred; continue CPR ≥15 min post-lysis

IVC FILTER: only if absolute contraindication to anticoagulation

DURATION OF ANTICOAGULATION:
• Provoked PE (major transient risk): 3 months
• Unprovoked PE: minimum 3 months; individualize decision to extend based on bleeding vs. recurrence risk
• Cancer-associated VTE: DOAC > LMWH; treat indefinitely or until cancer resolved`,
    monitoring: `• Hemodynamic monitoring — watch for decompensation (BP, HR, O2 saturation)
• Serial troponin and BNP q12-24h for risk stratification
• TTE in 48-72h if RV dysfunction on initial imaging
• aPTT q6h if on UFH gtt (target 60-100 sec)
• Renal function if on enoxaparin (adjust dose if CrCl <30)
• Monitor for bleeding complications`,
    disposition: `• ICU/stepdown: massive or sub-massive PE, hemodynamic instability, RV dysfunction, requiring close monitoring
• Outpatient-eligible (low-risk PE): PESI I-II, hemodynamically stable, no RV dysfunction, reliable follow-up, adequate home support — consider discharge with DOAC
• Cardiology/pulm + hematology follow-up for unprovoked PE or hypercoagulability workup`
  },

  {
    id: "shock",
    system: "pulm",
    title: "Undifferentiated Shock",
    keywords: ["shock","hypotension","hypoperfusion","distributive","cardiogenic","hypovolemic","obstructive","vasopressors","lactate","MAP"],
    source: {
      chapter: "Pulmonary & Critical Care",
      section: "Shock",
      pages: "54–55",
      authors: "Lauren Nguyen",
      keyFacts: [
        "Distributive (66%): sepsis, anaphylaxis, adrenal; Hypovolemic (16%): hemorrhage, GI losses; Cardiogenic (16%): AMI/HF; Obstructive (2%): PE, tamponade, tension PTX",
      "MAP target ≥65 mmHg for all shock subtypes; cardiogenic shock target ≥60 mmHg",
      "Tension PTX: immediate needle decompression (2nd ICS, MCL) — do NOT wait for CXR",
      "Massive transfusion: pRBC:FFP:platelets = 1:1:1 for hemorrhagic shock",
      "Norepinephrine: first-line for distributive shock; avoid dopamine (increased arrhythmia risk vs. norepinephrine)"
      ]
    },
    assessment: `#Undifferentiated Shock
State of tissue hypoperfusion with end-organ dysfunction. BP: ___  HR: ___  MAP: ___  Lactate: ___
Shock classification pending:
[ ] Distributive (warm extremities, low SVR) — sepsis, anaphylaxis, adrenal crisis, liver failure
[ ] Hypovolemic (cold extremities, low CO, low filling pressures) — hemorrhage, GI losses, third spacing
[ ] Cardiogenic (cold extremities, low CO, elevated filling pressures) — MI, HF, arrhythmia, valve disease
[ ] Obstructive (low CO) — PE, cardiac tamponade, tension PTX
End-organ involvement: AMS [ ] / Oliguria [ ] / Metabolic acidosis [ ] / Elevated lactate [ ]`,
    ddx: `Distributive (66%):
• Sepsis (most common), anaphylaxis, adrenal insufficiency, hepatic failure, neurogenic, drug/toxin
Hypovolemic (16%):
• Hemorrhagic (GIB, trauma, retroperitoneal), GI losses, third spacing (pancreatitis, burns)
Cardiogenic (16%):
• AMI, decompensated HF, myocarditis, severe valvular disease, arrhythmia
Obstructive (2%):
• Massive PE, cardiac tamponade, tension pneumothorax`,
    workup: `• ECG: r/o MI, arrhythmia, pericarditis, RV strain
• CXR: pneumothorax, widened mediastinum, cardiomegaly, pulmonary edema
• Bedside TTE/POCUS: assess LV/RV function, IVC, pericardial effusion, wall motion
• BMP, CBC, LFTs, coagulation, fibrinogen, lactate (repeat q2h)
• Troponin, BNP/NT-proBNP
• Blood cultures x2 (if infectious etiology suspected)
• ABG/VBG: acidosis, O2/CO2 status
• STAT type & screen (if hemorrhagic)
• CT imaging as directed by suspected etiology (CT chest, PE protocol, CT A/P)
• Arterial line + central venous access (A-line preferred for continuous MAP monitoring)
• Foley catheter (monitor UOP)
• PA catheter: consider in cardiogenic shock or undifferentiated shock refractory to initial management`,
    management: `GENERAL (ANY ETIOLOGY):
• Immediate IV access x2 (large bore); resuscitation fluids
• Supplemental O2; intubate if hemodynamically unstable, severe respiratory failure, or inability to compensate for metabolic acidosis
• Target MAP ≥65 mmHg (cardiogenic shock: MAP ≥60 mmHg)

DISTRIBUTIVE (septic/anaphylactic/adrenal):
• IVF: 30 mL/kg LR bolus, reassess
• Norepinephrine: first-line vasopressor; start 0.1-0.3 mcg/kg/min
• Empiric broad-spectrum antibiotics (sepsis within 1h)
• Epinephrine IM (anaphylaxis) → see anaphylaxis protocol
• Hydrocortisone 100mg IV x1 (adrenal crisis) or 200mg/day (septic shock refractory to 2 vasopressors)

HYPOVOLEMIC:
• Aggressive IVF resuscitation with isotonic crystalloid
• Hemorrhagic: activate massive transfusion protocol (pRBCs: FFP: platelets = 1:1:1); STAT surgical/IR consult
• Control source of bleeding

CARDIOGENIC:
• Norepinephrine: first-line vasopressor (avoid dopamine); target MAP ≥60 mmHg
• Inotropes (if low CO without severe hypotension): dobutamine 0.5-1 mcg/kg/min; milrinone 0.125 mcg/kg/min
• Early cardiology/SHOCK team consult; consider urgent cath if ischemic etiology
• Mechanical circulatory support (IABP, Impella, VA-ECMO) — per CCU/cardiology
• Avoid aggressive IVF (worsens congestion)

OBSTRUCTIVE:
• Tension PTX: immediate needle decompression then chest tube
• Cardiac tamponade: emergent pericardiocentesis
• Massive PE: systemic thrombolysis (alteplase 100mg IV over 2h); consider embolectomy`,
    monitoring: `• Continuous arterial line monitoring (MAP goal ≥65 mmHg)
• UOP via Foley catheter (goal >0.5 mL/kg/h)
• Serial lactate q2-4h (target clearance ≥10-20%)
• ScvO2 or MvO2 monitoring (target >70%)
• Vasopressor titration — minimize dose, reassess need q4-8h
• CBC, BMP, coags, LFTs q12-24h`,
    disposition: `• ICU: all patients in shock requiring vasopressors, mechanical ventilation, or multi-organ dysfunction
• Specific ICU: cardiogenic → CCU; septic → MICU; trauma/hemorrhagic → SICU`
  },

  // ════════════════════ GI ════════════════════
  {
    id: "ugib",
    system: "gi",
    title: "Upper GI Bleeding (UGIB)",
    keywords: ["ugib","upper gi bleed","gi bleeding","hematemesis","melena","coffeegrounds","esophageal varices","peptic ulcer","bleed"],
    source: {
      chapter: "Gastroenterology",
      section: "GI Bleeding",
      pages: "60–62",
      authors: "Hugh Shirley",
      keyFacts: [
        "GBS 0-1: outpatient management appropriate; GBS ≥6: high risk, inpatient endoscopy needed",
      "Transfusion threshold: Hgb <7 (target 7-9); Hgb <8 if known CAD — avoid over-transfusion (raises portal pressure in variceal bleeding)",
      "Pre-EGD: pantoprazole 80mg bolus → 8mg/h infusion; erythromycin 250mg IV 30-90 min before EGD",
      "Variceal bleed: octreotide 50mcg bolus → 50mcg/h infusion; ceftriaxone 1g IV q24h ×7d for SBP prophylaxis",
      "EGD timing: within 24h — no mortality benefit of <6h vs. 6-24h for hemodynamically stable patients"
      ]
    },
    assessment: `#Upper GI Bleeding (UGIB)
Bleeding proximal to the ligament of Treitz presenting with [hematemesis / melena / coffee-ground emesis / hematochezia with brisk bleed].
Glasgow-Blatchford Score (GBS): ___  (0-1 = low risk; may consider outpatient management)
Risk stratification: [ ] Low-risk  [ ] High-risk features (HoTN, tachy, INR >1.5, Hgb <10, AMS, syncope, age >65, liver disease, CHF)
ICU criteria: BP <90 + HR >100 for >30 min; Hct <20/Hgb <7 with active significant bleed; requiring >2L IVF or 2u pRBCs to maintain Hct >25`,
    ddx: `• Peptic ulcer disease (most common — gastric or duodenal ulcer)
• Esophageal varices (portal hypertension, cirrhosis)
• Mallory-Weiss tear (forceful vomiting)
• Gastritis / duodenitis
• Dieulafoy lesion
• Esophagitis
• Gastric cancer / malignancy
• Aortoenteric fistula (prior aortic surgery)
• Hemobilia, hemosuccus pancreaticus (rare)
• Brisk lower GI source presenting as UGIB`,
    workup: `• CBC q2-8h, BMP, coagulation studies (PT/INR, PTT), LFTs, type & screen/crossmatch
• Orthostatic vital signs; rectal exam (assess stool color — use white napkin for clarity)
• NG lavage: not generally recommended (no improved outcomes)
• BUN/Cr ratio: BUN >20 suggests UGIB (blood breakdown in GI tract)
• EGD (esophagogastroduodenoscopy): within 24h for inpatient non-variceal UGIB; no benefit of <6h vs. 6-24h for stable patients
• CT angiography (CTA) of abdomen/pelvis: if bleeding too brisk for EGD or for localization before IR
• Tagged red blood cell scan: if active bleeding, negative CTA, or colonoscopy not feasible`,
    management: `STABILIZATION (before endoscopy):
• NPO, 2 large-bore PIVs (18G or larger) or central access
• IV isotonic crystalloid for hypotension; do not delay blood transfusion if actively hemorrhaging
• Transfuse pRBCs for Hgb <7 (target Hgb 7-9); Hgb <8 if known CAD
  - Avoid over-transfusion: excess volume increases portal pressure and can worsen variceal bleeding
• Platelets if <50k; PCC preferred over FFP for INR >1.5 (lower volume, faster onset)
• If uremic bleeding: dDAVP 0.3 mcg/kg IV
• Intubation: consider if large volume hematemesis or AMS with aspiration risk

PRE-ENDOSCOPIC PHARMACOTHERAPY:
• PPI: IV pantoprazole 80mg bolus → 8mg/h continuous infusion (vasoactive effect on ulcers)
• Non-variceal UGIB: PPI 40mg IV BID acceptable if infusion not available
• Suspected variceal bleed: octreotide 50mcg bolus → 50mcg/h infusion (lower portal pressure)
• Ceftriaxone 1g IV q24h x7d (SBP prophylaxis in cirrhotic patients with UGIB)
• Erythromycin 250mg IV 30-90 min before EGD (prokinetic, improves gastric visualization)

ENDOSCOPY:
• EGD within 24h (non-variceal); urgent EGD if variceal or refractory hemodynamic instability
• Banding (EVL) for esophageal varices; sclerotherapy/coagulation for non-variceal

REFRACTORY BLEED:
• IR embolization or TIPS (transjugular intrahepatic portosystemic shunt) for variceal bleed
• Surgery consult if endoscopic and IR interventions fail`,
    monitoring: `• Vital signs q1-4h; continuous telemetry if ICU/HDU
• CBC q4-8h (Hct drop lags 24-72h from bleeding onset)
• Renal function, electrolytes daily
• UOP monitoring (Foley catheter if ICU or hemodynamically compromised)
• BUN/Cr ratio: rising BUN with stable Cr suggests ongoing or re-bleeding
• Reassess hemostasis: serial abdominal exam, stool output color and volume`,
    disposition: `• ICU: hemodynamic instability, active hemorrhage, variceal bleed, GBS >6, requires intubation
• Floor: stable vitals, low GBS, responds to initial resuscitation
• Consider outpatient management: GBS 0-1, no high-risk endoscopic stigmata, reliable follow-up`
  },

  // ════════════════════ NEPHROLOGY ════════════════════
  {
    id: "aki",
    system: "neph",
    title: "Acute Kidney Injury (AKI)",
    keywords: ["aki","acute kidney injury","creatinine","oliguria","uremia","renal failure","hypovolemia","ATN","prerenal","dialysis"],
    source: {
      chapter: "Nephrology",
      section: "Acute Kidney Injury",
      pages: "87–88",
      authors: "Felicita Kuperwasser",
      keyFacts: [
        "KDIGO Stage 1: Cr ×1.5-1.9 or ↑≥0.3mg/dL within 48h; Stage 2: Cr ×2-2.9; Stage 3: Cr ×3 or ≥4.0 or anuria ×12h",
      "FENa <1% pre-renal (valid only in oliguria, NOT on diuretics); FEUrea <35% pre-renal (use if on diuretics)",
      "RRT indications (AEIOU): Acidosis pH <7.0, Electrolytes K+ >6.5 with ECG changes, Intoxication, volume Overload, Uremia (encephalopathy, pericarditis, neuropathy)",
      "Contrast-induced AKI: no role for N-acetylcysteine; use isotonic IVF pre/post if high risk (CrCl <45, DM, prior AKI)",
      "Hold ACEi/ARBs and NSAIDs in pre-renal AKI; stop nephrotoxins (aminoglycosides, vancomycin)"
      ]
    },
    assessment: `#Acute Kidney Injury (AKI)
KDIGO Stage: [ ] Stage 1 (Cr ×1.5-1.9 or ↑0.3 mg/dL within 48h or UOP <0.5 mL/kg/h x6-12h)
             [ ] Stage 2 (Cr ×2.0-2.9 or UOP <0.5 mL/kg/h x12h)
             [ ] Stage 3 (Cr ×3.0 or ≥4.0 mg/dL or ↑≥0.3 and absolute Cr ≥4.0 or UOP <0.3 mL/kg/h x24h or anuria x12h)
Baseline Cr: ___  Current Cr: ___  UOP: ___
AKI category: [ ] Pre-renal  [ ] Intrinsic (ATN / GN / AIN / vascular)  [ ] Post-renal (obstruction)`,
    ddx: `Pre-renal:
• Hypovolemia (dehydration, hemorrhage, GI losses, burns)
• Reduced renal perfusion: HF (cardiorenal syndrome), cirrhosis (hepatorenal syndrome)
• Medications: NSAIDs, ACEi/ARBs, CNIs

Intrinsic:
• ATN (most common inpatient): ischemia (sepsis, hypotension), nephrotoxins (contrast, aminoglycosides, vancomycin, myoglobin)
• AIN (drug-induced — NSAIDs, PCN, cephalosporins, PPIs, sulfonamides, allopurinol)
• Glomerulonephritis (GN): RPGNs — check UA for RBC casts, proteinuria
• Vascular: TTP/HUS, cholesterol emboli, renal artery stenosis

Post-renal:
• Obstruction: BPH, pelvic malignancy, nephrolithiasis, retroperitoneal fibrosis`,
    workup: `1. History/Exam: volume status, exposures (contrast, nephrotoxins, meds), recent infection, trauma/myalgias
2. Urinalysis + urine microscopy: RBC casts (GN), WBC casts (AIN/pyelonephritis), granular casts (ATN), hyaline casts (pre-renal)
3. Urine chemistries:
   • FENa: <1% pre-renal, >2% ATN (only valid in OLIGURIA, not on diuretics)
   • FEUrea: <35% pre-renal (use if on diuretics)
   • Urine osm: >500 pre-renal; <350 ATN
   • Urine protein: if proteinuria → albumin/creatinine ratio; APR >0.4 suggests glomerular process
4. Bladder ultrasound → renal ultrasound: r/o hydronephrosis, estimate renal size
5. If GN suspected: ANA, ANCA, anti-GBM, C3/C4, anti-dsDNA, SPEP/UPEP, cryoglobulins, ASLO
6. If rhabdomyolysis: CK, uric acid, LDH, urine myoglobin
7. Drug levels if applicable (vancomycin, tacrolimus, cyclosporine)`,
    management: `1. OPTIMIZE HEMODYNAMICS — treat the cause:
   • Pre-renal: IVF (isotonic; LR preferred for large volumes); hold diuretics, NSAIDs, ACEi/ARBs
   • Obstructive: Foley catheter for BPH; urology consult for ureteral obstruction; IR for nephrostomy
   • ATN: stop nephrotoxins, optimize perfusion; NO benefit from empiric diuretics in oliguric ATN
   • AIN: stop offending drug; consider steroids (prednisone 1mg/kg/d x2-4 weeks) if progressive

2. RENAL DOSING: adjust all medications for GFR; if creatinine rising, assume GFR lower than calculated

3. MANAGE COMPLICATIONS:
   • Hyperkalemia: calcium gluconate (stabilize), insulin/D50, sodium bicarbonate, albuterol (shift); sodium zirconium cyclosilicate/lokelma (eliminate)
   • Hyperphosphatemia: sevelamer or calcium acetate; low phosphorus diet
   • Metabolic acidosis: sodium bicarbonate PO/IV
   • Uremic bleeding: dDAVP 0.3 mcg/kg IV
   • Volume overload: loop diuretics if responsive

4. INDICATIONS FOR RENAL REPLACEMENT THERAPY (AEIOU mnemonic):
   • A — Refractory Acidosis (pH <7.0)
   • E — refractory Electrolyte abnormalities (hyperkalemia with ECG changes or K >6.5)
   • I — Intoxication (lithium, ethylene glycol, salicylates, metformin, theophylline)
   • O — refractory volume Overload
   • U — Uremia (encephalopathy, pericarditis, neuropathy)`,
    monitoring: `• Daily BMP (creatinine trajectory, K+, HCO3-)
• UOP via Foley catheter q1-4h
• Daily weight (volume status assessment)
• Telemetry if K+ >5.5 or ECG changes
• Medication reconciliation — renal-dose adjust daily`,
    disposition: `• Nephrology consult: severe AKI (Stage 3), suspected GN/AIN, rapidly progressive AKI without clear etiology, dialysis consideration
• ICU: dialysis-requiring AKI, hemodynamic instability, multi-organ failure, anuric AKI with hyperkalemia/acidosis
• Consider discharge when: creatinine trending down/stable, adequate UOP, reversible cause identified and treated`
  },

  {
    id: "hyponatremia",
    system: "neph",
    title: "Hyponatremia",
    keywords: ["hyponatremia","hyponatremia","low sodium","siadh","sodium","hypovolemia","free water excess","osmolality","ams seizure sodium"],
    source: {
      chapter: "Nephrology",
      section: "Sodium Disorders",
      pages: "95–96",
      authors: "Felicita Kuperwasser",
      keyFacts: [
        "SIADH: uOsm >100, uNa >40, euvolemia, serum uric acid <4 mg/dL, BUN <5, FEUa ≥10-12%",
      "Symptomatic hyponatremia: 3% NaCl 100mL IV bolus × up to 3 times until symptoms resolve or Na↑ by 5 mEq/L; max correction ≤8-10 mEq/L/24h",
      "ODS high-risk: Na ≤110, hypokalemia, malnutrition, liver disease, alcoholism — limit correction to ≤4-6 mEq/L/24h",
      "DDAVP clamp 2mcg IV/SQ q6-8h: use if ODS risk or Na correcting too rapidly",
      "Overcorrection: if Na rises >8 mEq/L/24h → D5W 3 mL/kg/h + DDAVP to re-lower Na"
      ]
    },
    assessment: `#Hyponatremia
Serum Na: ___  |  Rate of change: [ ] Acute (<48h)  [ ] Chronic (≥48h)  [ ] Unknown
Severity: [ ] Mild (130-135)  [ ] Moderate (125-129)  [ ] Severe (<125)
Symptoms: [ ] Asymptomatic  [ ] Mild (nausea, HA)  [ ] Moderate/severe (AMS, seizures, respiratory depression)
Volume status: [ ] Hypovolemic  [ ] Euvolemic  [ ] Hypervolemic
Urine osmolality: ___  |  Urine Na: ___  |  Serum osmolality: ___`,
    ddx: `Hypovolemic hyponatremia (Na losses > water retention):
• GI losses (diarrhea, vomiting), renal losses (diuretics, Addison's disease, salt-wasting nephropathy)

Euvolemic hyponatremia:
• SIADH (most common euvolemic): uOsm >100, uNa >40, serum uric acid typically <4, BUN <5, FEUa ≥10-12%
  - Causes: CNS disorders, pulmonary disease, medications (SSRIs, carbamazepine, cyclophosphamide, opioids), surgery
• Hypothyroidism (check TSH)
• Adrenal insufficiency (check AM cortisol)
• Psychogenic polydipsia (uOsm <100, uNa <20)
• SIADH due to pain/nausea

Hypervolemic hyponatremia (water excess > Na retention):
• CHF, cirrhosis, nephrotic syndrome, CKD/ESRD
• Note: uNa typically <20 in CHF/cirrhosis (EABV), >40 in ESRD`,
    workup: `• Serum: BMP, serum osmolality, uric acid, TSH, AM cortisol (if adrenal insufficiency suspected)
• Urine: UA, urine osmolality, urine Na, urine uric acid
• Determine if ADH is present: uOsm >100 → ADH present
• Key diagnostic clues:
  - SIADH: sUA <4, BUN <5, FEUa ≥10-12%, uNa >40, euvolemia
  - Hypovolemia: sUA >5, BUN elevated, FEUa <4%, uNa <20
• Distinguish SIADH subtypes (reset osmostat, SIAD) if chronic and refractory`,
    management: `SEVERE SYMPTOMATIC (seizures, AMS, respiratory depression):
• 3% NaCl 100mL IV bolus over 10 min; repeat up to 3x until symptoms resolve OR Na ↑by 5 mEq/L
• Target INITIAL increase: 4-6 mEq/L in first 6h
• Max correction: ≤8-10 mEq/L per 24h (high ODS risk: ≤4-6 mEq/L per 24h)

SEVERE ASYMPTOMATIC (Na <120):
• 3% NaCl at 15-30 mL/h (correction rate per calculation); titrate to Na ≥125
• Renal consult if needs 3% NaCl and/or DDAVP clamp

MODERATE/MILD HYPONATREMIA:
• SIADH: fluid restriction 1-1.5L/day ± PO salt tabs; identify and treat underlying cause
• Hypovolemic: NS 0.9% IV → correct volume deficit first; Na will correct as volume restored
• Hypervolemic (CHF): diuresis; optimize GDMT
• Hypervolemic (cirrhosis): fluid restriction + diuretics (spironolactone ± furosemide)
• Hypothyroidism: thyroid hormone replacement
• Adrenal insufficiency: hydrocortisone

OVERCORRECTION PREVENTION (Osmotic Demyelination Syndrome — ODS):
• ODS risk factors: Na ≤110, hypokalemia, malnutrition, liver disease, alcoholism
• DDAVP 2mcg IV/SQ q6-8h (DDAVP clamp) if risk of rapid overcorrection
• If Na overcorrects (>8 mEq/L in 24h): D5W 3mL/kg/h + DDAVP clamp to re-lower Na
• ODS: delayed (2-6 days) dysarthria, dysphagia, paresis, AMS; MRI confirms at 4 weeks`,
    monitoring: `• Serum Na q2-4h while on active correction (3% NaCl or IVF)
• Serum Na q4-8h once goal range achieved
• Strict I&O (fluid restriction monitoring)
• Urine output and urine Na (monitor for aquaresis with vaptans or correction pattern)
• Neurologic exam (assess for improvement of symptoms, watch for ODS signs)`,
    disposition: `• ICU/stepdown: symptomatic hyponatremia requiring 3% NaCl, seizing, AMS, Na <120
• Nephrology consult: severe hyponatremia (<120), symptomatic, requiring hypertonic saline or DDAVP clamp
• Discharge when: clinically stable, Na trending appropriately, underlying cause identified and treated`
  },

  {
    id: "hyperkalemia",
    system: "neph",
    title: "Hyperkalemia",
    keywords: ["hyperkalemia","high potassium","k+","peaked t waves","cardiac","ekg changes","renal","ckd","aki","acidosis"],
    source: {
      chapter: "Nephrology",
      section: "Potassium Disorders",
      pages: "96–97",
      authors: "Felicita Kuperwasser",
      keyFacts: [
        "ECG changes: peaked T-waves → prolonged PR → widened QRS → sine wave → VF/asystole",
      "Calcium gluconate 1-2g IV over 5-10 min: membrane stabilization only (does NOT lower K+); onset 1-3 min, duration 30-60 min; AVOID if on digoxin",
      "Insulin 5-10U IV + D50 25-50mL: shifts K+ into cells; onset 15-30 min, duration 4-6h; check glucose q1h",
      "Sodium zirconium cyclosilicate (Lokelma) 10g TID ×48h: fastest oral K+ elimination (onset ~1h)",
      "Stop offending agents: ACEi/ARBs, NSAIDs, K+-sparing diuretics, TMP-SMX"
      ]
    },
    assessment: `#Hyperkalemia
Serum K+: ___  (confirm with repeat if suspicion of hemolysis/lab artifact)
Severity: [ ] Mild (5.1-5.9)  [ ] Moderate (6.0-6.4)  [ ] Severe (≥6.5 or any with ECG changes)
ECG: [ ] Peaked T-waves  [ ] Prolonged PR  [ ] Widened QRS  [ ] Sine wave pattern  [ ] Normal
Clinical: [ ] Asymptomatic  [ ] Weakness  [ ] Palpitations  [ ] Cardiac arrest risk
Etiology workup: Acidosis / Aldosterone↓ / Beta-blockers / Blood lysis / Cell lysis / Drugs / DM / Decreased GFR`,
    ddx: `Redistribution (usually transient — may not require elimination):
• Cell lysis: hemolysis, rhabdomyolysis, tumor lysis syndrome
• Acidosis (metabolic/respiratory)
• Insulin deficiency / hyperglycemia
• Beta-blockers, digoxin toxicity
• Hyperkalemic periodic paralysis

Decreased Renal K+ Excretion (required for persistent hyperK):
• Decreased aldosterone: ACEi/ARBs, NSAIDs, K+-sparing diuretics, type IV RTA, heparin, calcineurin inhibitors
• AKI/CKD (GFR <15 mL/min usually required for hyperK)
• Impaired distal Na delivery: hypovolemia, CHF, cirrhosis`,
    workup: `• STAT ECG (do NOT wait for confirmed lab; ECG changes guide urgency)
• Repeat serum K+ (confirm; r/o pseudohyperkalemia: platelets >500k, WBC >120k, hemolysis)
• Consider blood gas K+ if pseudohyperkalemia suspected
• BMP (renal function, glucose, bicarbonate)
• Review medications for offending agents
• If new: workup for AKI vs. CKD progression
• 24h urine K+ and TTKG (if etiology unclear — decreased TTKG suggests impaired K+ excretion)`,
    management: `TREAT IF: ECG changes, K+ ≥6, rapid rise, or symptomatic

1. STABILIZE (cardiac membrane protection — FIRST if ECG changes):
• Calcium gluconate 1-2g IV over 5-10 min (or CaCl2 via central line for faster onset)
• Repeat q5 min PRN; onset 1-3 min, duration 30-60 min
• AVOID if on digoxin (hypercalcemia potentiates dig toxicity)

2. REDISTRIBUTE (shift K+ into cells — temporizing):
• Insulin 5-10 U IV regular + D50 25-50mL (to prevent hypoglycemia)
  - Onset 15-30 min; duration 4-6h; monitor glucose
• Sodium bicarbonate 1-2 amps IV (if metabolic acidosis or pH <7.2)
  - Onset 5-10 min; duration 1-2h
• Albuterol 10-20mg nebulized (onset 15-30 min)
• Dialysis: fastest elimination in unstable patients; preferred over CVVH if hemodynamically stable

3. ELIMINATE (actual K+ removal — key to resolution):
• Sodium zirconium cyclosilicate (Lokelma) 10g PO TID x48h → 10g daily maintenance (fastest onset: 1h)
• Patiromer 8.4g PO daily (onset slower, use for non-acute maintenance)
• Furosemide (if adequate renal function and not oliguric)
• Bowel regimen (stool K+ losses)

4. ADDRESS REVERSIBLE CAUSES:
• Hold ACEi/ARBs, NSAIDs, K+-sparing diuretics, TMP-SMX
• Low-potassium diet
• Optimize volume status
• Treat acidosis if present`,
    monitoring: `• Repeat serum K+ q2-4h while actively treating
• Serial ECGs if initial ECG changes — watch for normalization
• Glucose checks q1h after insulin (hypoglycemia risk)
• Continuous telemetry until K+ <5.5 and ECG normalized`,
    disposition: `• ICU: ECG changes, K+ ≥6.5, cardiac arrhythmia, requires dialysis
• Telemetry floor: K+ 6.0-6.4 without ECG changes, requires close monitoring
• Nephrology consult: suspected need for RRT, AKI Stage 3, ESRD with hyperK, refractory hyperK`
  },

  {
    id: "dka",
    system: "endo",
    title: "Diabetic Ketoacidosis (DKA)",
    keywords: ["dka","diabetic ketoacidosis","hyperglycemia","anion gap","ketoacidosis","glucose","insulin","bicarbonate","acidosis"],
    source: {
      chapter: "Endocrinology",
      section: "Diabetes & Hypoglycemia",
      pages: "171–172",
      authors: "Shraddha Damaraju",
      keyFacts: [
        "CRITICAL — Do NOT start insulin if K+ <3.3 mEq/L: hold insulin, replace K+ 40 mEq/h until K+ ≥3.5, THEN start insulin (prevents fatal hypokalemia)",
      "DKA severity: Mild pH 7.25-7.30 / HCO₃ 15-18; Moderate pH 7.00-7.24 / HCO₃ 10-15; Severe pH <7.00 / HCO₃ <10",
      "Bicarbonate: consider ONLY if pH <7.0 — avoid routine use (worsens cerebral acidosis and hypokalemia)",
      "Resolution: AG closed AND β-hydroxybutyrate <1 mmol/L — urine ketones unreliable (measures acetoacetate only, not β-OHB)",
      "Euglycemic DKA: consider if on SGLT-2 inhibitor, pregnancy, or alcohol — glucose may be normal despite true DKA"
      ]
    },
    assessment: `#Diabetic Ketoacidosis (DKA)
Glucose: ___  |  pH: ___  |  HCO3: ___  |  Anion Gap: ___ (corrected for albumin)
Severity: [ ] Mild (pH 7.25-7.30, AG >10, HCO3 15-18)  [ ] Moderate (pH 7.00-7.24, HCO3 10-15)  [ ] Severe (pH <7.00, HCO3 <10)
Precipitant (6 I's): [ ] Infection (PNA/UTI)  [ ] Initial DM presentation  [ ] Insulin non-adherence  [ ] Inflammation (pancreatitis)  [ ] Infarction (MI/CVA)  [ ] Iatrogenic (SGLT2i, steroids)
Consider euglycemic DKA if on SGLT-2 inhibitor, pregnancy, or alcohol-related liver disease`,
    ddx: `• DKA (Type 1 > Type 2 DM, SGLT-2i-associated euglycemic DKA)
• HHS (hyperosmolar hyperglycemic state): glucose often >600, osmolarity >320, minimal ketoacidosis
• Alcoholic ketoacidosis (AKA): low/normal glucose, no significant hyperglycemia, EtOH history
• Starvation ketosis: low anion gap, no acidemia
• Other high AG acidosis: lactic acidosis, ingestions (ASA, methanol, ethylene glycol)`,
    workup: `• BMP (q2h until AG closes → q4h until normal K+); correct Na for glucose
  - Corrected Na = Measured Na + 0.02 × (Glucose − 100)
• Serum β-hydroxybutyrate (q2-4h; UA ketone does NOT measure β-OHB)
• ABG or VBG (if HCO3 reduced or hypoxemic)
• CBC with differential
• Urinalysis + urine culture
• Serum osmolality
• Fingerstick glucose q1h while on insulin infusion
• Consider: hs-troponin, ECG, blood cultures (if infection suspected), CXR, lipase/amylase
• Phosphorus level (often profoundly depleted)`,
    management: `PRIORITIES: Volume → Electrolytes (K+) → Glucose (in that order)

STEP 1 — FLUIDS (typical deficit 5-8L):
• Bolus LR 15-20 mL/kg/h over first 1-2h
• Corrected Na LOW: start NS or LR ± K+ at 250-500 mL/h
• Corrected Na NORMAL or HIGH (or hyperchloremic acidosis): start ½NS or LR ± K+ at 250-500 mL/h
• Add D5W to IVF once BG <250 (DKA) to avoid hypoglycemia while continuing insulin

STEP 2 — POTASSIUM (replace before insulin if K+ <3.5):
• K+ <3.3: HOLD insulin → replace 40 mEq/h until K+ ≥3.5 → THEN start insulin
• K+ 3.3-5.0: add 20-40 mEq K+ to each liter of IVF
• K+ >5.0: hold K+ replacement; check q2h; watch for rapid K+ drop with insulin

STEP 3 — INSULIN:
• Do NOT start insulin if K+ <3.3 (fatal hypokalemia risk)
• Bolus: 0.1 U/kg regular insulin IV (optional; some protocols skip bolus)
• Infusion: 0.1 U/kg/h regular insulin IV
• Goal: AG closes, β-OHB <1 mmol/L
• Transition to SQ insulin: when AG closed AND patient eating; overlap insulin gtt with first SQ dose by 2h

BICARBONATE:
• Consider ONLY if pH <7.0 (rarely indicated; sodium bicarbonate 100 mEq in 400 mL D5W + 20 mEq KCl over 2h)
• AVOID routine bicarbonate — may worsen cerebral acidosis and hypokalemia

PHOSPHORUS: replace if <1.0 mg/dL or symptomatic

IDENTIFY AND TREAT PRECIPITANT`,
    monitoring: `• BMP q2h until AG closes, then q4h
• VBG q2-4h (trend pH and bicarb)
• Serum β-OHB q2-4h
• Fingerstick glucose q1h while on insulin infusion
• K+ trend — most critical during initial resuscitation
• Urine output monitoring (Foley catheter)`,
    disposition: `• ICU: severe DKA (pH <7.0), hemodynamic instability, AMS, inability to protect airway, concurrent STEMI or sepsis
• Stepdown/Floor: mild-moderate DKA, close nursing monitoring for insulin protocol
• Transition to subQ insulin and initiate diabetic education before discharge`
  },

  // ════════════════════ ID ════════════════════
  {
    id: "ssti",
    system: "id",
    title: "Cellulitis / SSTI",
    keywords: ["cellulitis","ssti","skin infection","soft tissue","mrsa","wound","erythema","abscess","necrotizing fasciitis","furuncle"],
    source: {
      chapter: "Infectious Disease",
      section: "Skin & Soft Tissue Infections",
      pages: "110–111",
      authors: "Alec Ohanian",
      keyFacts: [
        "Non-purulent mild cellulitis: cephalexin 500mg QID ×5d — Strep >> Staph; add TMP-SMX DS only if trauma or MRSA risk",
      "Purulent abscess: I&D is primary treatment — no antibiotics needed if well-drained, immunocompetent, and no systemic signs",
      "Blood cultures: low yield <10% — obtain only if systemic toxicity, extensive involvement, immunosuppressed, or special exposures (bites, water)",
      "ALT-70 score: location + age + WBC + HR — use to avoid antibiotics in bilateral lower extremity erythema mimics",
      "Necrotizing fasciitis: IMMEDIATE surgical debridement + vancomycin + pip-tazo + clindamycin (antitoxin); do NOT delay surgery for imaging"
      ]
    },
    assessment: `#Skin & Soft Tissue Infection (Cellulitis / SSTI)
Location: ___  |  Size/Extent: ___  |  Purulence: [ ] Yes (abscess)  [ ] No (non-purulent)
Severity: [ ] Mild (local infection, no systemic signs)  [ ] Moderate (systemic signs of infection)  [ ] Severe (systemic sepsis, rapid spread, immunocompromised, deeper involvement)
Risk factors: [ ] DM  [ ] Immunosuppression  [ ] PWID  [ ] Lymphedema/venous stasis  [ ] Prior MRSA  [ ] Trauma/biopsy site
Necrotizing fasciitis excluded: [ ] Yes  [ ] Concern — surgical consult needed
ALT-70 score: ___ (if score low, consider avoiding antibiotics for bilateral lower extremity erythema)`,
    ddx: `Non-infectious mimics (especially bilateral lower extremity — consider strongly):
• Venous stasis dermatitis
• Lipodermatosclerosis
• DVT
• Contact dermatitis, drug reaction
• Gout / crystal arthropathy
• Lymphedema
Infectious:
• Cellulitis (non-purulent — typically Streptococcal)
• Abscess (purulent — typically S. aureus including MRSA)
• Erysipelas (well-demarcated, superficial, upper dermis)
• Necrotizing fasciitis (surgical emergency — gas in soft tissue, out-of-proportion pain, rapid spread, systemic toxicity)
• Septic arthritis / bursitis / osteomyelitis (if near joint or bone)`,
    workup: `• Clinical diagnosis — no routine labs needed for mild non-purulent cellulitis
• WBC, BMP (assess systemic infection, baseline renal function for dosing)
• Blood cultures: LOW yield (<10%); obtain if systemic toxicity, extensive involvement, immunosuppressed, surgical wound, special exposures (bites, water), extremes of age
• Wound/drainage culture (if abscess): aspirate or swab after I&D
• US (soft tissue): assess for drainable abscess or gas
• Plain radiograph: r/o underlying osteomyelitis, gas in soft tissue
• MRI soft tissue: gold standard for necrotizing fasciitis vs. cellulitis; CT can also assess (gas tracking along fascia)
• Mark borders with skin marker + time/date; photograph daily`,
    management: `NON-PURULENT CELLULITIS:
Organisms: Group A Strep >> S. aureus > GNRs
• Mild: cephalexin 500mg PO QID OR dicloxacillin 500mg PO QID × 5d (up to 14d if slow response)
• Moderate (systemic signs): cefazolin 1-2g IV q8h OR oxacillin
• Severe/MRSA risk or failure to PO: vancomycin IV (goal trough 10-20 or AUC-guided)
• Duration: 5 days (up to 14d if delayed improvement); elevate limb; document margins daily

PURULENT CELLULITIS / ABSCESS:
Organisms: S. aureus (MRSA >> MSSA)
• I&D: primary treatment for abscess regardless of severity
• Mild: I&D alone (no antibiotics if well-drained and no systemic signs in immunocompetent)
• Moderate: TMP-SMX DS (1-2 tabs PO BID) OR clindamycin 300-450mg PO TID × 5-7d
• Severe/MRSA: vancomycin IV; linezolid if outpatient MRSA

NECROTIZING FASCIITIS (surgical emergency):
• IMMEDIATE surgical consult for operative debridement
• Broad-spectrum IV antibiotics: vancomycin + pip-tazo + clindamycin (antitoxin)
• ICU-level care; high mortality if delayed surgery
• IVIG: consider in streptococcal toxic shock syndrome`,
    monitoring: `• Daily wound inspection — photograph and measure erythema margins (use marker)
• Systemic signs q8-12h (temperature, WBC)
• Monitor for worsening despite antibiotics at 48-72h (consider deeper infection, resistant organism, non-infectious etiology)
• Renal function if on vancomycin (AUC-guided dosing preferred)`,
    disposition: `• Outpatient: mild cellulitis without systemic signs, non-purulent or I&D-treated abscess, adequate oral intake
• Inpatient: systemic infection signs, failure of outpatient therapy, immunocompromised, inability to take PO, necrotizing fasciitis concern, rapidly spreading infection
• Surgical consult: fluctuant abscess needing I&D, suspected necrotizing fasciitis, osteomyelitis`
  },

  // ════════════════════ NEUROLOGY / PSYCH ════════════════════
  {
    id: "ams",
    system: "neuro",
    title: "Altered Mental Status / Delirium",
    keywords: ["ams","altered mental status","delirium","confusion","encephalopathy","agitation","acute confusion","disorientation"],
    source: {
      chapter: "Neurology",
      section: "Altered Mental Status & Delirium",
      pages: "183–184",
      authors: "Thomas Ituarte",
      keyFacts: [
        "CAM criteria: Acute onset + fluctuating course AND Inattention AND (Disorganized thinking OR Altered LOC) — all 3 required for delirium diagnosis",
      "FIRST action: fingerstick glucose STAT — immediately reversible and must be excluded before any other workup",
      "Wernicke's: thiamine 500mg IV TID ×7d BEFORE glucose/dextrose in alcoholic or malnourished patients",
      "HSV encephalitis: acyclovir 10 mg/kg IV q8h empirically — do NOT wait for MRI or CSF PCR to initiate",
      "Non-pharmacologic delirium Rx (first-line): reorientation, sleep-wake cycle optimization, early mobilization, minimize anticholinergic medications, remove unnecessary lines/catheters"
      ]
    },
    assessment: `#Altered Mental Status (AMS) / Delirium
Baseline mental status: ___  |  Onset: [ ] Acute (<24h)  [ ] Subacute (days)  [ ] Chronic (weeks-months)
Delirium subtype: [ ] Hyperactive (agitation, psychosis)  [ ] Hypoactive (lethargy, withdrawal)  [ ] Mixed
Reversible causes screened: [ ] Infection  [ ] Metabolic  [ ] Medications/Toxins  [ ] Structural/Neurologic  [ ] Psychiatric
CAM criteria: Acute onset + fluctuating course AND [Inattention] AND [Disorganized thinking OR altered LOC]`,
    ddx: `Structural/Neurologic (must rule out urgently):
• Stroke / TIA, subdural hematoma, ICH, subarachnoid hemorrhage
• CNS infection (bacterial meningitis, viral encephalitis, HSV encephalitis — empiric treatment if suspected)
• Seizure (postictal state, non-convulsive status epilepticus — NCSE)
• Hypertensive encephalopathy

Metabolic / Toxic:
• Hypoglycemia (check immediately)
• Hyponatremia, hypercalcemia, hepatic encephalopathy, uremia
• Hypothyroidism, adrenal insufficiency
• Hypoxia, hypercarbia, sepsis
• Medications: anticholinergics, benzodiazepines, opioids, steroids, antiepileptics, polypharmacy
• Intoxication or withdrawal (alcohol, benzodiazepines)

Psychiatric:
• Psychosis (r/o organic etiology first)
• Mania, severe depression`,
    workup: `EMERGENT (before anything else):
• Fingerstick glucose (STAT — hypoglycemia is immediately reversible)
• SpO2 + ABG if hypoxemic
• ECG (r/o arrhythmia causing hypoperfusion)

INITIAL LABS:
• BMP (Na, K, Ca, BUN/Cr, glucose), LFTs (ammonia if liver disease), TSH
• CBC with differential
• Urinalysis + urine culture (r/o UTI — common precipitant in elderly)
• Blood cultures if febrile or sepsis suspected
• Thiamine level + B12 (malnutrition, alcoholism)
• Toxicology screen (urine + serum; ethanol level)
• ABG/VBG (r/o hypercapnia, severe acidemia)

NEUROIMAGING:
• STAT NCHCT: r/o hemorrhage, large territorial infarct, mass effect (do before LP if concern for elevated ICP)
• MRI brain with and without contrast (preferred): if focal neurologic findings, seizure, encephalitis concern, or CT non-diagnostic
• CT angiography: if concern for large vessel occlusion or vascular malformation

LP (lumbar puncture) — consider if:
• Fever + AMS + meningismus → suspect bacterial meningitis (treat empirically while awaiting CT and LP)
• Encephalitis concern (HSV, autoimmune, EBV, CMV)
• CSF VDRL (if neurosyphilis suspected)

EEG:
• Urgent if: suspected NCSE, unexplained AMS after seizure, or refractory altered MS after treatment

ADDITIONAL:
• Blood cultures (before antibiotics in meningitis/encephalitis)
• Medication reconciliation (Beers criteria medications, anticholinergic burden, sedating medications)`,
    management: `1. TREAT UNDERLYING CAUSE (primary intervention):
   • Hypoglycemia: D50W 50mL IV or glucagon 1mg IM/SQ
   • Bacterial meningitis: empiric vancomycin + ceftriaxone (± ampicillin if >50yo or immunocompromised) + dexamethasone; LP AFTER empiric antibiotics
   • HSV encephalitis: acyclovir 10mg/kg IV q8h (empiric, pending MRI and CSF PCR)
   • Wernicke's encephalopathy: thiamine 500mg IV TID × 7d (give BEFORE glucose in alcoholic)
   • Hepatic encephalopathy: lactulose, rifaximin, treat precipitant
   • Opioid toxicity: naloxone 0.4-2mg IV/IM/IN; titrate to effect
   • Benzodiazepine toxicity: supportive care; flumazenil rarely indicated

2. NON-PHARMACOLOGIC DELIRIUM MANAGEMENT (first-line):
   • Reorient frequently (clock, calendar, family at bedside)
   • Optimize sleep-wake cycle (avoid nighttime disruptions, dim lights at night)
   • Early mobilization and physical/occupational therapy
   • Correct sensory deficits (hearing aids, glasses)
   • Minimize anticholinergic, sedating, and Beers medications
   • Avoid urinary catheters and physical restraints when possible

3. PHARMACOLOGIC MANAGEMENT (agitation only, when non-pharmacologic measures fail):
   • Haloperidol 0.5-1mg PO/IV q6-8h PRN (lower doses in elderly); check QTc
   • Quetiapine 12.5-25mg PO BID PRN (may be preferred in Parkinson's, dementia with Lewy bodies)
   • Avoid benzodiazepines (except alcohol/BZD withdrawal delirium)
   • Dexmedetomidine: consider in ICU if mechanically ventilated`,
    monitoring: `• CAM (Confusion Assessment Method) q8-12h — track delirium course
• Daily medication review (minimize anticholinergic burden and sedating medications)
• Neurologic exam daily (track for signs of worsening or new focal deficit)
• Serial glucose, electrolytes, renal/hepatic function
• EEG if altered MS not improving despite treatment`,
    disposition: `• ICU: NCSE, bacterial meningitis/encephalitis, severe metabolic derangements, hemodynamic instability, intubation
• Neurology consult: new focal findings, seizure, encephalitis concern, NCSE suspected, rapidly progressive dementia
• Geriatrics/psychiatry: delirium superimposed on dementia, complex behavioral management`
  },

  {
    id: "etoh-withdrawal",
    system: "neuro",
    title: "Alcohol Use Disorder / Withdrawal",
    keywords: ["alcohol withdrawal","etoh","ciwa","seizure","delirium tremens","DTs","benzodiazepine","phenobarbital","aws","alcoholism"],
    source: {
      chapter: "Neurology / Psychiatry",
      section: "Alcohol Use Disorder",
      pages: "199–200",
      authors: "Thomas Ituarte",
      keyFacts: [
        "AWS timeline: tremor/anxiety 6-24h; seizures 12-48h (can occur without prior CIWA elevation); DTs 24-72h",
      "Thiamine FIRST: give before any glucose/dextrose — prevents precipitating Wernicke's encephalopathy",
      "Phenobarbital preferred or add-on for: prior DTs/seizures/ICU withdrawal, CIWA not improving despite >6mg lorazepam/h",
      "Symptom-triggered BZD dosing (CIWA-guided): preferred over standing doses — reduces total BZD use and treatment duration",
      "Atropine NOT useful for CHB — similarly BZDs (not antipsychotics) are the definitive treatment for DTs and AWS seizures"
      ]
    },
    assessment: `#Alcohol Withdrawal Syndrome (AWS)
Last drink: ___  |  CIWA-Ar score: ___  |  Daily alcohol consumption: ___
Prior complicated withdrawal: [ ] Yes (DTs / seizures / ICU admissions)  [ ] No
AWS Timeline:
• 6-24h: tremor, anxiety, diaphoresis, tachycardia, hypertension, N/V
• 12-48h: withdrawal seizures (generalized, brief, self-limited — can occur without prior CIWA elevations)
• 24-72h: delirium tremens (DTs) — autonomic instability, severe agitation, hallucinations
Risk factors for severe/complicated withdrawal: prior DTs, prior seizures, high daily alcohol use, concurrent medical illness`,
    ddx: `• Uncomplicated alcohol withdrawal (tremulousness, diaphoresis, anxiety)
• Alcohol withdrawal seizures (GCSE risk — treat aggressively)
• Delirium tremens (DTs) — medical emergency
• Wernicke's encephalopathy (dietary deficiency + oculomotor dysfxn + cerebellar ataxia + AMS)
• Korsakoff's syndrome (antero + retrograde memory loss, confabulation)
• Other withdrawal: benzodiazepine withdrawal (similar presentation)
• Concurrent CNS pathology: subdural hematoma (trauma, coagulopathy), meningitis, NCSE`,
    workup: `• CIWA-Ar scoring q4-8h (use mMINDS for patients who cannot self-report)
• BMP (electrolytes — hypomagnesemia, hypokalemia, hypophosphatemia common)
• Magnesium, phosphorus, thiamine level
• CBC (thrombocytopenia, macrocytosis in chronic EtOH)
• LFTs (baseline hepatic function — affects BZD metabolism)
• Blood alcohol level
• Urine drug screen
• Blood cultures if febrile (r/o concurrent infection)
• NCHCT: if first seizure, focal findings, or high suspicion for intracranial pathology
• EEG: if NCSE suspected or prolonged post-ictal state`,
    management: `THIAMINE (FIRST, before any glucose):
• Wernicke's prophylaxis: thiamine 200mg IV x1 day → 200mg PO BID x4 days
• Suspected Wernicke's encephalopathy: thiamine 500mg IV TID × 7 days (infuse over 30 min)

NUTRITIONAL SUPPLEMENTATION:
• MVI with folic acid daily; thiamine daily; replete Mg2+, K+, phosphorus

BENZODIAZEPINES (1st-line for most patients):
• Use CIWA-Ar guided dosing; avoid treating subjective symptoms alone
• Symptom-triggered (PRN based on CIWA-Ar score ≥8-10): preferred over standing doses
• Lorazepam 1-2mg IV/PO q4-6h PRN (preferred if liver disease, elderly — shorter half-life)
• Diazepam or chlordiazepoxide: longer half-life → smoother course; preferred if no liver disease
• CI: AMS/delirium, active DTs, acute angle-closure glaucoma

PHENOBARBITAL (preferred or add-on in high-risk patients):
• Indications: prior DTs/seizures/ICU withdrawal, patient preference, RESISTANT AWS (CIWA not improving despite >6mg lorazepam/h), or BZD toxicity developing
• Loading dose: 6-10mg/kg (as 3 divided doses) — see Ellucid guidelines for individualized dosing
• Auto-taper, long half-life (1-4 days), wide therapeutic window
• CI: SJS/TEN history, acute intermittent porphyria, unstable respiratory status

DELIRIUM TREMENS (DTs) — ICU-level care:
• Aggressive BZD loading → phenobarbital if BZD-refractory
• Dexmedetomidine or propofol infusion in ICU setting
• Correct electrolytes; maintain hydration
• Haloperidol for psychosis/agitation (adjunct, does NOT prevent seizures or DTs)`,
    monitoring: `• CIWA-Ar q4-8h; mMINDS if cannot communicate
• Total daily BZD requirements (watch for escalation → consider phenobarbital switch)
• Vital signs q2-4h (HR, BP, temperature — autonomic instability in DTs)
• Electrolytes daily (Mg2+, K+, phosphorus)
• Glucose monitoring (if on dextrose-containing fluids or at hypoglycemia risk)`,
    disposition: `• ICU: DTs, refractory seizures, requiring phenobarbital loading, hemodynamic instability, concurrent severe illness
• Stepdown/floor: high CIWA scores, requiring IV BZDs, prior complicated withdrawal
• Discharge: clinically stable, CIWA scores low, tolerating PO medications, safety assessment
• Disposition planning: offer naltrexone, acamprosate, or disulfiram for AUD treatment; addiction medicine/social work referral`
  },

  // ════════════════════ NEW TEMPLATES ════════════════════

  {
    id: "preseptal-orbital-cellulitis",
    system: "id",
    title: "Preseptal / Orbital Cellulitis",
    keywords: ["orbital cellulitis","preseptal cellulitis","periorbital cellulitis","eyelid swelling","proptosis","ophthalmoplegia","sinusitis complication","eye infection"],
    source: {
      chapter: "Infectious Disease",
      section: "Orbital & Preseptal Cellulitis",
      pages: "108",
      authors: "Alexandra Miller, Amanda Ward",
      keyFacts: [
        "Key distinction: Preseptal = eyelid only, no proptosis/ophthalmoplegia; Orbital = posterior to septum, proptosis + painful/restricted EOM + diplopia",
      "CT orbits AND sinuses with IV contrast: mandatory — cannot distinguish preseptal vs. orbital on clinical exam alone",
      "Preseptal mild: augmentin 875mg q12h; add TMP-SMX DS if skin trauma or no improvement at 24h; clindamycin NOT recommended (poor GNR coverage)",
      "Orbital: vancomycin + ceftriaxone 2g IV q12h; add metronidazole if odontogenic/sinogenic source or CNS concern",
      "Cavernous sinus thrombophlebitis: bilateral involvement + high fever + AMS + CN III/IV/V/VI palsies → MRI brain required"
      ]
    },
    assessment: `#Preseptal / Orbital Cellulitis
Eyelid erythema, edema, and pain consistent with [preseptal (periorbital) / orbital] cellulitis.
Classification:
[ ] PRESEPTAL: infection anterior to orbital septum; eyelid involvement only; NO proptosis, NO ophthalmoplegia, NO pain with EOM
[ ] ORBITAL: infection of orbit contents (fat, ocular muscles) posterior to septum; proptosis, painful or restricted EOM, diplopia
Source:
[ ] Rhinosinusitis (most common)  [ ] Local trauma / insect bite / scratch  [ ] Dacryocystitis  [ ] Odontogenic  [ ] Post-surgical
Complications assessed: vision changes [ ] / proptosis [ ] / ophthalmoplegia [ ] / fever [ ] / AMS [ ]`,
    ddx: `• Preseptal (periorbital) cellulitis — anterior to orbital septum; no globe involvement
• Orbital cellulitis — posterior to orbital septum; involves orbital fat and/or ocular muscles
• Subperiosteal abscess — collection between periorbita and orbital wall; requires surgical drainage
• Orbital abscess — intraconal or extraconal collection; surgical emergency
• Cavernous sinus thrombophlebitis — bilateral involvement, high fever, AMS, CN palsies (III, IV, V, VI), septic appearance
• Dacryocystitis — medial canthal swelling, lacrimal sac tenderness, tearing
• Contact dermatitis / allergic reaction — bilateral, non-tender, afebrile
• Chalazion / hordeolum — localized lid nodule, afebrile
• Leukemia cutis / orbital lymphoma — painless, subacute onset`,
    workup: `• CT orbits AND sinuses with IV contrast (STAT): mandatory to distinguish preseptal vs. orbital cellulitis; evaluate for subperiosteal/orbital abscess and sinus source
• MRI brain with gadolinium: if concern for cavernous sinus thrombophlebitis or CNS extension (AMS, bilateral findings, CN palsies)
• Blood cultures x2 (if orbital cellulitis, febrile, or systemic toxicity)
• CBC with differential, BMP, CRP, ESR
• LP: if concern for CNS extension (meningismus, AMS, high fever with orbital cellulitis)
• Ophthalmology consult: STAT for orbital cellulitis; urgent for preseptal with vision concern
• ENT consult: if sinogenic source, subperiosteal or orbital abscess, or failure to improve
• Visual acuity, pupillary response, and extraocular movements — document at baseline and reassess q4-8h`,
    management: `PRESEPTAL CELLULITIS:
• Mild (no systemic signs, no trauma history, tolerating PO):
  - Augmentin (amoxicillin-clavulanate) 875mg PO q12h x7-10 days
  - Add TMP-SMX 1-2 DS tabs PO q12h if: history of skin trauma, prior MRSA, OR no improvement at 24h
  - Clindamycin is NOT recommended (insufficient gram-negative coverage for sinogenic organisms)
• Moderate-severe or inability to take PO:
  - Ampicillin-sulbactam 3g IV q6h OR cefazolin 1-2g IV q8h
  - Add vancomycin if MRSA risk factors or failure of outpatient therapy

ORBITAL CELLULITIS:
• Admit — IV antibiotics required
• Vancomycin 15-20 mg/kg IV q8-12h (AUC-guided dosing) + Ceftriaxone 2g IV q12h
• Add metronidazole 500mg IV q8h if: concern for CNS involvement, odontogenic or sinogenic origin
• Ophthalmology consult STAT
• ENT consult: all orbital cellulitis cases; drain sinus disease if present
• Surgical drainage (ophthalmology ± ENT): subperiosteal or orbital abscess, no improvement at 24-48h, vision compromise, ophthalmoplegia not improving

CAVERNOUS SINUS THROMBOPHLEBITIS (if suspected):
• Vancomycin + ceftriaxone + metronidazole + antifungal coverage (voriconazole) if immunocompromised
• Anticoagulation: controversial; consider in consultation with neurology and ID
• Neurosurgery consult if intracranial extension

DURATION:
• Preseptal: 7-10 days total (IV → PO step-down once improving and afebrile x24h)
• Orbital: typically 14-21 days; individualize based on response and surgical debridement`,
    monitoring: `• Visual acuity and pupillary response q4-8h (declining vision = surgical emergency)
• Extraocular movements and proptosis assessment daily — worsening requires repeat CT and surgical consultation
• Fever curve and systemic signs
• Blood culture results → narrow antibiotics
• Repeat CT orbit/sinus at 24-48h if no clinical improvement or worsening
• Vancomycin AUC monitoring (goal AUC/MIC 400-600)`,
    disposition: `• OUTPATIENT: preseptal cellulitis only — mild, no fever, tolerating PO, reliable follow-up in 24h
• INPATIENT: all orbital cellulitis, preseptal with systemic toxicity or failure of outpatient therapy, concern for abscess, immunocompromised
• ICU: cavernous sinus thrombophlebitis, intracranial extension, septic shock, airway compromise
• Ophthalmology follow-up at 24h for outpatient preseptal cellulitis; STAT consult for all orbital cases`
  },

  {
    id: "deep-neck-infection",
    system: "id",
    title: "Deep Neck Space Infections (Ludwig's / Lemierre / Peritonsillar / Retropharyngeal)",
    keywords: ["deep neck infection","ludwig angina","lemierre syndrome","peritonsillar abscess","retropharyngeal abscess","parapharyngeal abscess","neck abscess","odontogenic","airway compromise","trismus","dysphagia"],
    source: {
      chapter: "Infectious Disease",
      section: "Head & Neck Infections",
      pages: "108",
      authors: "Alexandra Miller, Amanda Ward",
      keyFacts: [
        "Organisms by source: odontogenic → streptococci + oral anaerobes; otogenic → PsA; sinogenic → MRSA",
      "Empiric by source: odontogenic — amp-sulbactam or CTX+MNZ; otogenic — cefepime+MNZ; sinogenic — vancomycin+CTX+MNZ",
      "Ludwig's angina: submandibular space, odontogenic source, polymicrobial (viridans strep) — rapid airway compromise; STAT ENT + anesthesia",
      "Lemierre syndrome: Fusobacterium necrophorum; pharyngitis + IJ septic thrombophlebitis + septic pulmonary emboli; treat with pip-tazo OR CTX+MNZ → anticoagulation",
      "Airway assessment FIRST in all deep neck infections — prepare surgical airway (cricothyrotomy) as backup"
      ]
    },
    assessment: `#Deep Neck Space Infection
Suspected deep neck space infection based on [neck pain / dysphagia / odynophagia / trismus / drooling / fever / neck swelling / airway symptoms].
Source: [ ] Odontogenic  [ ] Peritonsillar / tonsillar  [ ] Otogenic  [ ] Sinogenic  [ ] Salivary gland  [ ] Unknown
Space involved (circle/confirm on CT):
[ ] Submandibular (Ludwig's angina)  [ ] Peritonsillar  [ ] Retropharyngeal  [ ] Parapharyngeal  [ ] Prevertebral  [ ] Carotid sheath
Airway status: [ ] Patent — monitor closely  [ ] Stridor/distress — activate airway team NOW
Septic emboli assessed (Lemierre): [ ] Pulmonary infiltrates  [ ] Pleural effusion  [ ] Septic shock`,
    ddx: `SPACE-SPECIFIC:
• Ludwig's angina (submandibular space) — bilateral submandibular/sublingual space infection; "double tongue," floor of mouth elevation, drooling; rapid airway compromise; most commonly odontogenic
• Peritonsillar abscess (PTA) — most common deep neck infection; uvular deviation, "hot potato" voice, trismus, fluctuance lateral to tonsil; Strep pyogenes, oral anaerobes
• Retropharyngeal abscess — posterior pharyngeal bulge, neck stiffness, muffled voice, fever; risk of mediastinal extension
• Parapharyngeal abscess — lateral neck swelling, trismus, medial displacement of tonsil; contiguous spread from PTA or dental
• Lemierre syndrome — internal jugular septic thrombophlebitis following pharyngitis; septic pulmonary emboli; most commonly Fusobacterium necrophorum; often in young adults after recent sore throat
• Epiglottitis — severe odynophagia, muffled voice, dysphagia, drooling; "thumbprint sign" on lateral neck XR; H. influenzae, GAS, S. aureus; AIRWAY EMERGENCY
• Masticator space / submasseter abscess — trismus, ipsilateral jaw pain, cheek swelling; odontogenic source (molar)
• Carotid sheath abscess — lateral neck mass, CN palsies, Horner syndrome; may erode internal carotid (rare)

NON-INFECTIOUS MIMICS:
• Angioedema (rapid onset, no fever)
• Malignant lymphadenopathy (subacute, constitutional symptoms)
• Thyroid mass or goiter
• Cervical osteomyelitis or discitis`,
    workup: `• CT neck with IV contrast (STAT): define space involved, assess for abscess, evaluate for mediastinal extension
• CT chest: if concern for mediastinitis (Lemierre, descending necrotizing mediastinitis) or septic pulmonary emboli
• CT neck angiography (CTA): if Lemierre suspected (to evaluate internal jugular vein thrombosis)
• MRI neck ± spine: if vertebral osteomyelitis or spinal cord compression suspected
• Blood cultures x2 (before antibiotics)
• CBC with differential, BMP, CRP, ESR, LFTs, coagulation studies
• Throat culture / rapid Strep antigen if pharyngeal source
• Surgical / IR culture of abscess contents: aerobic + anaerobic + fungal
• ENT consult STAT: all deep neck infections — drainage and airway management
• Lateral neck radiograph: if epiglottitis suspected (thumbprint sign, "steeple sign")
• Otolaryngology: bedside flexible laryngoscopy for airway evaluation if epiglottitis or Ludwig's angina`,
    management: `AIRWAY FIRST — all deep neck infections:
• If stridor, drooling, respiratory distress, or Ludwig's angina: call ENT and anesthesia STAT for bedside airway evaluation; prepare for surgical airway (cricothyrotomy) if intubation fails
• Elevate HOB 30-45°, supplemental O2, establish large-bore IV access
• Do NOT perform blind throat manipulation without airway secured

ANTIBIOTICS (empiric, before cultures):
• Odontogenic source (Ludwig's, submandibular, parapharyngeal):
  - Ampicillin-sulbactam 3g IV q6h (first-line; covers streptococci, oral anaerobes, H. flu)
  - Alternative: ceftriaxone 2g IV q24h + metronidazole 500mg IV q8h
  - MRSA risk or PWID: add vancomycin
• Otogenic source: cefepime 2g IV q8h + metronidazole 500mg IV q8h
• Sinogenic source / immunocompromised: vancomycin + ceftriaxone + metronidazole
• Lemierre syndrome: pip-tazo 4.5g IV q6h OR ceftriaxone + metronidazole; duration 3-6 weeks
• Epiglottitis: ceftriaxone 2g IV q24h ± vancomycin (MRSA risk); dexamethasone 0.15 mg/kg IV q6h (reduce edema)

SURGICAL / PROCEDURAL:
• Peritonsillar abscess: needle aspiration (preferred, diagnostic + therapeutic) OR incision and drainage by ENT
• Ludwig's angina: surgical drainage under general anesthesia with protected airway; submental/submandibular incisions
• Retropharyngeal / parapharyngeal abscess: ENT drainage (transoral or external) based on location and size
• Lemierre: anticoagulation controversial — consider if no improvement with antibiotics alone; consult ID and hematology

DURATION:
• Uncomplicated PTA: 10-14 days PO after drainage
• Deep neck space abscess: 2-4 weeks IV/PO depending on response; longer if mediastinal extension or vertebral involvement`,
    monitoring: `• Airway reassessment at minimum q4-8h — any worsening stridor, drooling, or dyspnea → ENT/airway team STAT
• Fever curve and clinical response at 24-48h; repeat CT neck if not improving
• Blood culture results → narrow antibiotics
• CBC, BMP, CRP every 1-2 days (monitor for treatment response and complications)
• Lemierre: serial CTA neck/chest to track IJ thrombosis and pulmonary emboli
• Watch for complications: mediastinitis (pleuritic chest pain, tachycardia, new pleural effusion), intracranial spread (AMS, meningismus), carotid artery erosion (rare, catastrophic)`,
    disposition: `• ICU: Ludwig's angina, airway compromise, epiglottitis requiring intubation, mediastinitis, septic shock, Lemierre with large burden of emboli
• Stepdown/floor: peritonsillar abscess with systemic infection, deep neck abscess requiring IV antibiotics, post-drainage monitoring
• ENT consult ALL cases: drainage decision, airway monitoring, follow-up
• Infectious Disease consult: Lemierre syndrome, immunocompromised host, treatment failure, prolonged IV therapy`
  },

  {
    id: "osteomyelitis",
    system: "id",
    title: "Osteomyelitis",
    keywords: ["osteomyelitis","bone infection","vertebral osteomyelitis","diabetic foot","discitis","bacteremia bone","staph aureus bone"],
    source: {
      chapter: "Infectious Disease",
      section: "Osteomyelitis",
      pages: "111–112",
      authors: "Julia Page",
      keyFacts: [
        "Bone biopsy: gold standard — obtain BEFORE antibiotics (blood cultures often positive 50-70%); need aerobic + anaerobic + fungal + mycobacterial + histopathology",
      "MRI with contrast: modality of choice (Sn 90%, Sp 82%); best for vertebral OM; obtain if <2 weeks symptoms or XR non-diagnostic",
      "Diabetic foot: probing to bone diagnostic (Sn 87%, Sp 83%) — no further imaging needed in DM foot OM",
      "OVIVA trial (NEJM 2019): oral antibiotics non-inferior to IV for complex bone and joint infections when clinically improving",
      "Vertebral OM: minimum 6 weeks antibiotics; CT-guided biopsy preferred; TTE to rule out endocarditis as source"
      ]
    },
    assessment: `#Osteomyelitis
Suspected osteomyelitis based on [localized bone pain / fever / erythema / non-healing wound / probe-to-bone positive / imaging findings].
Classification:
[ ] Hematogenous (monomicrobial; often from bacteremia or endocarditis)
[ ] Contiguous spread / direct inoculation (polymicrobial; post-surgery, trauma, diabetic foot ulcer, pressure wound)
Site: [ ] Long bone  [ ] Vertebral / Spondylodiscitis  [ ] Pelvic  [ ] Sternal/clavicular  [ ] Foot (diabetic)  [ ] Mandibular/maxillofacial
Acuity: [ ] Acute (<2 weeks)  [ ] Chronic (>3 weeks, necrotic bone, sinus tract, or prior failed treatment)`,
    ddx: `• Hematogenous osteomyelitis — S. aureus most common; Salmonella in sickle cell disease; GNRs in elderly/PWID; Brucella in endemic areas
• Contiguous/direct inoculation osteomyelitis — polymicrobial; foot osteomyelitis in DM (S. aureus, Strep, Enterobacteriaceae, anaerobes)
• Vertebral osteomyelitis / spondylodiscitis — S. aureus (most common), GNRs, Strep, Candida, TB (Pott disease); often hematogenous
• Septic arthritis (adjacent joint involvement — rule out)
• Cellulitis / soft tissue infection without bony involvement
• Malignancy (primary bone tumor or metastases) — exclude on MRI
• CRMO (chronic recurrent multifocal osteomyelitis) — young patients, non-bacterial
• Charcot neuropathic arthropathy — DM, peripheral neuropathy; can mimic foot osteomyelitis
• Avascular necrosis`,
    workup: `• Blood cultures x2 (before antibiotics; positive in 50-70% of hematogenous cases involving vertebra, clavicle, pelvis)
• CBC, BMP, ESR, CRP (useful for monitoring treatment response)
• Bone biopsy: GOLD STANDARD — obtain before empiric antibiotics unless hemodynamically unstable or neurologic compromise
  - Percutaneous CT-guided biopsy (preferred for vertebral osteomyelitis, consult IR or ortho)
  - Open biopsy if percutaneous non-diagnostic and suspicion high
  - Send: aerobic + anaerobic + fungal + mycobacterial cultures; histopathology
• Imaging:
  - Plain radiograph: first-line if >2 weeks symptoms; insensitive early
  - MRI with contrast: modality of choice; Sn 90%, Sp 82%; best for vertebral osteomyelitis and diabetic foot; order if symptoms <2 weeks or XR non-diagnostic
  - CT: if MRI unavailable; shows cortical destruction and periosteal reaction
  - Nuclear bone scan: sensitive but non-specific; use if hardware precludes MRI
• Diabetic foot: probing to bone is diagnostic (Sn 87%, Sp 83%); vascular surgery consult for PAD assessment
• Echocardiogram (TTE): if hematogenous osteomyelitis suspected (rule out endocarditis as source or concurrent disease)`,
    management: `EMPIRIC ANTIBIOTICS (after bone biopsy obtained):
• MSSA-predominant (community, no MRSA risk):
  - Cefazolin 2g IV q8h OR nafcillin 2g IV q4h (for MSSA — superior to vancomycin)
• MRSA risk (prior MRSA, healthcare-associated, IV drug use):
  - Vancomycin 15-20 mg/kg IV q8-12h (AUC-guided dosing; target AUC/MIC 400-600)
• Vertebral / hematogenous (gram-negative risk):
  - Vancomycin + ceftriaxone 2g IV q24h pending cultures
• Diabetic foot / contiguous / polymicrobial:
  - Pip-tazo 4.5g IV q6h OR ampicillin-sulbactam 3g IV q6h (broad spectrum)
• Culture-directed de-escalation at 48-72h

SURGICAL CONSIDERATIONS:
• Orthopedic or ID-guided surgical debridement: chronic osteomyelitis, necrotic bone (sequestrum), hardware-associated infection, sinus tract
• Vascular surgery: diabetic foot osteomyelitis with PAD (revascularization improves outcomes)
• Neurosurgery: vertebral osteomyelitis with epidural abscess or cord compression (emergent decompression)

DURATION:
• Acute hematogenous osteomyelitis (no necrotic bone, no hardware): 4-6 weeks total IV/PO
• Vertebral osteomyelitis: minimum 6 weeks IV antibiotics; individualize based on response
• Diabetic foot osteomyelitis: 6 weeks (shorter if complete resection of infected bone achieved)
• Can transition to oral (highly bioavailable agents: FQ, TMP-SMX, linezolid, clindamycin) once clinically improving and pathogen identified
• Oral step-down supported by OVIVA trial (NEJM 2019;380:425): oral non-inferior to IV for complex bone and joint infections`,
    monitoring: `• ESR and CRP weekly during treatment (expect decline; plateau or rise = treatment failure)
• Blood cultures: repeat if initially positive until sterile
• CBC, BMP, LFTs every 1-2 weeks during prolonged IV antibiotics
• Vancomycin AUC monitoring if on prolonged IV vancomycin
• MRI spine: repeat if vertebral osteomyelitis — neurologic deterioration or failure to improve at 4-6 weeks
• Diabetic foot: wound check at 48-72h, vascular assessment, off-loading`,
    disposition: `• Inpatient: initiation of IV antibiotics, acute vertebral osteomyelitis with instability or cord compression, surgical debridement, hemodynamic instability, poor access for outpatient IV therapy
• OPAT (outpatient parenteral antimicrobial therapy): once clinically stable, afebrile x48h, pathogen identified, and reliable access secured
• Orthopedic surgery consult: chronic osteomyelitis, necrotic bone, hardware-related
• ID consult: all cases (guide duration, de-escalation, oral step-down, OPAT coordination)`
  },

  {
    id: "meningitis-encephalitis",
    system: "neuro",
    title: "Bacterial Meningitis / Encephalitis",
    keywords: ["meningitis","encephalitis","CSF","lumbar puncture","bacterial meningitis","HSV encephalitis","nuchal rigidity","fever headache stiff neck","kernig","brudzinski","autoimmune encephalitis"],
    source: {
      chapter: "Infectious Disease",
      section: "Meningitis & Encephalitis",
      pages: "113",
      authors: "Thomas Ituarte",
      keyFacts: [
        "95% of bacterial meningitis: ≥2 of fever, neck stiffness, AMS, headache (NEJM 2004;351:1849)",
      "DO NOT delay antibiotics for LP or CT: blood cultures BEFORE antibiotics (positive in 70%); no delay >30 min",
      "CT before LP only if: immunocompromised, known CNS disease, new seizure, papilledema, AMS, or focal neuro deficit",
      "Dexamethasone 0.15 mg/kg q6h ×4d: START BEFORE or WITH first antibiotic dose; greatest benefit in S. pneumoniae meningitis",
      "Duration: N. meningitidis/H. flu 7d; S. pneumoniae 14d; Listeria 21-28d (4-8 wk if immunocompromised)"
      ]
    },
    assessment: `#Bacterial Meningitis / Encephalitis
Suspected meningitis / encephalitis based on fever + [headache / nuchal rigidity / AMS / photophobia / seizure / focal neurologic findings].
Type: [ ] Bacterial meningitis  [ ] Viral meningitis  [ ] HSV encephalitis  [ ] Autoimmune encephalitis  [ ] Fungal (Cryptococcal)
Clinical features (≥2 of following = 95% Sn for bacterial meningitis): [ ] Fever  [ ] Neck stiffness  [ ] AMS  [ ] Headache
Exam: Kernig's [ ] / Brudzinski's [ ] / Jolt sign [ ] / Papilledema [ ] / Focal neuro deficits [ ] / Petechiae/purpura [ ]
Head CT before LP: [ ] YES (required)  [ ] NO
CT indications: immunocompromised, known CNS disease, new seizure, papilledema, AMS, focal neuro deficit`,
    ddx: `INFECTIOUS (must distinguish rapidly):
• Bacterial meningitis — S. pneumoniae (most common adult), N. meningitidis (young adults, petechiae), Listeria (>50yo, immunocompromised, alcoholism — add ampicillin), GBS, H. influenzae
• Nosocomial bacterial meningitis — aerobic gram-negative bacilli, S. aureus, CoNS (post-procedure/hardware)
• Viral (aseptic) meningitis — enteroviruses (most common), HSV-2, EBV, CMV, VZV, HIV; CSF lymphocytic pleocytosis, normal glucose
• HSV encephalitis — fever, AMS, temporal lobe involvement (seizures, personality change); MRI temporal hyperintensity; CSF HSV PCR; EMPIRIC ACYCLOVIR until excluded
• Fungal meningitis (Cryptococcus) — subacute, immunocompromised (HIV/AIDS, transplant); India ink, CrAg
• TB meningitis — subacute, basilar enhancement, cranial nerve palsies; AFB smear/culture, ADA

NON-INFECTIOUS:
• Subarachnoid hemorrhage — thunderclap headache, CT/LP with xanthochromia
• Drug-induced aseptic meningitis — NSAIDs, TMP-SMX, IVIG, IV immunoglobulins
• Autoimmune encephalitis — anti-NMDAR, anti-LGI1, anti-CASPR2; subacute AMS, psychiatric symptoms, movement disorders, seizures
• Leptomeningeal carcinomatosis — cancer history, multiple CN palsies, cytology on LP
• Neurosarcoidosis / granulomatous meningitis`,
    workup: `STAT (do NOT delay antibiotics for LP or imaging if LP not immediately available):
• BLOOD CULTURES x2 BEFORE antibiotics (positive in 70% bacterial meningitis)
• STAT NCHCT: only if CT indicated (see above criteria); do NOT delay antibiotics >30 min for CT
• LUMBAR PUNCTURE (ASAP after CT or immediately if no CT indication):
  - Opening pressure (normal ≤200 mmH2O; bacterial meningitis average 350 mmH2O)
  - Tube 1: cell count + diff
  - Tube 2: glucose + protein (CSF:serum glucose ratio; normal >0.6; bacterial <0.4)
  - Tube 3: Gram stain + bacterial culture (aerobic + anaerobic)
  - Tube 4: cell count (confirm xanthochromia if SAH suspected)
  - Additional send: HSV 1+2 PCR, VZV PCR, enteroviral PCR, cryptococcal antigen, VDRL (if neurosyphilis suspected), cytology (if malignancy), oligoclonal bands, IgG index (if MS/autoimmune)
  - Autoimmune encephalitis panel: serum + CSF anti-NMDAR, anti-LGI1, anti-CASPR2, etc.
• CBC, BMP, coagulation, LFTs, blood glucose (for CSF:serum ratio)
• HIV test (all patients)
• MRI brain with gadolinium: preferred over CT; obtain once stabilized — temporal lobe involvement (HSV), basilar enhancement (TB/fungal), leptomeningeal enhancement, autoimmune`,
    management: `DO NOT DELAY ANTIBIOTICS WAITING FOR LP OR IMAGING

EMPIRIC ANTIBIOTICS (start within minutes of recognition):
• Adults <50yo: Vancomycin + Ceftriaxone 2g IV q12h
  - Vancomycin covers PCN-resistant S. pneumoniae (not MRSA)
• Adults >50yo or immunocompromised: add Ampicillin 2g IV q4h (covers Listeria)
• Post-neurosurgical / nosocomial: Vancomycin + Cefepime 2g IV q8h (or meropenem 2g IV q8h)
• Severe PCN allergy: Vancomycin + Meropenem 2g IV q8h ± TMP-SMX for Listeria coverage

DEXAMETHASONE:
• 0.15 mg/kg IV q6h x4 days — start BEFORE or WITH first antibiotic dose
• Greatest benefit: S. pneumoniae in adults (reduces hearing loss and neurologic sequelae)
• STOP if not S. pneumoniae meningitis (no benefit in other organisms, may worsen Listeria outcomes)

HSV ENCEPHALITIS (add empirically if encephalitis suspected):
• Acyclovir 10 mg/kg IV q8h (renally dosed) — start empirically; STOP only after HSV PCR negative and alternative diagnosis established

CRYPTOCOCCAL MENINGITIS (if HIV/immunocompromised):
• Amphotericin B liposomal + flucytosine x2 weeks (induction) → fluconazole x8 weeks (consolidation)
• Serial LPs for elevated opening pressure management (target OP <20 cmH2O)
• ID consult mandatory

DURATION (culture-directed):
• N. meningitidis: 7 days
• H. influenzae: 7 days
• S. pneumoniae: 14 days
• Listeria: 21-28 days (4-8 weeks if immunocompromised)
• GNRs (nosocomial): 21 days`,
    monitoring: `• Neurologic exam q4-8h (track GCS, focal deficits, seizures)
• Blood cultures: repeat until sterile x48h
• Repeat LP: if no clinical improvement at 48h; antimicrobial resistance; ongoing fevers >8 days on treatment
• Serial ECGs (meningitis-associated SIADH → hyponatremia → cardiac arrhythmias)
• BMP daily (SIADH common with meningitis; avoid free water excess, fluid restrict if Na dropping)
• ICP monitoring: if severely elevated OP on LP, obtain neurosurgery consult
• Hearing evaluation before discharge (audiometry)`,
    disposition: `• ICU: AMS, seizures, elevated ICP, herniation, hemodynamic instability, cryptococcal meningitis
• Neurology consult: seizures, focal findings, autoimmune encephalitis workup, NCSE concern
• ID consult: ALL cases of bacterial meningitis and HSV/cryptococcal encephalitis
• Contact precautions + droplet isolation until N. meningitidis excluded (or 24h of effective antibiotics)
• Prophylaxis for close contacts (meningococcal): ciprofloxacin 500mg PO x1 OR rifampin 600mg PO q12h x2d OR ceftriaxone 250mg IM x1`
  },

  {
    id: "cdiff",
    system: "gi",
    title: "Clostridioides difficile Infection (CDI)",
    keywords: ["c diff","c. difficile","cdiff","clostridium difficile","diarrhea","colitis","pseudomembranous","antibiotic associated diarrhea","fidaxomicin","vancomycin colitis","toxic megacolon"],
    source: {
      chapter: "Infectious Disease",
      section: "Clostridioides difficile Infection",
      pages: "114",
      authors: "Julia Page",
      keyFacts: [
        "Severity: Non-severe = WBC <15k AND Cr <1.5; Severe = WBC ≥15k OR Cr ≥1.5; Fulminant = hypotension/shock, ileus, or toxic megacolon",
      "Fidaxomicin 200mg BID ×10d preferred over vancomycin (lower recurrence rate) for non-severe and severe CDI",
      "Fulminant: vancomycin 500mg PO/NG q6h + metronidazole 500mg IV q8h; add vancomycin retention enema if ileus; STAT surgical consult",
      "DO NOT retest within 7 days; DO NOT test for cure (may remain positive ≥6 weeks after clinical resolution)",
      "Stop non-essential antibiotics: most important single intervention for CDI treatment and prevention"
      ]
    },
    assessment: `#Clostridioides difficile Infection (CDI)
Watery diarrhea (≥3 loose stools/24h) with [positive C. diff testing / prior antibiotic exposure / healthcare exposure].
Severity classification:
[ ] NON-SEVERE: WBC <15k AND creatinine <1.5 mg/dL
[ ] SEVERE: WBC ≥15k OR creatinine ≥1.5 mg/dL
[ ] FULMINANT: hypotension / shock / ileus / toxic megacolon
Episode type: [ ] First episode  [ ] First recurrence  [ ] Multiple recurrences (≥2 recurrences)
Risk factors: recent antibiotics (esp. FQ, clinda, cephalosporins, PCN) [ ] / hospitalization [ ] / age >65 [ ] / PPI use [ ] / IBD [ ] / immunosuppression [ ]`,
    ddx: `• CDI (toxin-mediated diarrhea from C. difficile colonization after gut dysbiosis)
• Non-CDI antibiotic-associated diarrhea (negative C. diff toxin; non-specific osmotic diarrhea from antibiotics — self-limited)
• Post-infectious IBS (prior GI infection → altered gut motility)
• Infectious diarrhea: Salmonella, Campylobacter, Shigella, norovirus, ETEC
• IBD flare (Crohn's or UC) — can co-exist with CDI; check fecal calprotectin, colonoscopy if indicated
• Microscopic colitis — chronic watery diarrhea, middle-aged women; NSAIDs, SSRIs, PPIs
• Ischemic colitis — left-sided abdominal pain, hematochezia, cardiovascular risk factors
• Celiac disease — malabsorptive diarrhea, positive serology`,
    workup: `• C. diff testing algorithm (do NOT test asymptomatic patients or retest within 7 days of negative result):
  - Step 1: GDH antigen (highly sensitive, constitutively produced — rules out if negative)
  - Step 2: Toxin A/B immunoassay (highly specific, confirms active toxin production)
  - Step 3: Toxin B gene PCR (high sensitivity; positive does not confirm active infection — may detect colonization)
  - Preferred: GDH + Toxin A/B; add PCR only if discordant results
• Stool culture: not routine; use for epidemiology or suspected resistance
• CBC (WBC for severity classification), BMP (creatinine for severity, K+ monitoring), albumin, lactate (if fulminant)
• CT abdomen/pelvis with contrast: if severe or fulminant — assess for colonic thickening, perforation, toxic megacolon, ileus
• Flexible sigmoidoscopy: rarely needed; may show pseudomembranes if suspicion high with negative testing
• Surgical consult: fulminant CDI, suspected perforation, or toxic megacolon`,
    management: `GENERAL MEASURES (ALL cases):
• Discontinue or de-escalate non-essential antibiotics (most important intervention — reduce gut dysbiosis)
• Discontinue antimotility agents (loperamide, diphenoxylate — may worsen course)
• Discontinue cholestyramine if used (binds oral vancomycin)
• Contact precautions (gloves + gown); soap and water hand hygiene (alcohol gels do NOT kill C. diff spores)
• Avoid PPIs if not clearly indicated (promotes gut dysbiosis)

NON-SEVERE CDI:
• First-line: Fidaxomicin 200mg PO BID x10 days (preferred over vancomycin — lower recurrence rate)
• Alternative: Vancomycin 125mg PO q6h x10 days
• Alternative (if fidax/vanc unavailable): Metronidazole 500mg PO q8h x10-14 days (inferior, use only if first-line agents unavailable)

SEVERE CDI:
• Fidaxomicin 200mg PO BID x10 days OR Vancomycin 125mg PO q6h x10 days
• (Same drugs as non-severe; do NOT use metronidazole)

FULMINANT CDI:
• Vancomycin 500mg PO/NG q6h + Metronidazole 500mg IV q8h
• If ileus or unable to take PO: add Vancomycin 500mg in 100mL NS retention enema q6h
• Surgery consult STAT: subtotal colectomy if refractory, perforation, or clinical deterioration
• Consider Fecal microbiota transplant (FMT) if refractory or multiple recurrences — discuss with GI

RECURRENT CDI:
• First recurrence: fidaxomicin or vancomycin tapered/pulsed regimen
• ≥2 recurrences: consider bezlotoxumab (Zinplava) 10mg/kg IV x1 (monoclonal antibody vs. toxin B; reduces recurrence) + FMT referral`,
    monitoring: `• Stool frequency daily (track clinical response)
• BMP every 1-2 days in severe/fulminant (renal function, electrolytes — diarrheal losses)
• CBC daily in severe (WBC trajectory — key severity marker)
• Serial abdominal exams in severe/fulminant (bowel sounds, peritoneal signs, abdominal girth)
• Repeat CT A/P if clinical deterioration in fulminant CDI (assess for megacolon, perforation)
• Do NOT perform test-of-cure (C. diff PCR may remain positive for up to 6 weeks despite clinical resolution)`,
    disposition: `• ICU: fulminant CDI, toxic megacolon, hemodynamic instability, perforation
• Inpatient surgical assessment: all fulminant CDI — early surgical consult
• Outpatient: non-severe CDI with reliable follow-up and ability to take PO
• GI consult: recurrent CDI (≥2 recurrences), consideration of FMT, concurrent IBD
• Infection control: contact precautions throughout hospitalization; private room preferred`
  },

  {
    id: "uti-pyelonephritis",
    system: "id",
    title: "Urinary Tract Infection / Pyelonephritis",
    keywords: ["uti","urinary tract infection","pyelonephritis","cystitis","dysuria","pyuria","bacteriuria","cauti","urosepsis","kidney infection"],
    source: {
      chapter: "Infectious Disease",
      section: "Urinary Tract Infections",
      pages: "109",
      authors: "Hugh Shirley",
      keyFacts: [
        "Asymptomatic bacteriuria: do NOT treat (exceptions: pregnancy, <1-2 months post-renal transplant, pre-urologic procedure) — IDSA 2019",
      "CAUTI: catheter in place >2d + UTI symptoms + ≥10³ CFU/mL from catheter specimen — remove/replace catheter ASAP",
      "Nitrofurantoin: first-line uncomplicated cystitis ×5d; AVOID if GFR <30 or for pyelonephritis (inadequate tissue levels)",
      "ESBL-risk: healthcare-associated, prior ESBL, or recurrent infections — use pip-tazo or meropenem empirically",
      "Test-of-cure urine culture: NOT routine — only if pregnancy, treatment failure, or suspected resistant organism"
      ]
    },
    assessment: `#Urinary Tract Infection / Pyelonephritis
Presenting with [dysuria / frequency / urgency / flank pain / CVA tenderness / fever / pyuria / bacteriuria].
Classification:
[ ] Uncomplicated cystitis (premenopausal ♀, community-acquired, no structural abnormality)
[ ] Complicated UTI (male, pregnancy, structural abnormality, indwelling catheter, immunosuppression, renal transplant, functional impairment)
[ ] Pyelonephritis (upper UTI: fever, flank pain, CVA tenderness ± systemic signs)
[ ] CAUTI (catheter in place ≥2 days with symptoms; or catheter removed within prior 48h)
[ ] Urosepsis (pyelonephritis + meets Sepsis-3 criteria — SOFA ≥2)
[ ] Asymptomatic bacteriuria (bacteriuria without symptoms — do NOT treat, with exceptions below)`,
    ddx: `• Uncomplicated cystitis (lower UTI: E. coli most common, Klebsiella, Staph saprophyticus in young ♀)
• Pyelonephritis / upper UTI (E. coli 80%, Klebsiella, Proteus, Enterococcus)
• CAUTI (same organisms + Candida, Pseudomonas, Enterococcus)
• Urolithiasis with obstruction ± secondary infection (renal colic, hematuria, CT confirms)
• Perinephric abscess (failed treatment, persistent fever, flank tenderness despite antibiotics — requires drainage)
• Prostatitis (men: perineal pain, urinary hesitancy, tender prostate on exam; do NOT massage)
• Epididymo-orchitis (males: unilateral scrotal pain, swelling, tenderness — consider STIs)
• Pelvic inflammatory disease (♀: lower abdominal pain, cervical motion tenderness, vaginal discharge)
• Vaginitis / STI (dysuria without pyuria; consider GC/CT, BV, yeast)
• Asymptomatic bacteriuria (treat ONLY: pregnancy, <1-2 months post-renal transplant, pre-urologic procedure)`,
    workup: `• Urinalysis (UA) with microscopy:
  - Pyuria (>5 WBC/hpf): present in most true UTIs; also seen in other conditions
  - Bacteriuria: ≥1 organism on Gram stain; ≥10^5 CFU/mL on culture (10^3 CFU/mL for CAUTI)
  - Nitrites: Sn 50-80% (only Enterobacteriaceae); Leukocyte esterase: Sn 75-85%
  - RBCs: common with cystitis; hematuria alone does not diagnose UTI
• Urine culture + sensitivities (obtain BEFORE antibiotics):
  - All pyelonephritis, complicated UTI, CAUTI, urosepsis cases
  - Uncomplicated cystitis: culture optional if typical presentation in healthy ♀
• Blood cultures x2: if pyelonephritis with systemic signs, urosepsis, immunocompromised, hospitalized
• CBC, BMP (creatinine — renally dose antibiotics, assess severity)
• Renal ultrasound or CT abdomen/pelvis without contrast: if pyelonephritis not improving at 48-72h (rule out obstruction, perinephric abscess)
• CAUTI: replace or remove catheter ASAP; send urine Cx from NEW catheter (not old bag)`,
    management: `UNCOMPLICATED CYSTITIS (premenopausal ♀, outpatient):
• Nitrofurantoin macrocrystals 100mg PO BID x5d (avoid if GFR <30)
• TMP-SMX DS (160/800mg) PO BID x3d (check local resistance patterns; avoid if >20% local resistance)
• Fosfomycin 3g PO x1 dose (convenient, no resistance issues)
• Ciprofloxacin 250mg PO BID x3d (reserve for culture-guided use due to resistance/side effects)

COMPLICATED UTI / PYELONEPHRITIS (mild, can take PO, outpatient):
• Ciprofloxacin 500mg PO BID x7d OR levofloxacin 750mg PO daily x5d
• TMP-SMX DS PO BID x14d (if susceptible)
• Avoid nitrofurantoin (inadequate tissue levels for upper tract)

PYELONEPHRITIS (inpatient — systemic signs, unable to take PO):
• Ceftriaxone 1-2g IV q24h (first-line; covers most community E. coli/GNRs)
• Pip-tazo 4.5g IV q6h (ESBL risk: prior ESBL, healthcare-associated, recent antibiotics, recurrent infections)
• Meropenem 1g IV q8h: confirmed ESBL or carbapenem-requiring organisms
• Transition to oral when afebrile x48h and tolerating PO (complete 10-14 day total course for pyelonephritis)

UROSEPSIS: follow Sepsis management protocol — early antibiotics, fluid resuscitation, vasopressors if needed (see Sepsis template)

CAUTI:
• Remove or replace catheter ASAP (most important intervention)
• Duration: 7 days if improving; 10-14 days if delayed response
• Add vancomycin if recent catheterization with MRSA risk or MRSA in prior urine Cx
• Candida CAUTI: fluconazole 200-400mg PO/IV daily x14d (if susceptible); treat ONLY if symptomatic`,
    monitoring: `• Symptom resolution: fever, dysuria, flank pain — expect improvement within 48-72h
• Blood culture results: de-escalate antibiotics when susceptibilities available
• Repeat urine culture (test-of-cure): NOT routine; obtain if: pregnancy, failed treatment, suspected resistant organism, recurrent infection
• BMP: monitor renal function with IV antibiotics (aminoglycosides, carbapenem in renally impaired)
• Clinical reassessment at 48-72h: if not improving — obtain renal imaging to rule out obstruction or abscess`,
    disposition: `• Outpatient: uncomplicated cystitis, mild pyelonephritis tolerating PO, reliable follow-up
• Inpatient: pyelonephritis with systemic signs or inability to tolerate PO, ESBL/MDR organism requiring IV therapy, urosepsis, structural abnormality, pregnancy, immunocompromised
• Urology consult: obstructive uropathy, perinephric abscess, recurrent pyelonephritis, structural abnormality`
  },

  {
    id: "endocarditis",
    system: "cv",
    title: "Infective Endocarditis",
    keywords: ["endocarditis","IE","bacteremia","heart murmur","vegetation","S aureus bacteremia","PWID","mitral valve","aortic valve","duke criteria","splinter hemorrhages","janeway lesions"],
    source: {
      chapter: "Infectious Disease",
      section: "Bloodstream Infections & Endocarditis",
      pages: "112",
      authors: "Ethiopia Getachew",
      keyFacts: [
        "Duke Criteria: Definite = 2 major OR 1 major + 3 minor OR 5 minor",
      "S. aureus/S. lugdunensis: NEVER contaminants — daily surveillance cultures until sterile ×48h; always evaluate for source and endocarditis",
      "MSSA: cefazolin or nafcillin significantly superior to vancomycin — switch from empiric vancomycin when susceptibilities confirm MSSA",
      "Surgical indications: HF from valve destruction (most common), perivalvular abscess/new AV block, persistent bacteremia >5-7d, fungal IE, vegetation ≥10mm + embolic event",
      "S. bovis/gallolyticus bacteremia: order colonoscopy — strong association with colorectal malignancy"
      ]
    },
    assessment: `#Infective Endocarditis (IE)
Suspected or confirmed IE based on [persistent bacteremia / new murmur / embolic phenomena / vegetation on echo / fever with valvular risk].
Duke Criteria: MAJOR: 1) positive blood cultures (typical organism x2 or persistent bacteremia); 2) evidence of endocardial involvement (vegetation/abscess on echo or new valvular regurgitation)
MINOR: fever >38°C, predisposing condition, vascular phenomena, immunologic phenomena, microbiologic evidence
Classification: [ ] Definite (2 major OR 1 major + 3 minor OR 5 minor) [ ] Possible (1 major + 1 minor OR 3 minor) [ ] Rejected
Valve involved: [ ] Native  [ ] Prosthetic (mechanical / bioprosthetic) [ ] Cardiac device (CIED)
Source: [ ] Cutaneous (40%)  [ ] Oral/dental (29%)  [ ] GI (23%)  [ ] Unknown
PWID: [ ] Yes  [ ] No`,
    ddx: `• S. aureus endocarditis (40-50% of IE; aggressive, rapid destruction; NEVER a contaminant in blood cultures)
• Viridans streptococci (oral/dental source; subacute; most common in native valve disease)
• Streptococcus bovis/gallolyticus (colon source — order colonoscopy if S. bovis bacteremia)
• Enterococcus (urologic source; older patients; faecalis >> faecium)
• HACEK organisms (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella — slow growing; large vegetations; check extended cultures)
• Fungal endocarditis (Candida, Aspergillus — PWID, immunocompromised, prolonged IV access; large vegetations; very high mortality)
• Coagulase-negative Staphylococci (CoNS) — prosthetic valve endocarditis; rarely native valve
• Culture-negative IE (Bartonella, Coxiella, Tropheryma — obtain serology if culture-negative)
• Non-infective (Libman-Sacks in SLE, marantic in malignancy, rheumatic fever — no fever, no organisms)`,
    workup: `• Blood cultures x3 (minimum): at least 1 percutaneous; draw from different sites over 1 hour; send BEFORE antibiotics
  - S. aureus and S. lugdunensis are NEVER contaminants — treat as true IE
  - Daily surveillance cultures until sterile x48h (S. aureus — assess for persistent bacteremia)
• TTE (transthoracic echo): FIRST in ALL patients
• TEE (transesophageal echo): if TTE negative with high suspicion; prosthetic valve; CIED; suspected abscess/fistula; poor TTE windows
• CBC, BMP, LFTs, coagulation studies, UA (hematuria → GN from immune complex deposition)
• Rheumatoid factor, ANA (immunologic phenomena assessment)
• ECG: new AV block (extending PR interval) = perivalvular abscess or septal involvement → urgent surgical evaluation
• CT/CTA chest, abdomen, pelvis: embolic complications (CNS, pulmonary, splenic, renal)
• MRI brain: if any neurologic symptoms (embolic stroke, septic emboli, intracranial mycotic aneurysm)
• Dental X-rays: if odontogenic source suspected`,
    management: `EMPIRIC ANTIBIOTICS (start after ≥3 blood cultures drawn):
• Native valve, community-acquired: Vancomycin 15-20 mg/kg IV q8-12h + Ceftriaxone 2g IV q24h (covers Staph, Strep, HACEK, Enterococcus)
• MSSA confirmed: Nafcillin 2g IV q4h OR Cefazolin 2g IV q8h (superior to vancomycin for MSSA)
• MRSA confirmed: Vancomycin (AUC-guided) ± Rifampin (prosthetic valve MRSA)
• Enterococcus (susceptible): Ampicillin 2g IV q4h + Ceftriaxone 2g IV q12h (ACME trial; preferred over aminoglycosides)
• Culture-directed de-escalation at 48-72h based on susceptibilities

DURATION (from first sterile blood culture or start of effective antibiotics):
• Viridans Strep (native valve, susceptible): 4 weeks IV (or 2-week aminoglycoside-based regimen if uncomplicated)
• S. aureus (native valve): minimum 4-6 weeks IV
• S. aureus (prosthetic valve): 6+ weeks IV + rifampin + aminoglycoside
• Enterococcus: 4-6 weeks IV
• Fungal: antifungal + surgical resection; indefinite suppressive therapy after

SURGICAL INDICATIONS (consult cardiac surgery):
• Heart failure from valvular destruction (most common surgical indication)
• Perivalvular abscess, fistula, or new conduction block on ECG
• Uncontrolled infection (persistent bacteremia >5-7d or virulent organism: S. aureus, fungal, multi-drug resistant)
• Vegetation ≥10mm with embolic event (or ≥15mm regardless) — recurrent embolism risk
• Fungal endocarditis (almost all require surgery)

ID CONSULT: mandatory for ALL cases of confirmed or suspected IE`,
    monitoring: `• Daily blood cultures until sterile x48h (S. aureus — critical to confirm clearance)
• Serial ECGs (watch for new AV block — indicates perivalvular abscess)
• Repeat TTE/TEE at 1-3 weeks: assess vegetation size, valve function, new complications
• BMP daily during acute phase (renal function with nephrotoxic antibiotics)
• Vancomycin AUC monitoring (avoid toxicity with prolonged courses)
• CBC weekly (prolonged antibiotic-induced cytopenias)
• Watch for embolic complications: new neurologic findings, abdominal pain, pleuritic chest pain`,
    disposition: `• ICU/CCU: hemodynamic instability, HF from valvular destruction, large embolic burden, intracranial hemorrhage, septic shock
• Cardiac surgery consult: all cases with surgical indications (see above)
• ID consult: ALL cases — mandatory
• Ophthalmology consult: Roth spots, Candida endocarditis (fundoscopic exam for fungal emboli)
• Colonoscopy: if S. bovis/gallolyticus bacteremia (associated with colon malignancy)
• Neurology / neurosurgery: if intracranial mycotic aneurysm, hemorrhagic stroke, or embolic CVA`
  },


  // ════════════════════ CARDIOLOGY — NEW ════════════════════

  {
    id: "bradycardia-av-block",
    system: "cv",
    title: "Bradycardia / AV Block",
    keywords: ["bradycardia","av block","heart block","complete heart block","CHB","mobitz","sick sinus","syncope","pacing","atropine","sinus bradycardia"],
    source: {
      chapter: "Cardiology",
      section: "ACLS: Bradycardia",
      pages: "3",
      authors: "Eli Patt",
      keyFacts: [
        "Atropine: 1mg IV q3-5 min (max 3mg); DO NOT use for Mobitz II or CHB — may paradoxically worsen by increasing atrial rate without improving infranodal conduction",
      "Unstable criteria: hypotension, AMS, ischemic CP, or acute HF — any one of these = initiate treatment immediately",
      "BB antidote: glucagon 3-10mg IV; CCB antidote: calcium gluconate 3-6g + glucagon; digoxin: digoxin immune FAB (1 vial binds ~0.5mg)",
      "Mobitz II and wide-complex CHB: often requires transvenous pacing wire even if currently stable — CALL CARDIOLOGY",
      "Transcutaneous pacing: lorazepam 2mg + dilaudid 2mg IV for sedation; rate 100 BPM, output 100 mA → reduce to minimum capture"
      ]
    },
    assessment: `#Bradycardia / AV Block
HR: ___  BP: ___  Rhythm: ___
Hemodynamic stability: [ ] Stable  [ ] UNSTABLE (hypotension / AMS / ischemic CP / acute HF / pulmonary edema)
AV block classification (from 12-lead ECG):
[ ] Sinus bradycardia  [ ] 1st degree AVB (PR >200ms)
[ ] 2nd degree Mobitz I (Wenckebach) — PR progressively lengthens → dropped QRS; usually narrow QRS; inferior MI, vagal
[ ] 2nd degree Mobitz II — fixed PR with sudden dropped QRS; usually wide QRS; anterior MI, infranodal; HIGH RISK → pacing
[ ] 2:1 block — cannot distinguish Mobitz I vs II without seeing other ratios; treat as Mobitz II
[ ] 3rd degree (Complete Heart Block) — P waves completely dissociated from QRS; AV-nodal escape (narrow, rate 40-60) vs. ventricular escape (wide, rate 20-40)
Reversible cause screened: [ ] Meds (BB, CCB, digoxin, amiodarone)  [ ] ACS (inferior MI → RCA)  [ ] Hyperkalemia  [ ] Hypothyroidism  [ ] Hypothermia  [ ] Elevated ICP  [ ] Lyme  [ ] Sleep apnea`,
    ddx: `PRIMARILY SINUS BRADYCARDIA:
• Sick sinus syndrome (SSS) — degenerative, elderly; sinus pauses, bradycardia-tachycardia syndrome
• Increased vagal tone — athletes, vasovagal, carotid sinus hypersensitivity
• Inferior/posterior MI — RCA occlusion → AV node ischemia; usually transient and vagally mediated
• Medications — BB, non-dihydropyridine CCB, digoxin, amiodarone, ivabradine
• Hypothyroidism, hypothermia, hypoxia, elevated ICP
• Sleep apnea (nocturnal bradycardia)

PRIMARILY AV BLOCK / COMPLETE HEART BLOCK:
• Degenerative calcific conduction disease (Lev/Lenègre disease) — most common chronic CHB cause
• Inferior MI (RCA → AV node) — usually transient, narrow escape, responds to atropine
• Anterior MI (LAD → infranodal) — wide escape, sudden, high mortality (~80%), does NOT respond to atropine
• Post-TAVR, post-septal ablation, post-cardiac surgery
• Lyme carditis (variable block; young, tick exposure, rash)
• Autoimmune myocarditis, infiltrative disease (sarcoidosis, amyloid, hemochromatosis)
• Endocarditis (aortic root abscess extending to AV node)`,
    workup: `• 12-lead ECG (STAT): define rhythm, QRS width, P wave morphology, AV relationship, PR interval
• Telemetry strip: assess for pauses, P:QRS ratio, grouped beating (Wenckebach), AV dissociation
• Fingerstick glucose, BMP (K+, Ca2+, Mg2+), CBC
• TSH (hypothyroidism)
• Digoxin level if applicable
• Troponin + serial ECGs: rule out ACS as precipitant (inferior STEMI → AV node ischemia)
• Lyme serology (IgG/IgM): if young, variable block, tick exposure or endemic area
• ANA, anti-Ro/La if young woman (autoimmune CHB)
• TTE: structural heart disease, assess for endocarditis, wall motion abnormalities
• For stable CHB: workup for infiltrative disease if no clear etiology (ACE level, iron studies, SPEP)`,
    management: `HEMODYNAMICALLY UNSTABLE (hypotension, AMS, ischemic CP, acute HF):
• Atropine 1mg IV q3-5 min (max 3mg) — FIRST LINE for sinus bradycardia, Wenckebach, 1st degree AVB
  - DO NOT USE for Mobitz II or CHB — may paradoxically worsen by increasing atrial rate without improving AV conduction
• If atropine fails or Mobitz II/CHB:
  - Dopamine 5-20 mcg/kg/min IV infusion, OR
  - Epinephrine 2-10 mcg/min IV infusion
• Transcutaneous pacing (TCP): emergent bridge
  - Sedate: lorazepam 2mg IV + dilaudid 2mg IV (or RICU for fentanyl/midazolam)
  - Set rate 100 BPM, output 100mA → reduce to minimum needed to capture
  - Capture confirmed by wide paced QRS with T wave in opposite direction + palpable pulse

HEMODYNAMICALLY STABLE:
• Hold/reverse offending medications (BB, CCB, digoxin — Digibind 1 vial per 0.5mg digoxin)
• Specific antidotes: BB → glucagon 3-10mg IV; CCB → calcium gluconate 3-6g + glucagon
• Monitor: continuous telemetry, frequent BP
• Cardiology consult: Mobitz II and CHB (wide QRS) often require transvenous pacing wire even if stable
• Transvenous pacing wire: placed by cardiology; indications: TCP despite meds, or unstable rhythm without quickly reversible cause
• Treat underlying cause: reperfusion for inferior MI, antibiotics for Lyme

PERMANENT PACEMAKER (PPM) INDICATIONS (Class I):
• Symptomatic sinus bradycardia or chronotropic incompetence
• Symptomatic 2nd or 3rd degree AVB not due to reversible cause
• Mobitz II or CHB regardless of symptoms (high risk of complete failure)`,
    monitoring: `• Continuous telemetry — watch for worsening AV block, pauses >3 seconds, ventricular escape
• Serial ECGs: trend PR interval, QRS width (new BBB suggests Mobitz II risk)
• K+, Mg2+ every 12-24h (electrolyte correction improves conduction)
• TCP capture verification: palpate pulse or assess arterial waveform — electrical capture ≠ mechanical capture
• Hemodynamics every 15-30 min in unstable patients
• Lyme serology results: Lyme CHB may respond to IV ceftriaxone alone (some cases)`,
    disposition: `• ICU/CCU: hemodynamic instability, Mobitz II, wide-complex CHB, requiring transcutaneous or transvenous pacing, post-STEMI CHB
• Cardiology consult: all CHB, all Mobitz II, pacemaker evaluation, endocarditis/myocarditis-associated block
• Floor: stable 1st degree, stable Wenckebach (Mobitz I) with reversible cause identified and corrected`
  },

  {
    id: "vt-wide-complex",
    system: "cv",
    title: "Ventricular Tachycardia (VT) / Wide Complex Tachycardia",
    keywords: ["ventricular tachycardia","VT","wide complex tachycardia","polymorphic VT","torsades de pointes","TdP","VT storm","monomorphic VT","NSVT","cardiac arrest","cardioversion","amiodarone","lidocaine"],
    source: {
      chapter: "Cardiology",
      section: "Wide Complex Tachycardia",
      pages: "9",
      authors: "Elaine Luterstein",
      keyFacts: [
        "If any doubt VT vs. SVT with aberrancy: TREAT AS VT — safer and more effective default",
      "Basel algorithm (93% Sn, 90% Sp): VT if ≥2 of 3 — high-risk substrate (prior MI/EF<35/ICD), lead II time to first peak >40ms, aVR time to first peak >40ms",
      "AV dissociation: pathognomonic for VT — independent P waves marching through at a different rate from QRS",
      "TdP: magnesium sulfate 2-4g IV over 10-15 min first-line (even if Mg normal); isoproterenol or overdrive pacing to increase HR; AVOID amiodarone (lengthens QTc)",
      "VT storm (≥3 VT episodes/24h): propranolol 40mg q6h especially after multiple defibrillations — reduces adrenergic drive"
      ]
    },
    assessment: `#Ventricular Tachycardia (VT) / Wide Complex Tachycardia
HR: ___  BP: ___  Rhythm: [ ] Regular  [ ] Irregular  |  QRS: ___ ms
Hemodynamic stability: [ ] Stable  [ ] UNSTABLE (hypotension / AMS / pulmonary edema / ischemia)
VT type:
[ ] Monomorphic VT — uniform QRS morphology; DDx: ischemia, structural heart disease, scar, idiopathic
[ ] Polymorphic VT — variable QRS morphology; DDx: ischemia (most common), prolonged QTc
[ ] Torsades de Pointes (TdP) — polymorphic VT on background of prolonged QTc; "twisting" of QRS around baseline
[ ] Non-sustained VT (NSVT) — >3 beats, <30 seconds
[ ] Sustained VT — >30 seconds OR causing hemodynamic compromise
[ ] VT Storm — ≥3 sustained VT episodes within 24 hours (call EP ± MCS Shock Team)
Features favoring VT (vs. SVT with aberrancy):
Prior structural heart disease/MI/ICD [ ] / AV dissociation on ECG [ ] / QRS >160ms [ ] / Concordance V1-V6 [ ] / Northwest axis [ ] / Brugada algorithm [ ]`,
    ddx: `Wide Complex Tachycardia DDx (VT 80%, SVT with aberrancy ~20%):
• Ventricular tachycardia (VT) — prior MI/scar, structural heart disease, ischemia, electrolyte abnormalities, drugs
• SVT with aberrancy (RBBB or LBBB pattern on background ECG) — compare QRS to known baseline
• Pre-excited AF (WPW) — irregular rhythm; AVOID AV nodal agents (adenosine, diltiazem, digoxin, amiodarone); use procainamide
• Pacemaker-mediated tachycardia — paced rhythm, endlessly loops via retrograde VA conduction
• Hyperkalemia — sinusoidal pattern, peaked T waves, AV dissociation
• Na+ channel toxicity — TCA, class IC agents, cocaine, Brugada-triggering drugs
POLYMORPHIC VT specifics:
• Ischemic (normal QTc): acute MI/STEMI — emergent revascularization is primary treatment
• Torsades de Pointes (prolonged QTc): drug-induced, electrolyte (hypoK, hypoMg, hypoCa), congenital LQTS, bradycardia-dependent
• Catecholaminergic polymorphic VT (CPVT): exercise/emotion-triggered, normal baseline ECG, young patients`,
    workup: `• 12-lead ECG (STAT): assess QRS width/morphology, AV relationship, QTc, axis, concordance, fusion/capture beats
• Compare with prior ECGs (baseline BBB = SVT with aberrancy)
• BMP (K+, Mg2+ — replete immediately), calcium, glucose
• Troponin (rule out ACS as trigger — ischemic polymorphic VT treated with revascularization)
• Digoxin level if applicable
• Medication review: QT-prolonging agents, antiarrhythmics, Na+ channel blockers, TCA
• TTE/POCUS (bedside): assess LV function, wall motion abnormalities, RV size (ARVC)
• Cardiac monitoring: continuous telemetry, defibrillator pads on patient at all times
• For recurrent/unexplained VT after acute management:
  - Cardiac MRI: scar assessment, arrhythmogenic CM
  - Electrophysiology study: for ablation planning`,
    management: `PULSELESS VT → ACLS (see Cardiac Arrest protocol):
• Defibrillation immediately (200J biphasic); CPR if no pulse; epinephrine 1mg IV q3-5 min; amiodarone 300mg IV after 3 shocks

UNSTABLE SUSTAINED VT (hypotension, AMS, pulmonary edema, ischemia):
• Synchronized cardioversion 100J biphasic (unsynchronized if polymorphic VT — treat as VF)
• Sedate first if patient is awake and time permits

STABLE MONOMORPHIC SUSTAINED VT:
• Check and replenish: K+ >4.0 mEq/L and Mg2+ >2.0 mg/dL (ALWAYS first)
• Amiodarone 150mg IV over 10 min → 1mg/min x 6h → 0.5mg/min x 18h (max 2.2g/24h)
• Lidocaine 1.0-1.5mg/kg IV bolus → 1-4mg/min maintenance (preferred if QTc prolonged or concomitant acute ischemia)
• Procainamide 20-50mg/min or 100mg q5min (max 17mg/kg) → 2-6mg/min maintenance (avoid if QTc, HF)
• Elective synchronized cardioversion if pharmacologic management fails

STABLE NSVT:
• Asymptomatic: monitor, treat underlying cause (CAD, HF, electrolytes)
• Symptomatic or high burden: cardiology consult; nodal blockade (BB > CCB), then antiarrhythmics

TORSADES DE POINTES (TdP):
• Magnesium sulfate 2-4g IV over 10-15 min (FIRST-LINE even if Mg2+ is normal)
• Increase HR to suppress TdP (eliminates pause-dependent triggering): isoproterenol infusion OR overdrive pacing (HR 90-110); avoid bradycardia
• Lidocaine IV (QT-shortening effect; avoid amiodarone, CCB, BB which lengthen QTc)
• STOP all QT-prolonging drugs (see QTc Prolongation template)
• Correct electrolytes: K+ to 4.5-5 mEq/L, Mg2+ to 2-2.5 mg/dL, Ca2+

VT STORM (≥3 sustained VT episodes / 24h):
• Call EP + MCS Shock Team immediately
• Lidocaine bolus (preferred if QTc), then amiodarone (if QTc normal)
• Propranolol 40mg PO q6h (especially after multiple defibrillations — reduces adrenergic drive)
• Treat ischemia: urgent revascularization, IABP for coronary perfusion
• Sedation/intubation to reduce sympathetic tone; consider stellate ganglion block
• Catheter ablation for refractory ischemic CM VT storm`,
    monitoring: `• Continuous telemetry with defibrillator pads in place at all times while hemodynamically compromised
• Serial ECGs: QTc trend (every 4-8h if on antiarrhythmics); new ischemic changes
• K+, Mg2+ levels q2-4h while actively treating
• Troponin trend (ongoing ischemia assessment)
• Amiodarone: LFTs, TFTs, CXR at baseline (pulmonary toxicity with long-term use)
• EP consultation for ICD programming if appropriate after acute stabilization`,
    disposition: `• ICU/CCU: VT storm, hemodynamic instability, requiring IV antiarrhythmics, post-arrest, refractory VT
• Electrophysiology (EP) consult: all sustained VT, VT storm, NSVT with structural heart disease, TdP, congenital LQTS, ICD evaluation/programming
• Cardiology consult: all cases of wide complex tachycardia
• ICD implantation workup: prior cardiac arrest, sustained VT with structural heart disease (discuss after acute stabilization)`
  },

  {
    id: "qtc-prolongation",
    system: "cv",
    title: "QTc Prolongation / Torsades de Pointes Risk",
    keywords: ["QTc prolongation","long QT","torsades de pointes","TdP","drug induced QT","hypokalemia","hypomagnesemia","antipsychotic QT","amiodarone QT","sotalol","acquired long QT","congenital LQTS"],
    source: {
      chapter: "Cardiology",
      section: "QTc Prolongation",
      pages: "12",
      authors: "Amanda Jowell",
      keyFacts: [
        "Stop offending drug if QTc >500ms OR increase in QTc >60ms from baseline",
      "Highest TdP risk drugs: sotalol, dofetilide, ibutilide; IV haloperidol; methadone; azithromycin/clarithromycin; IV ondansetron; thioridazine",
      "Amiodarone: oral rarely causes TdP (uniform repolarization delay) — distinct from other Class III agents; IV amiodarone carries more risk",
      "Electrolyte targets: K+ 4.5-5.0 mEq/L, Mg2+ 2.0-2.5 mg/dL — supratherapeutic repleting to prevent TdP",
      "Sotalol and dofetilide: require inpatient initiation — QTc check 2h after each dose"
      ]
    },
    assessment: `#QTc Prolongation / Torsades de Pointes Risk
QTc: ___  ms  (Corrected using Bazett formula: QT / √RR interval in seconds)
Normal: QTc ≤440ms (M), ≤460ms (F)  |  High TdP risk: QTc >500ms OR ΔQTc from baseline >60ms
QT-prolonging drug(s) identified: ___
Risk factors for TdP (check all that apply):
[ ] QTc >500ms  [ ] Bradycardia / AV block / pauses  [ ] Hypokalemia  [ ] Hypomagnesemia  [ ] Hypocalcemia
[ ] Female sex  [ ] Elderly  [ ] Renal/hepatic failure (reduced drug clearance)  [ ] CHF / LVH / MI
[ ] ≥2 QT-prolonging drugs concurrently  [ ] Congenital long QT syndrome  [ ] Hypothyroidism  [ ] Starvation/anorexia
Symptoms: [ ] Palpitations  [ ] Presyncope / syncope  [ ] Cardiac arrest (TdP → VF)`,
    ddx: `DRUG-INDUCED (most common inpatient cause):
• Antiarrhythmics: sotalol, dofetilide, ibutilide (highest risk); amiodarone (rare TdP due to uniform repolarization delay)
• Antibiotics: azithromycin, erythromycin, clarithromycin, levofloxacin, moxifloxacin, fluconazole, voriconazole
• Antipsychotics: IV haloperidol, thioridazine, quetiapine, ziprasidone, risperidone
• Antidepressants: citalopram and escitalopram (dose-dependent), clomipramine, imipramine
• Antiemetics: IV ondansetron (especially >32mg IV), droperidol
• Methadone (very common cause, especially at higher doses)

ELECTROLYTE DISTURBANCES:
• Hypokalemia, hypomagnesemia, hypocalcemia — directly prolong repolarization

CONGENITAL:
• LQTS 1-13: often discovered on ECG or QTc unexpectedly prolonged relative to drug effect; syncope with exercise (LQTS1), swimming (LQTS1), auditory stimuli (LQTS2), rest/sleep (LQTS3)

OTHER:
• Hypothyroidism, hypothermia, complete heart block, acute MI, intracranial events (CNS-mediated QT changes)`,
    workup: `• 12-lead ECG (STAT if QTc >500ms or new T wave morphology changes)
  - Assess for: QTc, T wave morphology (notched, bifid T in LQTS2), U waves (hypoK), R-on-T phenomenon, premature beats
• Repeat ECG: 2h after dose change of QT-prolonging drug, or 12h after starting new QT-prolonging drug
• BMP: K+ and Mg2+ (correct aggressively), Ca2+, BUN/Cr, glucose
• Thyroid function tests (TSH) if no clear drug-induced cause
• Comprehensive medication reconciliation: identify all QT-prolonging agents, check drug-drug interactions (CYP450 inhibitors can increase drug levels → longer QT)
• Cardiology / EP consult: QTc >500ms, suspected congenital LQTS, recurrent syncope, TdP
• Genetics referral: if suspected familial LQTS (family history of sudden cardiac death, young age, multiple episodes)`,
    management: `IMMEDIATE ACTIONS (QTc >500ms or ΔQTc >60ms from baseline):
1. STOP the offending QT-prolonging drug (most important intervention)
2. CORRECT electrolytes aggressively:
   • K+: replete to 4.5-5.0 mEq/L (IV replacement if <3.5 mEq/L)
   • Mg2+: magnesium sulfate 2g IV over 15-30 min; replete to 2.0-2.5 mg/dL
   • Ca2+: correct hypocalcemia
3. STOP drugs causing bradycardia (BB, CCB, amiodarone) — pauses facilitate TdP
4. Telemetry monitoring: continuous; watch for runs of TdP, R-on-T, pauses
5. AVOID adding any additional QT-prolonging medications

IF TORSADES DE POINTES DEVELOPS:
• Magnesium sulfate 2-4g IV over 10-15 min (FIRST-LINE even if Mg2+ is normal)
• Increase HR to suppress: isoproterenol infusion OR overdrive pacing (transcutaneous/transvenous, target HR 90-110 bpm)
• Lidocaine IV: QT-shortening effect; preferred over amiodarone in TdP
• Defibrillate if TdP degenerates to VF or pulseless TdP

ONGOING QT MONITORING:
• For sotalol and dofetilide: check QTc 2h after each dose (initiation requires inpatient monitoring per guidelines)
• For any QT-prolonging drug initiation: check QTc before initiation and q8-12h during uptitration
• Use CredibleMeds (QTdrugs.org) to check all medications for QT risk

CONGENITAL LQTS:
• Beta-blockers (nadolol preferred, metoprolol alternative) for all patients — reduces early afterdepolarizations
• ICD: history of cardiac arrest, recurrent syncope on BB, high-risk genotype (LQTS2/3)`,
    monitoring: `• QTc on ECG: before each dose change, then 8-12h after initiation of QT-prolonging drugs
• Continuous telemetry while QTc >500ms or active TdP risk
• K+ and Mg2+ every 6-12h while actively correcting (target K+ 4.5-5.0, Mg2+ 2.0-2.5)
• Review all new medication orders for QT-prolonging potential before prescribing`,
    disposition: `• ICU/CCU: active TdP, QTc >550ms, hemodynamic instability, requires overdrive pacing
• Telemetry floor: QTc >500ms or ΔQTc >60ms, starting sotalol or dofetilide (mandatory inpatient initiation), high-risk drug combination
• EP consult: suspected congenital LQTS, recurrent TdP, ICD consideration, initiation of class III antiarrhythmics`
  },

  {
    id: "pericarditis-tamponade",
    system: "cv",
    title: "Pericarditis / Cardiac Tamponade",
    keywords: ["pericarditis","cardiac tamponade","pericardial effusion","pericardiocentesis","pleuritic chest pain","friction rub","becks triad","pulsus paradoxus","PR depression","ST elevation diffuse","colchicine","NSAIDs","constrictive"],
    source: {
      chapter: "Cardiology",
      section: "Pericardial Disease",
      pages: "31",
      authors: "Ore Olakunle",
      keyFacts: [
        "Diagnosis (≥2 of 4): pleuritic CP, friction rub, diffuse concave STE + PR depression on ECG, pericardial effusion on TTE",
      "Colchicine 0.6mg BID ×3 months (no taper) + NSAID: reduces recurrence and treatment failure (COPE + ICAP trials)",
      "Glucocorticoids first-line: AVOID for idiopathic pericarditis (higher recurrence during taper) — second-line only if NSAID-refractory, uremic, or autoimmune",
      "Tamponade: effusion SIZE does NOT predict tamponade — RATE of accumulation is what determines hemodynamic impact",
      "Hospitalize if: fever, large effusion >2cm, immunosuppressed, anticoagulated, trauma, elevated troponin, hemodynamic instability, or no NSAID response ×7d"
      ]
    },
    assessment: `#Pericarditis / Cardiac Tamponade
Presentation: [ ] Pericarditis (chest pain ± friction rub ± ECG changes)  [ ] Pericardial Effusion  [ ] Cardiac Tamponade
Pericarditis Diagnostic Criteria (≥2 of 4):
[ ] Characteristic pleuritic retrosternal CP (worse supine, better leaning forward)
[ ] Pericardial friction rub
[ ] Diffuse concave (saddle-shaped) ST elevation with PR depression on ECG (except in aVR/V1: PR elevation, ST depression)
[ ] Pericardial effusion on imaging
Tamponade features: Beck's Triad (hypotension / JVP elevation / muffled heart sounds) [ ] / Pulsus paradoxus >10mmHg [ ] / Electrical alternans [ ]
Hospitalization criteria (≥1): fever >38°C / large effusion >2cm / immunosuppressed / anticoagulated / trauma / troponin elevated / hemodynamic instability / failure to respond to NSAIDs x7d`,
    ddx: `PERICARDITIS ETIOLOGY:
• Idiopathic/viral (80-90%): most common; often follows URI; enteroviruses, adenovirus, EBV
• Post-MI pericarditis: early (within 2-3 days, transmural MI — "pericarditis"); late Dressler syndrome (1-6 weeks, autoimmune — malaise, fever, leukocytosis)
• Post-cardiac injury syndromes: post-CABG, post-ablation, post-TAVR
• Uremic pericarditis: BUN-driven inflammation; absence of chest pain common; treat with dialysis
• Malignant: breast, lung, lymphoma, melanoma — hemorrhagic effusion, rapid reaccumulation
• Infectious (non-viral): TB (subacute, constitutional, high ADA), bacterial (purulent — Staph, Strep; from contiguous spread)
• Autoimmune/inflammatory: SLE, RA, scleroderma, sarcoidosis, IgG4-RD
• Drug-induced: procainamide, hydralazine, INH, certain immunotherapies
• Radiation-induced: late complication (10-20y after chest radiation for Hodgkin's)

CARDIAC TAMPONADE ETIOLOGY:
• Malignancy (13%): most common cause of large effusion with tamponade
• Post-procedural/iatrogenic (16%): post-cath, cardiac surgery, ablation, line placement
• Uremic (dialysis-requiring)
• Post-viral pericarditis with large effusion
• Proximal aortic dissection extending into pericardial space (hemorrhagic tamponade)
• Myocardial wall rupture post-MI (catastrophic, immediate surgical emergency)`,
    workup: `• ECG: 4 stages — Stage 1: diffuse concave STE + PR depression (PR elevation + STD in aVR/V1); Stage 2: ST/PR normalize; Stage 3: diffuse TWI; Stage 4: TW normalize
  - Electrical alternans (20%): QRS alternating height/axis — suggests large effusion + tamponade
  - Low QRS voltage (≤5mm limb, ≤10mm precordial): effusion
• TTE: pericardial effusion size/location, diastolic chamber collapse (RA → RV collapse), IVC plethora, inspiratory septal shift, respirophasic valve Doppler velocities
• CXR: cardiomegaly ("water-bottle" silhouette in large effusion); rule out pneumonia, pneumothorax
• BMP, CBC, CRP, ESR (baseline + monitor treatment response)
• Troponin: elevated in ~30% pericarditis (c/f myopericarditis → restrict activity, more aggressive follow-up)
• ANA, anti-dsDNA, RF (autoimmune), anti-Ro/La (SLE)
• IGRA / TB testing, BUN/Cr (uremic)
• HIV, HCV (in appropriate clinical context)
• Pericardial fluid analysis (if drainage): cell count, protein, LDH, Gram stain + culture, fungal/AFB (TB suspected), cytology/tumor markers, ADA (TB — elevated >40 U/L)`,
    management: `ACUTE PERICARDITIS (uncomplicated):
• NSAIDs: ibuprofen 600-800mg TID OR ASA 650-975mg TID OR indomethacin 25-50mg TID
  - ASA preferred if: post-MI, CKD (GFR <45), anticoagulated
  - Duration: until symptoms resolve (1-2 weeks), then taper (3-4 weeks total)
  - Add PPI if: age >65, prior PUD, on anticoagulants or steroids
• Colchicine 0.6mg BID (0.6mg qd if weight <70 kg) × 3 months (NO taper needed)
  - Reduces recurrence and treatment failure (COPE trial, ICAP trial)
• Activity restriction: avoid strenuous activity until symptom-free (return to sport delayed for competitive athletes)
• Glucocorticoids (prednisone 0.25-0.5 mg/kg/day): SECOND-LINE — use only if:
  - Refractory to 7 days of NSAIDs, recurrent episodes, uremic, autoimmune, or NSAID contraindication
  - Avoid as first-line (associated with higher recurrence during taper in idiopathic pericarditis)

RECURRENT PERICARDITIS:
• Same as initial treatment but longer colchicine (6+ months); taper NSAIDs guided by CRP
• Consider IL-1 inhibitors (rilonacept): for colchicine-refractory recurrent pericarditis
• MGH Pericardial Disease Program: for complex/refractory cases

CARDIAC TAMPONADE:
• IVF bolus 250-500mL NS/LR STAT to increase intracardiac filling pressures; inotropes if needed
• Avoid positive pressure ventilation if possible (PPV further impairs RV filling → hemodynamic collapse)
• Emergent pericardiocentesis (IR or bedside echo-guided): catheter drainage; leave drain until output <50mL/day
  - Surgical drainage if: suspected aortic/myocardial rupture, clotted/loculated effusion, pericardial window needed
• Uremic tamponade: hemodialysis + pericardiocentesis
• Send pericardial fluid for: cell count, protein, LDH, culture, cytology, ADA (TB), tumor markers (malignant)`,
    monitoring: `• CRP and ESR: monitor weekly during treatment — normalize over 1-3 weeks with effective therapy; use CRP to guide NSAID taper
• Troponin: repeat at 24-72h if initially elevated (myopericarditis — more frequent follow-up, higher recurrence risk)
• TTE: repeat at 1-3 months to assess effusion resolution; at 3-6 months for constrictive pericarditis signs
• Post-pericardiocentesis: drainage output daily; chest X-ray (r/o pneumothorax); TTE before drain removal
• Activity restriction duration: until CRP normal + symptom-free (typically 2-4 weeks for uncomplicated pericarditis)`,
    disposition: `• Outpatient: uncomplicated first-episode pericarditis, no high-risk features, reliable follow-up in 1 week
• Inpatient: any hospitalization criterion present (see Assessment above), troponin elevation, large effusion >2cm, hemodynamic instability
• ICU/CCU: cardiac tamponade, hemodynamic instability, urgent pericardiocentesis, constrictive physiology
• Cardiology consult: all cases of tamponade, myopericarditis, recurrent pericarditis, large effusion requiring drainage
• Cardiothoracic surgery consult: suspected myocardial rupture, loculated hemorrhagic effusion, pericardial window`
  },

  {
    id: "aortic-dissection",
    system: "cv",
    title: "Acute Aortic Syndromes (Dissection / IMH / PAU)",
    keywords: ["aortic dissection","aortic syndrome","type A dissection","type B dissection","intramural hematoma","IMH","penetrating aortic ulcer","PAU","tearing chest pain","back pain","pulse deficit","aortic emergency","impulse control"],
    source: {
      chapter: "Cardiology",
      section: "Aortic Disease",
      pages: "32–33",
      authors: "Daniel Weiner, Rachel Wittenberg",
      keyFacts: [
        "Impulse control targets: HR 60-80 bpm + SBP <120 mmHg — esmolol FIRST (before vasodilators) to prevent reflex tachycardia",
      "Type A: surgical emergency — mortality ~1-2%/hour without intervention; STAT cardiothoracic surgery",
      "D-dimer <500 ng/mL: 96% NPV for AAS — useful to rule out in low clinical probability (ADD-RS score 0)",
      "CXR normal in 50% of AAS — widened mediastinum present in only 1/3; cannot rule out dissection on CXR",
      "CRITICAL: rule out Type A dissection before anticoagulating or giving thrombolytics if inferior STEMI (RCA involvement by dissection)"
      ]
    },
    assessment: `#Acute Aortic Syndrome (Aortic Dissection / Intramural Hematoma / PAU)
Presentation: severe chest/back/abdominal pain — [ripping / tearing / migrating] quality
Classification:
[ ] Stanford Type A: involves ascending aorta (± descending) — SURGICAL EMERGENCY
[ ] Stanford Type B: involves descending aorta only — typically medical management
DeBakey: [ ] I (ascending + descending)  [ ] II (ascending only)  [ ] III (descending only)
AAS type: [ ] Classic dissection (intimal tear → false lumen)  [ ] Intramural hematoma (IMH)  [ ] Penetrating aortic ulcer (PAU)
High-risk features: BP differential >20mmHg between arms [ ] / New AI murmur [ ] / Pulse deficit [ ] / Facial/arm asymmetry [ ] / Neurologic deficit [ ]
ADD-RS risk score: ___  (High risk features: aortic conditions, BP differential/pulse deficit, chest/back/abdominal pain — highest risk = pain character typical for AAS)`,
    ddx: `AAS cannot be distinguished by clinical presentation alone (dissection, IMH, PAU all present similarly):
• Type A aortic dissection — ascending aorta; immediate cardiac surgery; complications: aortic regurgitation, coronary occlusion (MI), tamponade, hemopericardium, stroke, arch vessel occlusion
• Type B aortic dissection — descending only; medical management unless complicated (malperfusion, rupture, rapid expansion, uncontrolled pain)
• Intramural hematoma (IMH): rupture of vasa vasorum → wall hematoma without intimal tear; 28-47% progress to complete dissection
• Penetrating atherosclerotic ulcer (PAU): atherosclerotic plaque ulcerates through intima → progresses to rupture in ~42%
• ACS/STEMI: may coexist if dissection extends into coronary ostia (RCA most common) — DO NOT anticoagulate without ruling out dissection
• Aortic aneurysm rupture: acute hemodynamic collapse, pulsatile abdominal mass
• Other: PE, pneumothorax, GERD, musculoskeletal — rule out by clinical assessment and imaging`,
    workup: `• CXR (portable): widened mediastinum (>8cm) in 1/3 only; 50% of AAS have normal CXR — cannot rule out
• D-dimer: <500 ng/mL has 96% NPV for AAS (useful to rule out in low-risk patients)
• STAT CTA chest/abdomen/pelvis with IV contrast (I+ and I-): FIRST-LINE
  - Sn 95%, Sp 87-100%; defines type, extent, branch vessel involvement, false lumen, entry tear
  - Combined I+/I- assesses for IMH (wall thickening without false lumen) and hemopericardium
• TTE (bedside/emergent): if patient too unstable for CT; assess for AI murmur, aortic root, pericardial effusion, tamponade, wall motion
• TEE: Sn 99%, Sp 90-100% — gold standard; used intraoperatively; limited by invasive nature
• Troponin + 12-lead ECG: dissection extending to coronary ostia (usually RCA → inferior ST changes)
  - CRITICAL: if ECG shows STEMI, rule out dissection before anticoagulating or giving thrombolytics
• BMP, CBC, coagulation, T&S/crossmatch (surgical planning)
• Type & crossmatch 6+ units pRBC (Type A — operating room likely)`,
    management: `GENERAL ("IMPULSE CONTROL") — START IMMEDIATELY (both Type A and B):
• Goal: reduce LV dP/dT (rate of pressure rise) → minimize aortic wall stress
• Target HR 60-80 bpm + SBP <120 mmHg (some guidelines: mean BP 60-75 mmHg)
• IV access ×2 large-bore + arterial line (right radial preferred unless right arm dissected)
• NO anticoagulation (unless Type A requires CPB — cardiology/surgery decision)

HEART RATE CONTROL (first, before vasodilators — to prevent reflex tachycardia):
• Esmolol IV: 0.5-1 mg/kg bolus × 1 min → maintenance 2-21 mg/min (25-300 mcg/kg/min); preferred (titratable, short half-life)
• Labetalol IV: 20mg IV bolus → 40-80mg q10 min PRN; or 2mg/min infusion
• Metoprolol 5mg IV q5-15 min

BLOOD PRESSURE CONTROL (after HR controlled):
• Nitroprusside 0.25-0.5 mcg/kg/min (ONLY after BB initiated — avoid reflex tachycardia)
• Nicardipine 5-15mg/h IV infusion (alternative if BB contraindicated)
• Avoid: pure vasodilators without BB first (reflex tachycardia worsens aortic wall stress)

TYPE A (ASCENDING) — SURGICAL EMERGENCY:
• Immediate cardiothoracic surgery consult (STAT page)
• Goal: operating room within 60-90 minutes of diagnosis
• Emergent surgical repair: mortality ~1-2%/hour without surgery
• Control BP/HR while awaiting OR

TYPE B (DESCENDING):
• Medical management: impulse control (as above) — in-hospital mortality ~8%
• Endovascular repair (TEVAR) or surgery if COMPLICATED:
  - Malperfusion syndrome (renal failure, limb ischemia, mesenteric ischemia, paraplegia)
  - Rupture or impending rupture (>4.5cm diameter, rapid expansion >10mm/year)
  - Refractory hypertension or pain despite maximal medical therapy`,
    monitoring: `• Continuous arterial line monitoring (bilateral radial if possible — document any side-to-side discrepancy)
• HR and SBP every 5-15 minutes while titrating drips; target HR 60-80, SBP <120
• Urine output via Foley (malperfusion assessment — oliguria = renal malperfusion)
• Serial neurologic exams (limb weakness/numbness = spinal cord ischemia)
• Troponin trend (coronary involvement)
• Repeat CT imaging: 24-48h if any clinical deterioration; 6-12 months post-discharge for aortic surveillance`,
    disposition: `• Operating room STAT: Type A dissection — mortality risk ~1-2%/hour without surgery
• ICU (vascular/CVICU): all AAS — intensive hemodynamic monitoring, impulse control drips
• Cardiothoracic surgery consult: Type A (emergent), Type B (urgent if complicated)
• Vascular surgery: Type B with malperfusion or TEVAR candidate
• Long-term: lifelong imaging surveillance (CTA/MRI at 1, 3, 6, 12 months then annually); strict BP control; beta-blocker continuation`
  },

  {
    id: "htn-emergency",
    system: "cv",
    title: "Hypertensive Emergency",
    keywords: ["hypertensive emergency","hypertensive urgency","HTN emergency","malignant hypertension","end organ damage","papilledema","PRES","nitroprusside","nicardipine","labetalol","flash pulmonary edema","encephalopathy","aortic dissection BP"],
    source: {
      chapter: "Cardiology",
      section: "Hypertensive Emergency",
      pages: "35",
      authors: "Rachel Wittenberg",
      keyFacts: [
        "BP correction: reduce MAP ≤25% in first hour; target 160/100 within 2-6h; normalize over 24-48h — avoid overcorrection (cerebral/coronary ischemia)",
      "Pheo/cocaine: alpha blockade FIRST (phentolamine 5-15mg IV) — NEVER give BB first (paradoxical severe HTN from unopposed alpha stimulation)",
      "Scleroderma renal crisis: ACEi IS the treatment (not contraindicated) — dramatically improves survival",
      "Ischemic stroke: permissive HTN — do NOT treat unless >220/120; tPA candidates must be <185/110",
      "Asymptomatic markedly elevated BP: oral meds + outpatient follow-up — avoid aggressive IV treatment (associated with worse outcomes, JAMA IM 2021)"
      ]
    },
    assessment: `#Hypertensive Emergency
BP: ___/___  HR: ___
Definition: SBP ≥180 OR DBP ≥110-120 mmHg WITH evidence of end-organ damage
End-organ damage type (check all present):
[ ] Neurologic: HTN encephalopathy (severe HA, AMS, seizure) / PRES / ischemic or hemorrhagic CVA / SAH
[ ] Ophthalmologic: papilledema, retinal hemorrhage/exudates, visual changes
[ ] Cardiovascular: flash pulmonary edema / ACS / angina / aortic dissection
[ ] Renal: AKI, hematuria, proteinuria
[ ] Hematologic: MAHA (microangiopathic hemolytic anemia — thrombocytopenia + schistocytes on smear)
Asymptomatic markedly elevated BP: SBP ≥180 or DBP ≥110 WITHOUT end-organ damage — NOT a true emergency; avoid overly aggressive acute correction; manage as outpatient
Assess contributing factors: pain, anxiety, urinary retention, medications (steroids, sympathomimetics), OSA, non-adherence to antihypertensives`,
    ddx: `HYPERTENSIVE EMERGENCY SUBTYPES (by end-organ):
• HTN encephalopathy / PRES: severe headache, visual changes, AMS, seizures; MRI shows posterior leukoencephalopathy (parieto-occipital white matter edema); BP-responsive
• Hypertensive intracerebral hemorrhage: sudden severe headache, focal neuro deficits; NCHCT immediately
• Ischemic stroke with severe HTN: permissive hypertension in most cases (goal <185/110 for tPA candidates); avoid aggressive lowering
• Subarachnoid hemorrhage: thunderclap headache, meningismus, CT/LP for xanthochromia
• Flash pulmonary edema: acute dyspnea, hypoxia, crackles, bilateral infiltrates on CXR; often due to bilateral renal artery stenosis (Pickering syndrome) or severe diastolic dysfunction
• Acute MI: demand ischemia from hypertensive surge — treat BP cautiously with nitroglycerin + BB
• Aortic dissection: see Aortic Dissection template — CRITICAL; impulse control with BB before vasodilators
• Scleroderma renal crisis: proteinuria, AKI, thrombocytopenia; ACEi/ARB are TREATMENT (not contraindicated)
• Eclampsia/pre-eclampsia: pregnancy (>20 weeks) or postpartum, seizures, proteinuria — magnesium sulfate + delivery
• Catecholamine excess: pheochromocytoma, MAO inhibitor interaction, cocaine, amphetamines — use alpha blockade (phentolamine)`,
    workup: `• 12-lead ECG: LVH, ischemia, aortic dissection (STEMI)
• CXR: pulmonary edema, widened mediastinum (dissection), cardiomegaly
• BMP: Cr (renal end-organ damage, acute AKI), K+ (hyperaldo in secondary HTN)
• UA + microscopy: hematuria, RBC casts (malignant nephrosclerosis), proteinuria
• CBC + peripheral smear: thrombocytopenia + schistocytes → MAHA (TTP/HUS vs. HTN emergency)
• Troponin: ACS/myocardial injury
• Fundoscopic exam: papilledema (Grade 4 = HTN emergency), hemorrhages, exudates
• NCHCT (STAT): if any neurologic symptoms — hemorrhagic stroke, SAH, cerebral edema (PRES)
• MRI brain with FLAIR: PRES (posterior parieto-occipital white matter hyperintensity)
• CTA aorta: if suspected aortic dissection (sudden severe tearing chest/back pain, BP differential)
• Urine catecholamines/metanephrines, aldosterone:renin ratio: if secondary hypertension suspected`,
    management: `RATE AND TARGET OF BP CORRECTION:
• MAX 25% reduction in MAP in first 1 hour (avoid cerebral/coronary hypoperfusion)
• Then reduce to 160/100 mmHg within 2-6 hours
• Normalize over 24-48 hours
• EXCEPTION: aortic dissection → HR and BP control immediately (target SBP <120 with HR 60-80)
• EXCEPTION: ischemic stroke → permissive HTN (no treatment unless BP >220/120; tPA candidates must be <185/110)

PREFERRED IV AGENTS BY CLINICAL SCENARIO:
• Hypertensive encephalopathy / PRES / general: nicardipine 5-15 mg/h IV gtt (titratable, no reflex tachycardia) OR clevidipine 1-2 mg/h (IV, ultra-short acting)
• Flash pulmonary edema (with normal/high EF): furosemide + nitroglycerin 5-200 mcg/min; AVOID in hypovolemic states
• Aortic dissection: esmolol first → then nitroprusside or nicardipine (see Aortic Dissection template)
• Acute MI / angina: nitroglycerin IV ± IV BB; AVOID reflex tachycardia-inducing agents
• SAH / ICH: nicardipine or labetalol (short-acting agents); SBP target <140-160 per neurosurgery
• Catecholamine excess (pheochromocytoma, cocaine): phentolamine 5-15 mg IV bolus (alpha blockade FIRST — give BB only after)
  - CRITICAL: Never give BB before alpha blockade in pheochromocytoma (paradoxical severe hypertension from unopposed alpha stimulation)
• Scleroderma renal crisis: ACEi (captopril, enalapril) — ACEi dramatically improves outcomes; initiate promptly
• Eclampsia: IV labetalol 20-80mg boluses or IV hydralazine + magnesium sulfate 4-6g IV load → 2g/h maintenance; obstetrics consult for delivery

TRANSITION TO ORAL AGENTS:
• Start long-acting PO antihypertensives once BP responding and stable
• Avoid short-acting oral nifedipine (uncontrolled BP drops, stroke risk)

ASYMPTOMATIC MARKEDLY ELEVATED BP (no end-organ damage):
• Outpatient management preferred over inpatient
• Avoid IV medications — risk of AKI, stroke from overcorrection
• Oral antihypertensive adjustment; close follow-up in 1-7 days`,
    monitoring: `• Arterial line: mandatory for all hypertensive emergencies on IV drips (continuous beat-to-beat monitoring)
• MAP and SBP goals: MAP reduction ≤25% in first hour; check every 5-15 min while titrating
• Urine output (Foley catheter): renal perfusion monitoring
• Neurologic exam: every 2-4h (AMS, focal deficits — overly aggressive BP lowering can worsen ischemic stroke)
• BMP at 6-12h: renal function, K+ (with IV agents)
• Troponin trend: myocardial injury from hypertensive surge`,
    disposition: `• ICU: all hypertensive emergencies requiring IV drips, arterial line monitoring, neurologic end-organ damage, flash pulmonary edema, aortic dissection
• Floor (monitored bed): BP controlled on oral agents with resolving end-organ damage, close follow-up available
• Nephrology consult: scleroderma renal crisis, AKI with proteinuria/hematuria, MAHA
• Neurology consult: stroke, ICH, PRES
• Outpatient: asymptomatic markedly elevated BP — urgent outpatient follow-up within 1-7 days`
  },

  {
    id: "valvular-disease",
    system: "cv",
    title: "Valvular Heart Disease (AS / AR / MR / MS / TR)",
    keywords: ["aortic stenosis","aortic regurgitation","mitral stenosis","mitral regurgitation","tricuspid regurgitation","TAVR","SAVR","valvular disease","murmur","MVR","AVR","structural heart disease","M-TEER","MitraClip"],
    source: {
      chapter: "Cardiology",
      section: "Valvular Heart Disease",
      pages: "29–30",
      authors: "Joseph Replogle",
      keyFacts: [
        "Severe AS: peak velocity ≥4 m/s OR mean gradient ≥40 mmHg OR AVA ≤1 cm² — classic triad: angina (3-5y), syncope (2-3y), HF (1-2y) without AVR",
      "TAVR vs SAVR: age <65 → SAVR (durability); age >80 → TAVR; age 65-80 → shared decision (STS-PROM score + anatomy)",
      "Acute AR: AVOID IABP (worsens regurgitation) and BB (lengthen diastolic regurgitant time) — use nitroprusside + inotropes",
      "Severe primary MR surgical threshold: symptomatic at any EF OR asymptomatic with EF ≤60% or LVESD ≥40mm",
      "IE prophylaxis (Class 2a): amoxicillin 2g PO 30-60 min before high-risk dental procedures — prosthetic valves, prior IE, unrepaired CHD, cardiac transplant with valvulopathy"
      ]
    },
    assessment: `#Valvular Heart Disease
Valve(s) involved: [ ] Aortic  [ ] Mitral  [ ] Tricuspid  [ ] Pulmonic  [ ] Multiple
Lesion type: [ ] Stenosis  [ ] Regurgitation  [ ] Mixed
Severity (from TTE): [ ] Mild  [ ] Moderate  [ ] Severe  [ ] Very Severe
EF: ___  |  LV end-systolic dimension (if MR): ___
Symptoms attributable to valve disease: [ ] Dyspnea  [ ] Angina  [ ] Syncope  [ ] HF symptoms  [ ] Asymptomatic
Native vs. prosthetic: [ ] Native  [ ] Bioprosthetic  [ ] Mechanical (anticoagulation target: ___)
Structural cardiology referral: [ ] Not yet consulted  [ ] Evaluation in progress  [ ] Procedure planned`,
    ddx: `AORTIC STENOSIS (AS):
• Degenerative calcific AS (most common >70yo): age-related wear; precursor = aortic sclerosis
• Bicuspid aortic valve (most common <70yo): congenital; faster progression; associated with aortic dilation
• Rheumatic AS: leaflet fusion; almost always with concurrent mitral valve disease
• Classic triad of severe symptomatic AS: Angina (3-5y survival without AVR), Syncope (2-3y), Heart Failure (1-2y)

AORTIC REGURGITATION (AR):
• Acute AR: infective endocarditis, aortic dissection (Type A), trauma — presents with flash pulmonary edema and shock (no time for LV remodeling)
• Chronic AR: bicuspid valve, RHD, CTD (Marfan, Ehlers-Danlos), syphilis, endocarditis sequelae, aortic root dilation (HTN, aneurysm)

MITRAL REGURGITATION (MR):
• Acute MR: inferior MI → papillary muscle rupture (post-MI days 3-7), endocarditis chordal rupture, trauma
• Chronic Primary MR: MVP (most common in US), degenerative, RHD, endocarditis
• Chronic Secondary (functional) MR: dilated annulus from dilated CM or HF; systolic anterior motion (SAM) in HCM

MITRAL STENOSIS (MS):
• Rheumatic heart disease (~80%): only 50-70% recall rheumatic fever history; progressive commissural fusion; also causes AF, pulmonary HTN, RV failure
• Calcific non-rheumatic MS: annular calcification; different anatomy — no role for balloon commissurotomy

TRICUSPID REGURGITATION (TR):
• Secondary (most common): dilated annulus from pulmonary HTN, AF, dilated CM, or chronic RV overload
• Primary: infective endocarditis (PWID), RHD, carcinoid syndrome, device leads`,
    workup: `FOR ALL VALVULAR DISEASE:
• TTE (standard): EF, gradient, valve area, valve morphology, other valve involvement, PA pressures
• TEE: prosthetic valve assessment, MV morphology for repair feasibility, vegetations, thrombus, pre-cardioversion
• Exercise treadmill or exercise echo: asymptomatic severe AS (assess for exercise-induced symptoms, LV response)
• Cardiac CT/CTA: TAVR anatomic evaluation (valve sizing, vascular access); calcium scoring in AS
• Coronary angiography or CT coronary angiography: evaluate CAD before surgical valve replacement (>40yo)
• CBC, BMP, coagulation studies
• Blood cultures x2 (if fever or endocarditis concern before any procedure)

SPECIFIC TO LESION:
• AS: ECG (LVH, LAE, LBBB); STS-PROM score (surgical risk) if AVR being considered; dental clearance (Panorex)
• AR: ECG (volume overload pattern); aorta imaging (CTA) if bicuspid or aortic root dilation (Marfan concern)
• MR: exercise LHC/hemodynamics if symptomatic status unclear; Wilkins score (echocardiographic feasibility score for PMBC in MS)
• MS: INR if on warfarin; transesophageal echo before PMBC (exclude LA thrombus)`,
    management: `AORTIC STENOSIS (AS):
• Medical: no proven therapy to halt progression; treat HTN cautiously (start low, go slow — preload-sensitive)
• AVR indications:
  - Symptomatic severe AS (Stage D): prompt AVR (surgical SAVR or transcatheter TAVR)
  - Asymptomatic severe AS + LVEF <50% OR exercise-induced symptoms → AVR appropriate
  - TAVR if high/extreme surgical risk; SAVR if age <65 (durability); TAVR if age >80; shared decision-making age 65-80 based on STS-PROM
• Post-TAVR: aspirin monotherapy (non-inferior to DAPT with less bleeding)
• Anticoagulation: mechanical valve → warfarin (INR 2-3 aortic, 2.5-3.5 mitral); bioprosthetic → ASA after first 3 months

AORTIC REGURGITATION (AR):
• Acute AR: usually surgical emergency; nitroprusside (afterload reduction); inotropes and chronotropes to increase forward flow; AVOID IABP (worsens regurgitation) and BB (lengthens diastolic regurgitant time)
• Chronic AR: ACEi/ARB/ARNI (reduce afterload); CCB or hydralazine/nitrates if ACEi intolerant
• Surgical AVR if: severe AR + symptomatic OR LVEF <55% OR LVESD >50mm OR undergoing other cardiac surgery

MITRAL REGURGITATION (MR):
• Acute MR: urgent surgical repair; dobutamine + diuresis + afterload reduction (nitroprusside); IABP if hemodynamically unstable
• Chronic Primary MR: MVR if symptomatic at any EF OR asymptomatic with LVEF ≤60% or LVESD ≥40mm; prefer repair over replacement
  - High surgical risk → Transcatheter edge-to-edge repair (M-TEER / MitraClip)
• Functional Secondary MR: GDMT optimization first; M-TEER if persistent symptoms + favorable anatomy (COAPT criteria: LVEF 20-50%)

MITRAL STENOSIS (MS):
• Medical: warfarin if LA thrombus / AF / prior embolism; BB for rate control if tachycardic or dyspneic; diuretics for pulmonary edema
• Percutaneous mitral balloon commissurotomy (PMBC): symptomatic severe rheumatic MS + favorable anatomy (Wilkins score ≤8)
• Surgical MVR: symptomatic severe MS + failed or not candidate for PMBC; or undergoing other cardiac surgery

TRICUSPID REGURGITATION (TR):
• Diuresis for volume overload symptoms (right HF: ascites, edema, hepatomegaly)
• Treat underlying cause: pulmonary HTN, left-sided HF, AF
• Tricuspid valve repair/replacement: see disposition for surgical indications; transcatheter T-TEER emerging

ALL VALVULAR DISEASE: IE Prophylaxis (amoxicillin 2g PO 30-60 min before dental procedures) for: prosthetic valves, prior IE, unrepaired/incompletely repaired CHD, cardiac transplant with valvulopathy`,
    monitoring: `• Serial TTE surveillance (frequency based on severity and lesion type):
  - Severe asymptomatic AS: TTE every 1 year; exercise testing if uncertain symptom status
  - Moderate AS: TTE every 1-2 years; Mild AS: every 3-5 years
  - Severe AR: TTE every 6-12 months (monitor LV dimensions)
  - Severe MR: TTE every 6-12 months (monitor LVEF and LVESD — surgical thresholds)
• Anticoagulation monitoring: INR 2-3 weekly/monthly for mechanical valves; switch to DOAC only approved for specific indications
• Post-procedural: TTE at 30 days (TAVR/SAVR) then annually; echo before discharge after PMBC
• Symptom assessment every visit: new dyspnea, angina, or syncope → repeat TTE and reconsider intervention`,
    disposition: `• Structural cardiology referral: all severe valvular lesions, symptomatic moderate lesions, prosthetic valve dysfunction
• Cardiac surgery consult: surgical candidates for SAVR/MVR; acute MR or AR with hemodynamic instability
• Cardiogenic shock (acute AR or acute MR): ICU, emergent surgical consult, IABP/MCS consideration
• IE prophylaxis education: document in chart for all patients with prosthetic valves or prior IE
• TR surgical indications: (1) severe TR undergoing left-sided valve surgery; (2) symptomatic primary severe TR; (3) progressive RV dilation/dysfunction`
  },

  {
    id: "rv-failure",
    system: "cv",
    title: "Right Ventricular Failure",
    keywords: ["RV failure","right ventricular failure","right heart failure","RV dysfunction","pulmonary hypertension","cor pulmonale","RV infarct","tricuspid regurgitation","RV strain","JVD","Kussmaul sign","elevated JVP"],
    source: {
      chapter: "Cardiology",
      section: "Right Ventricular Failure",
      pages: "25",
      authors: "Frederick Lang",
      keyFacts: [
        "RV is preload-dependent but intolerant of fluid overload — excess IVF → RV distension + D-sign (septal shift) → LV underfilling",
      "Norepinephrine: first-line for RV cardiogenic shock — maintains SVR and RV coronary perfusion pressure",
      "RV MI (V4R): ST elevation in V4R Sn 88%, Sp 78% — obtain right-sided leads in ALL inferior STEMIs; AVOID nitrates, diuretics, morphine in RV MI",
      "PAPi (PA pulsatility index) = (PASP - PADP) / RAP — PAPi <0.9 indicates severe RV dysfunction (PA catheter measurement)",
      "iNO (inhaled nitric oxide): selective pulmonary vasodilator — reduces PVR without systemic hypotension; 20-80 ppm; use in post-cardiac surgery RV failure or severe PAH"
      ]
    },
    assessment: `#Right Ventricular (RV) Failure
RV failure: inability of the RV to maintain adequate preload for LV filling without developing elevated right-sided filling pressures.
Suspected etiology:
[ ] Pressure overload: pulmonary HTN (Group 1-5), massive PE, ARDS, LVOT obstruction
[ ] Volume overload: severe TR, large L→R shunt (ASD, VSD), severe PR
[ ] Loss of contractility: RV MI (inferior/posterior STEMI — RCA), myocarditis, RV CM
[ ] RV pacing-induced dysfunction
[ ] Post-cardiac surgery (RV stunning after CPB, post-LVAD)
Clinical findings: JVP elevated [ ] / Kussmaul sign (JVP rises with inspiration) [ ] / RV heave [ ] / Loud P2 [ ] / TR murmur [ ] / Peripheral edema / hepatomegaly / ascites [ ]
Hemodynamic profile: BP ___ HR ___ MAP ___  (cardiogenic shock criteria if MAP <65 despite adequate preload)`,
    ddx: `ACUTE RV FAILURE:
• Massive or submassive PE: acute RV pressure overload → RV dilation, D-sign on TTE, McConnell sign, RV:LV ratio >1
• RV MI: inferior MI extending to RV (RCA) — presents with hypotension, JVD, clear lungs, ST elevation in right-sided leads (V4R)
• Post-cardiac surgery (post-CPB): RV stunning, global RV dysfunction
• ARDS with severe hypoxia/hypercapnia: pulmonary vasoconstriction → RV afterload
• Tension pneumothorax, cardiac tamponade: obstructive cause of RV failure (mechanical compression)

CHRONIC RV FAILURE:
• Pulmonary arterial hypertension (PAH — WHO Group 1): idiopathic, connective tissue disease (scleroderma), congenital heart disease
• Left-sided HF (WHO Group 2): most common cause of pulmonary HTN; LV filling pressure elevation → passive pulmonary HTN → RV failure
• Chronic pulmonary disease (WHO Group 3): COPD, ILD — chronic hypoxic vasoconstriction
• CTEPH — Chronic thromboembolic PH (WHO Group 4): recurrent PE leading to organized thrombus
• Severe TR: functional RV volume overload`,
    workup: `• 12-lead ECG: right axis deviation, new RBBB, S1Q3T3 (PE), RV strain (TWI V1-V4), inferior ST elevation with right-sided involvement
• Right-sided ECG leads (V4R-V6R): ST elevation in V4R = RV MI (Sn 88%, Sp 78%) — ALWAYS perform in inferior STEMI
• TTE: RV size and function, IVC plethora, estimated PASP, TR severity, D-sign (interventricular septal flattening in diastole), McConnell sign (PE), pericardial effusion
• BNP/NT-proBNP: elevated in RV failure; serial measurements for prognosis
• Troponin: RV myocardial injury
• CT-PA: massive/submassive PE evaluation; assesses RV:LV ratio (>1 = RV strain)
• Pulmonary function tests: if chronic lung disease suspected
• Right heart catheterization (Swan-Ganz): definitive hemodynamic assessment; mPAP, PCWP, CO, PVR
  - PVR >3 Wood units + mPAP >20 mmHg = pulmonary hypertension
  - PCWP >15 mmHg suggests left-sided etiology (Group 2 PH)
  - Consider in undifferentiated shock, unclear RV vs. LV failure, MCS planning`,
    management: `GENERAL PRINCIPLES (all acute RV failure):
• RV is preload-dependent but NOT tolerant of fluid overload (excessive IVF worsens RV distension → interventricular septal shift → LV underfilling)
• Fluid challenge: cautious 250-500mL NS/LR if CVP <8; reassess after each bolus for JVP/hepatomegaly worsening
• Avoid RV afterload increases: correct hypoxia (O2 to SpO2 ≥92%), hypercapnia, acidosis, hypothermia (all increase PVR)
• Avoid positive pressure ventilation if possible: PPV increases RV afterload; if intubated, minimize PEEP and plateau pressures

VASOPRESSORS / INOTROPES (for RV cardiogenic shock, MAP <65):
• Norepinephrine: first-line vasopressor — maintains systemic vascular resistance (prevents RV ischemia from hypotension) → titrate to MAP ≥65 mmHg
• Vasopressin: add-on for refractory hypotension (0.03-0.04 U/min fixed dose); preferentially constricts systemic > pulmonary vasculature
• Dobutamine: add if RV contractility poor (low CO without severe hypotension); start 2.5-5 mcg/kg/min
• Milrinone: inodilator; reduces PVR and improves RV contractility; use cautiously with hypotension (can worsen)
• Inhaled nitric oxide (iNO): selective pulmonary vasodilator; reduces PVR without systemic hypotension; 20-80 ppm; use in post-cardiac surgery RV failure, severe PAH, RV MI shock
• Inhaled prostacyclins (epoprostenol, iloprost): alternative or add-on to iNO

RV MI (SPECIFIC):
• Volume loading: 1-2L NS cautiously (preload-dependent RV) if JVP not markedly elevated
• Avoid: nitrates, diuretics, morphine (preload-reducing agents worsen RV MI hypotension)
• Reperfusion: emergent PCI for culprit RCA lesion — most important intervention
• Temporary pacing: AV sequential pacing if high-degree AV block (atrial kick critical for RV MI)
• Norepinephrine: if hypotension persists after volume loading + PCI
• Mechanical support: IABP (improves coronary perfusion), right-sided Impella or ECMO in refractory cardiogenic shock

MASSIVE PE WITH RV FAILURE (see PE template):
• Systemic thrombolysis (alteplase 100mg over 2h) if hemodynamically unstable (SBP <90)
• Catheter-directed therapy or surgical embolectomy for salvageable patients with contraindications to lysis

CHRONIC PH / PAH:
• Pulmonary vasodilators (for WHO Group 1 only): phosphodiesterase-5 inhibitors (sildenafil), endothelin receptor antagonists (bosentan, ambrisentan), prostacyclin analogs (epoprostenol IV, treprostinil, iloprost inhaled)
• Diuresis for volume overload: furosemide + spironolactone
• Pulmonology/PH specialist consult for all confirmed PAH`,
    monitoring: `• Daily weights and strict I&Os (goal volume neutral to negative in chronic RV failure with congestion)
• CVP monitoring: if PA line in place; target 8-12 mmHg in acute RV failure; avoid >15 mmHg (worsens LV filling)
• Telemetry: arrhythmias worsen RV function (AF → loss of atrial kick; maintain SR)
• Echo: repeat TTE at 24-72h to assess RV response to therapy
• Troponin trend: ongoing myocardial injury
• Mixed venous O2 saturation (ScvO2 or MvO2): target >65% (low = poor RV output)
• For iNO use: methemoglobin level every 4-6h (keep <5%)`,
    disposition: `• ICU/CCU: RV cardiogenic shock (MAP <65 + vasopressors), massive PE with RV failure, RV MI with hemodynamic compromise, post-cardiac surgery RV dysfunction
• Cardiology consult: all acute RV failure, RV MI (PCI candidacy), PA catheter placement
• Pulmonary HTN specialist consult: suspected Group 1 PAH (IPAH, CTD-associated, drug-induced)
• Cardiothoracic surgery: refractory RV failure requiring mechanical support (Impella RP, VA-ECMO, BiVAD), post-CPB RV failure`
  },

  {
    id: "pad-acute-limb-ischemia",
    system: "cv",
    title: "Peripheral Artery Disease / Acute Limb Ischemia",
    keywords: ["PAD","peripheral artery disease","claudication","acute limb ischemia","ALI","ABI","ankle brachial index","rest pain","vascular surgery","ischemic ulcer","limb ischemia","arterial occlusion","6 Ps"],
    source: {
      chapter: "Cardiology",
      section: "Peripheral Artery Disease",
      pages: "36",
      authors: "Daniel Restifo",
      keyFacts: [
        "ABI ≤0.9: diagnostic for PAD (95% Sn, 100% Sp for ≥50% stenosis); ABI ≥1.40 = noncompressible (calcified, DM/ESRD) — use toe-brachial index",
      "ALI Category III (irreversible): inaudible arterial + venous Doppler, complete motor/sensory loss — amputation only, do NOT attempt reperfusion (fatal hyperK + myoglobinuria)",
      "Cilostazol 100mg BID: only AHA/ACC-recommended med for claudication exercise capacity; CONTRAINDICATED in HF",
      "Rivaroxaban 2.5mg BID + ASA: reduces major adverse cardiac AND limb events vs. ASA alone (COMPASS trial — symptomatic PAD or post-revascularization)",
      "Supervised exercise therapy: as effective as stenting for claudication (CLEVER-RCT) — prescribe before revascularization for claudication"
      ]
    },
    assessment: `#Peripheral Artery Disease (PAD) / Acute Limb Ischemia
Presentation: [ ] Asymptomatic (incidental ABI finding)  [ ] Claudication  [ ] Rest pain  [ ] Non-healing ulcer/gangrene  [ ] Acute limb ischemia
Onset: [ ] Chronic (PAD)  [ ] ACUTE (<2 weeks) — VASCULAR SURGERY CONSULT STAT if acute
ABI (ankle-brachial index): ___ [Normal 1.00-1.40 / Borderline 0.91-0.99 / Mild-moderate PAD 0.41-0.90 / Severe PAD 0-0.40 / Non-compressible ≥1.40 (DM/ESRD — use toe-brachial index)]
Rutherford Classification: [ ] 0 (asymptomatic)  [ ] 1-3 (claudication mild/mod/severe)  [ ] 4 (rest pain)  [ ] 5 (minor tissue loss)  [ ] 6 (major tissue loss)
Acute Limb Ischemia 6 P's: Pain [ ] / Pallor [ ] / Pulselessness [ ] / Paresthesia [ ] / Paralysis [ ] / Poikilothermia [ ]
Category: [ ] I Viable  [ ] IIa Marginally threatened  [ ] IIb Immediately threatened  [ ] III Irreversible`,
    ddx: `CHRONIC PAD:
• Atherosclerotic PAD: most common; risk factors: smoking (strongest), DM, HTN, hyperlipidemia, male sex, age, CKD
• Pseudo-claudication (neurogenic): lumbar spinal stenosis; worse with standing/walking downhill, relieved by sitting/leaning forward
• Popliteal artery entrapment: young athletes; exertional calf pain; abnormal ABI with plantar flexion
• Buerger's disease (thromboangiitis obliterans): young male heavy smokers, distal vessel disease, no proximal atherosclerosis

ACUTE LIMB ISCHEMIA (ALI):
• Arterial embolism (most common): AF > endocarditis > aortic aneurysm/plaque → sudden abrupt occlusion, no collaterals, more severe ischemia
• Arterial thrombosis in situ: atherosclerotic plaque rupture or progression; some collaterals present
• Paradoxical embolism: via PFO/ASD in setting of DVT/PE
• Aortic dissection: extending into iliac/femoral arteries → acute limb ischemia as initial presentation
• Peripheral arterial aneurysm thrombosis: popliteal > femoral
• Iatrogenic: post-cardiac catheterization arterial injury, arterial line thrombosis`,
    workup: `CHRONIC PAD:
• ABI with PVR (pulse volume recordings): ABI ≤0.9 = PAD (95% Sn, 100% Sp for ≥50% stenosis); ABI ≥1.40 = non-compressible → toe-brachial index
• Segmental pressures: localize disease (aortoiliac vs. femoropopliteal vs. tibial)
• Exercise ABI: if resting ABI normal but high clinical suspicion for PAD
• Duplex ultrasound: non-invasive; assess stenosis severity and hemodynamic significance
• CTA with runoff / MRA: anatomic mapping before revascularization planning
• Angiography: gold standard before endovascular or surgical intervention

ACUTE LIMB ISCHEMIA:
• Pulse exam with Doppler (Doppler signal present/absent)
• STAT CTA with runoff: if patient stable; shows level of occlusion and collateral flow
• ECG + cardiac monitoring: identify AF as embolic source
• Echocardiogram: cardiac source of embolism (LV thrombus, vegetation, LA thrombus)
• Labs: CBC, BMP, coagulation, T&S, lactate, CK (rhabdomyolysis post-reperfusion)
• Hypercoagulability workup: if thrombosis with no clear etiology (defer to outpatient if possible)`,
    management: `CHRONIC PAD:
• CV risk factor modification: smoking cessation (most important), DM control, statin therapy (high-intensity, regardless of LDL), HTN control
• Supervised exercise therapy: FIRST-LINE for claudication (CLEVER-RCT: as effective as stenting for walking distance)
• Antiplatelet therapy: ASA 75-162mg OR clopidogrel 75mg daily for secondary prevention (symptomatic PAD)
• Rivaroxaban 2.5mg BID + ASA: reduces major adverse cardiac and limb events vs. ASA alone if symptomatic or post-revascularization
• Cilostazol 100mg BID: PDE3 inhibitor; improves claudication symptoms; CONTRAINDICATED in HF; adjunct after exercise + smoking cessation
• Revascularization (endovascular or surgical): for chronic limb-threatening ischemia (CLTI), severe claudication refractory to medical/exercise therapy, or threatened limb
• Wound care: pressure offloading, debridement, vascular assessment for healing potential

ACUTE LIMB ISCHEMIA (SURGICAL EMERGENCY — category I or II):
• STAT vascular surgery and vascular medicine consult
• IV heparin UFH anticoagulation: 80 U/kg bolus → 18 U/kg/h infusion IMMEDIATELY to prevent clot propagation
• Category I (viable): CTA to map anatomy → elective endovascular or surgical revascularization
• Category II (threatened): emergent endovascular (catheter-directed thrombolysis or mechanical thrombectomy) OR surgical thromboembolectomy (Fogarty catheter)
• Category III (irreversible — no Doppler signal, complete motor/sensory loss): amputation; DO NOT attempt reperfusion (reperfusion of irreversible ischemia → hyperkalemia, acidosis, myoglobinuria, renal failure, fatal)
• Post-reperfusion monitoring: compartment syndrome (fasciotomy if needed), hyperkalemia, metabolic acidosis, rhabdomyolysis, AKI`,
    monitoring: `• Serial pulse exams and Doppler every 1-2h in acute limb ischemia (color, temperature, capillary refill, Doppler signal)
• Compartment pressure monitoring after revascularization: pain with passive stretch, tense compartment → fasciotomy
• CK, K+, BMP every 6-12h post-reperfusion (rhabdomyolysis, hyperkalemia risk)
• Urine output (Foley catheter): myoglobinuria → aggressive hydration target UOP >1 mL/kg/h
• Telemetry post-acute event: identify AF or cardiac arrhythmia as embolic source
• ABI post-procedure at 30 days (assess revascularization success)`,
    disposition: `• STAT vascular surgery consult: all acute limb ischemia — do not delay
• ICU/step-down: ALI post-revascularization (compartment syndrome risk, rhabdomyolysis monitoring, hemodynamic monitoring)
• Vascular medicine outpatient: chronic PAD management, supervised exercise program enrollment, medical optimization
• Cardiology consult: new-onset AF as embolic source, echocardiogram for cardiac source
• Wound care/podiatry: chronic limb-threatening ischemia with tissue loss`
  },

];

// ─── DDX SYSTEM PROMPT ─────────────────────────────────────────────────────
const DDX_SYSTEM_PROMPT = `You are a senior Internal Medicine physician and clinical reasoning expert at an academic medical center. Your role is to help residents systematically work through a differential diagnosis based on a clinical presentation.

A resident will provide you with a clinical vignette — this may include chief complaint, HPI, vitals, exam findings, or preliminary labs. Your job is to generate a structured, ranked differential diagnosis.

IMPORTANT RULES:
1. Return ONLY valid JSON — no markdown, no explanation outside the JSON structure.
2. Rank diagnoses from most likely to least likely based on the clinical presentation provided.
3. For each diagnosis, indicate urgency: "critical" (cannot miss, life-threatening), "high" (time-sensitive, needs urgent workup), "moderate" (important but not immediately life-threatening), or "low" (less urgent, outpatient consideration).
4. Keep reasoning concise — 1-2 sentences per diagnosis explaining why it fits this specific presentation.
5. List 2-4 key clinical features from the presentation that support each diagnosis.
6. Map to a template ID from this list when applicable: cap, copd-exac, hf-exac, afib-rvr, acs, syncope, sepsis, pe, shock, ugib, aki, hyponatremia, hyperkalemia, dka, ssti, ams, etoh-withdrawal. If no matching template exists, use null.
7. Generate 4-7 diagnoses depending on complexity of the presentation.
8. Start with a brief 1-sentence clinical summary of the presentation.

Return this exact JSON structure:
{
  "summary": "Brief 1-sentence synthesis of the clinical presentation",
  "diagnoses": [
    {
      "rank": 1,
      "title": "Diagnosis Name",
      "urgency": "critical | high | moderate | low",
      "reasoning": "Why this fits the presentation in 1-2 sentences.",
      "supporting_features": ["feature 1", "feature 2", "feature 3"],
      "template_id": "template-id or null"
    }
  ]
}`;

// ─── EXAMPLE PROMPTS ───────────────────────────────────────────────────────
const EXAMPLE_PROMPTS = [
  "72F with HTN and DM presents with 3 days of worsening dyspnea, orthopnea, and bilateral leg swelling. O2 sat 88% on RA. HR 110, BP 165/90. Crackles bilateral bases. JVP elevated. BNP 2800.",
  "58M with heavy alcohol use presents with tremors, diaphoresis, and agitation 18h after last drink. HR 122, BP 158/96, T 37.9. Oriented to person only. Last CIWA score 18.",
  "34F with hx of oral contraceptive use presents with 2 days of left leg swelling and pleuritic chest pain. HR 108, O2 sat 94% on RA. D-dimer 3.2. S1Q3T3 on EKG.",
  "66M with CKD3 presents with weakness and palpitations. K+ 6.8. EKG shows peaked T-waves and widened QRS. BP 138/82.",
  "45F with Type 1 DM presents with 2 days of nausea, vomiting, and polyuria. BG 380, pH 7.18, bicarb 10, AG 24. Recent URI treated with steroids.",
  "80M with dementia presents from nursing home with acute confusion, fever of 38.9, and foul-smelling urine. BP 88/52. HR 118. WBC 18k. Cr 2.4 (baseline 1.1).",
  "52M with known cirrhosis presents with hematemesis and lightheadedness. BP 90/55, HR 128. Hgb 7.2. History of prior variceal bleed.",

  // ════════════════════ CARDIOLOGY — NEW TEMPLATES ════════════════════

  {
    id: "cardiac-arrest-ttm",
    system: "cv",
    title: "Cardiac Arrest / Post-ROSC / TTM",
    keywords: ["cardiac arrest","ACLS","ROSC","CPR","VF","VT","PEA","asystole","targeted temperature management","TTM","ECMO CPR","post-arrest","OHCA","code blue"],
    source: { chapter: "Cardiology", section: "ACLS: Cardiac Arrest & TTM", pages: "1–2", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "H&Ts: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia — Tension PTX, Tamponade, Toxins, Thrombosis (PE/coronary)",
        "VF/pulseless VT: defibrillate immediately (biphasic 120-200J); Epi 1mg q3-5min; amiodarone 300mg → 150mg or lidocaine 1-1.5mg/kg → 0.5-0.75mg/kg",
        "Post-ROSC: MAP >65 (NEJM 2022;387:1456), target normoxia (SpO2 92-98%), normocapnia (PaCO2 35-45), TTM 36-37.5°C x24h, avoid fever x72h",
        "TTM: Class I recommendation for all patients not following commands post-arrest (AHA 2023); goal is to avoid fever ≥37.5°C for 72h",
        "ECPR (ECMO CPR): consider if no ROSC within 5 min, EtCO2 >10 mmHg, age <75, BMI ≤45 — page ECMO team <10 min from code initiation"
      ]
    },
    assessment: `#Cardiac Arrest / Post-ROSC
Presenting rhythm: [ ] VF  [ ] Pulseless VT  [ ] PEA  [ ] Asystole
Witnessed: [ ] Yes  [ ] No  |  Bystander CPR: [ ] Yes  [ ] No
Time from arrest to CPR: *** min | Time to first shock (if shockable): *** min
ROSC achieved: [ ] Yes — time: ***  [ ] No — duration CPR so far: ***
Reversible causes identified (H&Ts): ***
Post-ROSC: MAP *** | SpO2 *** | EtCO2 *** | Following commands: [ ] Yes  [ ] No
TTM: [ ] Initiated  [ ] Target 36-37.5°C`,
    ddx: `REVERSIBLE CAUSES (H&Ts):
Hs: Hypovolemia (hemorrhage, dehydration), Hypoxia (airway/resp failure), Hydrogen ion (severe acidosis), Hypokalemia/Hyperkalemia, Hypothermia
Ts: Tension pneumothorax (needle decompression), Tamponade (emergent pericardiocentesis), Toxins (tox screen, antidotes), Thrombosis PE (TNK 50mg IV), Thrombosis coronary (STEMI → cath lab)

SHOCKABLE (VF/pVT): Cardiac: ischemia/STEMI, cardiomyopathy, channelopathy (Long QT, Brugada, CPVT), HOCM
NON-SHOCKABLE (PEA/Asystole): Massive PE, tension PTX, cardiac tamponade, profound acidosis, hyperkalemia, drug OD`,
    workup: `• 12-lead EKG immediately post-ROSC: STEMI or new LBBB → activate cath lab regardless of neurologic status
• ABG: PaCO2 target 35-45 (normocapnia), PaO2 target 80-100 mmHg (avoid hyperoxia)
• BMP: K+ (correct to 4-4.5 mEq/L), glucose (target 140-180 mg/dL — avoid hypo/hyperglycemia)
• Troponin, BNP, CBC, coagulation, lactate (trend for perfusion)
• CXR: ETT position, PTX, pulmonary edema, rib fractures from CPR
• CT head: if traumatic arrest, focal neuro findings post-ROSC, or prior to withdrawal discussion
• POCUS (bedside echo): RV dilation (PE), pericardial effusion, wall motion abnormality (ischemia), global hypokinesis
• EEG: if not following commands at 24-48h post-arrest — detect non-convulsive seizures`,
    management: `DURING ARREST (per ACLS):
• Continuous high-quality CPR: 2-2.4 inch depth, 100-120 BPM, minimize interruptions, full recoil
• VF/pVT → defibrillate immediately: biphasic 120-200J (MGH: Zoll R Series)
• Epinephrine 1mg IV q3-5min (immediately in PEA/asystole; after 2nd shock in VF/pVT)
• Amiodarone (2nd/3rd shock in VF): 300mg IV → 150mg IV; OR lidocaine 1-1.5mg/kg → 0.5-0.75mg/kg
• MgSO4 2g IV: for TdP / suspected hypomagnesemia
• Tenecteplase (TNK) if massive PE suspected: 50mg IV push x1 → CPR ≥15 more minutes

POST-ROSC STABILIZATION:
• Hemodynamics: MAP ≥65 mmHg (vasopressors: NE or epi; avoid dopamine as vasopressor of choice post-arrest)
• Oxygenation: titrate FiO2 to SpO2 92-98% (avoid hyperoxia); PEEP 5-8 cmH2O
• Ventilation: normocapnia (PaCO2 35-45 mmHg); VT 6 mL/kg IBW
• Glucose: target 140-180 mg/dL (avoid hypoglycemia <80)
• Electrolytes: K+ 4-4.5, Mg 2-2.5; correct aggressively
• Seizure management: EEG monitoring; levetiracetam if seizure activity

TARGETED TEMPERATURE MANAGEMENT (TTM):
• Initiate if not following commands post-arrest (AHA 2023 Class I)
• Target: 36-37.5°C x24h (avoid fever ≥37.5°C for ≥72h)
• Active fever prevention: cooling blankets, ice packs, intravascular devices
• Antipyretics: acetaminophen 1g q6h scheduled x72h

CORONARY ANGIOGRAPHY:
• STEMI post-arrest: emergent PCI regardless of neuro status
• No STEMI: individualize; consider coronary angiography if high suspicion for ischemic cause`,
    monitoring: `• Continuous telemetry, SpO2, EtCO2 (target 35-45 during CPR/post-ROSC)
• Core temperature monitoring (bladder or esophageal probe) during TTM
• Glucose every 1-2h; BMP every 6h
• ABG every 4-6h
• Neuro exam every 4-8h post-ROSC; SSEP, EEG, brain MRI at 72-96h for neuroprognostication`,
    disposition: `• ICU: all post-ROSC patients — hemodynamic and neurological monitoring
• Cardiology/Interventional cardiology: STEMI post-arrest
• Neurology: neuroprognostication at 72-96h (EEG, SSEP, clinical exam)
• ECMO team: if no ROSC within 5 min in eligible patients — page early (<10 min from code start)`
  },

  {
    id: "narrow-complex-svt",
    system: "cv",
    title: "Narrow Complex Tachycardia / SVT",
    keywords: ["SVT","narrow complex tachycardia","AVNRT","AVRT","adenosine","atrial tachycardia","MAT","junctional tachycardia","supraventricular","paroxysmal SVT","Wolff-Parkinson-White","WPW"],
    source: { chapter: "Cardiology", section: "Narrow Complex Tachycardia", pages: "8", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Narrow complex (<120ms) regular tachycardia: sinus tach, AVNRT (most common SVT), AVRT, atrial tachycardia, atrial flutter with regular block",
        "Adenosine 6mg rapid IV push + NS flush + arm raise → repeat 12mg x1: diagnostic (slows rate to reveal flutter waves or AT) and therapeutic (terminates AVNRT/AVRT)",
        "Modified Valsalva: semi-recumbent → forceful blow into 10cc syringe x10-15s → supine + passive leg raise 45° for 15s — 43% effective (vs 17% standard Valsalva)",
        "WPW + AFib: NEVER give adenosine, digoxin, CCBs, or BBs (increase conduction through accessory pathway → VF) — use procainamide or electrical cardioversion",
        "Irregular narrow complex: AFib (most common), MAT (≥3 distinct P waves, seen in COPD), AFib + WPW (irregular wide complex with delta waves)"
      ]
    },
    assessment: `#Narrow Complex Tachycardia / SVT
HR: *** | QRS width: *** ms (narrow <120ms) | Regularity: [ ] Regular  [ ] Irregular
P waves: [ ] Visible before QRS  [ ] Hidden in QRS (AVNRT)  [ ] After QRS (RP <PR)  [ ] None
Onset: [ ] Abrupt  [ ] Gradual
Hemodynamic stability: [ ] Stable  [ ] UNSTABLE (HoTN/AMS/ischemia → synchronized cardioversion)
Rhythm interpretation:
[ ] AVNRT (most common SVT — retrograde P hidden in/just after QRS, "pseudo-R" in V1)
[ ] AVRT (delta wave if orthodromic WPW)  [ ] Atrial tachycardia  [ ] Atrial flutter (regular, F waves ~300 bpm, 2:1/3:1/4:1 block)
[ ] MAT (irregular, ≥3 distinct P morphologies)  [ ] Sinus tachycardia (gradual onset, P before QRS)`,
    ddx: `NARROW REGULAR:
• Sinus tachycardia: gradual onset/offset; identifiable cause (pain, fever, hypovolemia, anemia, PE, anxiety)
• AVNRT (most common SVT): retrograde P buried in or just after QRS; paroxysmal; pseudo-R' in V1, pseudo-S in II/III/aVF
• AVRT (orthodromic): retrograde P after QRS (RP interval short); WPW features may only appear after termination
• Atrial tachycardia: P before QRS but abnormal morphology; often persistent; consider structural heart disease
• Atrial flutter: "sawtooth" F waves in inferior leads at 300 bpm; regular 2:1 block = HR ~150 most common
NARROW IRREGULAR:
• AFib: no discrete P waves; irregularly irregular
• MAT: ≥3 distinct P wave morphologies; seen in COPD, pulmonary hypertension, elderly
• AFib/flutter with variable block
• Sinus tachycardia with frequent PACs`,
    workup: `• 12-lead EKG: look for P waves (before, hidden in, or after QRS), delta waves (WPW), flutter waves
• Rhythm strip: vagal maneuvers or adenosine will transiently slow rate — flutter waves or AT become visible
• BMP: K+, Mg2+ (electrolyte-triggered arrhythmias)
• TSH: hyperthyroidism as precipitant (especially AFib/SVT)
• Troponin: if ischemia suspected as precipitant
• TTE: structural heart disease, ventricular function, pre-excitation evaluation`,
    management: `UNSTABLE (HoTN <90 systolic / AMS / ischemic chest pain / acute HF):
• Synchronized cardioversion immediately: narrow regular 50-100J, narrow irregular 120-200J

STABLE:
Step 1 — VAGAL MANEUVERS (first-line, no risk):
• Modified Valsalva (most effective): semi-recumbent → blow into 10cc syringe x10-15s → flat + passive leg raise 45° x15s (43% conversion)
• Carotid sinus massage: unilateral, avoid if prior TIA/CVA/bruits
• Ice water face immersion (diving reflex)

Step 2 — ADENOSINE (if vagal fails; AVNRT/AVRT):
• 6mg rapid IV push (peripheral) with NS flush + arm raise → 12mg x1 if fails; reduce dose 50% if central line
• WARNING: avoid in WPW + wide irregular tachycardia (→ VF), severe asthma, heart transplant (relative CI)
• Effects: transient AV block → converts AVNRT/AVRT; reveals atrial flutter/AT if no conversion

Step 3 — AV NODAL BLOCKERS (rate control or cardioversion):
• Diltiazem 0.25mg/kg IV (≤25mg) over 2 min → infusion 5-15mg/h (avoid if LVEF unknown/low)
• Metoprolol 2.5-5mg IV over 2 min, repeat q5 min up to 15mg
• Avoid CCBs/BBs: WPW + pre-excited AFib (→ VF); pre-excited AFib → procainamide or cardioversion

SPECIFIC:
• MAT: treat underlying cause (COPD exacerbation, hypomagnesemia, hypokalemia); magnesium 2g IV; rate control with diltiazem or metoprolol
• WPW + AFib: procainamide 15-17mg/kg IV OR electrical cardioversion; electrophysiology consult for ablation
• Persistent SVT: consider electrophysiology consult for ablation (highly effective, low risk)`,
    monitoring: `• Continuous telemetry during treatment; document rhythm before and after each intervention
• BP every 5-10 min during IV antiarrhythmic administration
• 12-lead EKG after conversion: document baseline rhythm, look for delta waves (WPW), PR/QTc`,
    disposition: `• ICU/telemetry: hemodynamic instability, first episode requiring IV antiarrhythmics, WPW
• Cardiology/Electrophysiology: WPW, recurrent SVT (ablation candidate), unexplained SVT, structural heart disease
• Outpatient: recurrent AVNRT/AVRT after successful conversion — PO flecainide, propafenone, beta-blocker, or diltiazem for suppression; consider ablation referral`
  },

  {
    id: "defibrillation-cardioversion-pacing",
    system: "cv",
    title: "Defibrillation / Cardioversion / Pacing",
    keywords: ["defibrillation","cardioversion","synchronized cardioversion","transcutaneous pacing","DCCV","external pacing","Zoll","cardiovert","shock","temporary pacing wire","transvenous pacing"],
    source: { chapter: "Cardiology", section: "ACLS: Defibrillation/Cardioversion/Pacing", pages: "5", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Synchronized cardioversion: narrow regular 50-100J, narrow irregular 120-200J, wide regular 100J, wide irregular (VF/pVT) → DEFIBRILLATE 120-200J",
        "Defibrillation (UNSYNCHRONIZED): VF, pulseless VT, wide irregular (polymorphic VT/TdP) — always deliver maximum energy for VF",
        "Preprocedure sedation/analgesia: hydromorphone 1-2mg IV + lorazepam 2mg IV (or propofol if anesthesia available)",
        "Transcutaneous pacing: demand mode, rate 60-80 BPM, increase mA until electrical capture then add 10mA; confirm mechanical capture (pulse, BP, pleth)",
        "Transvenous pacing (TVP): gold standard for symptomatic high-degree AV block not responding to atropine — place via central venous access (IJ preferred)"
      ]
    },
    assessment: `#Indication for Cardioversion / Defibrillation / Pacing
CARDIOVERSION/DEFIBRILLATION:
Rhythm: *** | HR: *** | Hemodynamic status: [ ] Stable  [ ] Unstable
Unstable features: [ ] Hypotension  [ ] AMS  [ ] Ischemic chest pain  [ ] Acute pulmonary edema
Type: [ ] Synchronized cardioversion (unstable tachyarrhythmia with pulse)
      [ ] Defibrillation (VF, pulseless VT, wide irregular polymorphic VT)
PACING:
[ ] Transcutaneous (temporary — symptomatic bradycardia/AV block unresponsive to atropine)
[ ] Transvenous (TVP — persistent symptomatic bradycardia, high-degree AV block)
Last meal: *** | INR: *** | Known LA thrombus: [ ] Yes (TEE recommended before cardioversion if AFib >48h without anticoagulation)`,
    ddx: `INDICATIONS FOR CARDIOVERSION (unstable):
• AFib/flutter with RVR + hemodynamic compromise
• SVT (AVNRT/AVRT) not converting with medications
• VT with pulse (monomorphic — synchronized; polymorphic — defibrillate)

INDICATIONS FOR DEFIBRILLATION (unsynchronized):
• VF (ventricular fibrillation) — most time-sensitive
• Pulseless VT
• Wide irregular (polymorphic VT/TdP) — do NOT synchronize; cannot reliably identify R wave

INDICATIONS FOR PACING:
• Symptomatic bradycardia (sinus or junctional bradycardia unresponsive to atropine)
• High-degree AV block (Mobitz II or CHB) with hemodynamic compromise
• Post-cardiac arrest: PEA with high-degree AV block
• After transcutaneous pacing: bridge to transvenous pacing`,
    workup: `• 12-lead EKG: confirm rhythm before cardioversion/defibrillation
• TEE or ≥3 weeks of anticoagulation before elective cardioversion of AFib (if duration unknown or >48h)
• BMP: K+, Mg (correct before elective cardioversion — electrolyte imbalance increases arrhythmia recurrence)
• Digoxin level: if on digoxin (cardioversion contraindicated if toxic — risk of VF)
• Thyroid function: if elective cardioversion of new AFib`,
    management: `SYNCHRONIZED CARDIOVERSION (unstable tachycardia with pulse):
• Sedate: hydromorphone 1-2mg IV + lorazepam 2mg IV (or propofol if anesthesia available); have airway backup
• Apply pads: anterior (right clavicle/sternum) + lateral (left lower chest/apex) OR anterior-posterior
• Select SYNC mode (confirm "SYNC" marker on screen before delivery)
• Dose: narrow & regular → 50-100J; narrow & irregular (AFib) → 120-200J; wide & regular → 100J
• Charge and deliver: announce "clear" and ensure no contact
• Re-evaluate rhythm; repeat with escalating energy if needed

DEFIBRILLATION (VF, pulseless VT, wide irregular):
• UNSYNCHRONIZED mode (do NOT use Sync for VF — may not detect R wave → no shock)
• Energy: biphasic 120-200J (MGH: Zoll default setting) or maximum if waveform unknown
• Minimize CPR interruption: pre-charge while doing compressions; deliver shock within 5 seconds of stopping CPR
• After shock: immediately resume CPR x2 min before rhythm check

TRANSCUTANEOUS PACING (emergent bradycardia/AV block):
• Apply pads (same positions as defibrillation); select PACER mode
• Rate: 60-80 BPM (demand mode); slowly increase mA from 40mA until electrical capture (pacer spike with QRS)
• Confirm mechanical capture: femoral pulse, arterial line waveform, plethysmography
• Analgesia: IV fentanyl + midazolam (pacing is painful — burning/skeletal muscle contraction)

TRANSVENOUS PACING (TVP):
• IJ approach preferred; fluoroscopy or POCUS guidance
• Balloon-tipped catheter advanced to RV apex; threshold testing: rate 60, mA down until loss of capture (threshold); set at 2x threshold
• Verify position on CXR; LBBB morphology confirms RV pacing`,
    monitoring: `• Continuous telemetry during and after procedure
• BP every 5 min post-cardioversion; confirm sinus rhythm on 12-lead EKG
• Transcutaneous pacing: arterial line or palpate pulse to confirm mechanical capture every 30-60 min
• TVP: CXR to confirm position; daily threshold testing; assess for complications (PTX, cardiac perforation)`,
    disposition: `• ICU: all emergent cardioversion/defibrillation, TVP placement
• Cardiology EP consult: TVP placement, recurrent arrhythmia requiring device therapy, permanent pacemaker evaluation
• Anesthesia: elective DCCV requiring deep sedation in high-risk patients`
  },

  {
    id: "ekg-interpretation",
    system: "cv",
    title: "EKG Interpretation",
    keywords: ["EKG","ECG","electrocardiogram","ST elevation","ST depression","LBBB","RBBB","QRS axis","bundle branch block","STEMI","ischemia","LVH","Sgarbossa","PR interval","QTc","AV block"],
    source: { chapter: "Cardiology", section: "EKG Interpretation", pages: "6–7", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Systematic approach: Rate → Rhythm → Axis → Intervals (PR, QRS, QTc) → Complexes (P/Q/R/S/T) → Chambers → Ischemia/Infarction — compare to prior",
        "STEMI criteria: ST elevation ≥2mm in ≥2 contiguous leads (precordial) or ≥1mm in ≥2 limb leads; Sgarbossa criteria for STEMI in LBBB (concordant ST↑ ≥1mm, concordant ST↓ ≥1mm V1-V3, or discordant ST↑ >25% of preceding S wave)",
        "LBBB: broad notched R in I/aVL/V5-V6 + QS or rS in V1; QRS ≥120ms — new LBBB in ACS treated as STEMI equivalent",
        "RBBB: RSR' ('rabbit ears') in V1-V2 + broad S in I/V5-V6; QRS ≥120ms — can be normal variant",
        "AV blocks: first degree (PR >200ms); Mobitz I/Wenckebach (PR progressively prolongs then dropped QRS — usually benign); Mobitz II (sudden dropped QRS — indicates infranodal block — more dangerous); CHB (P-QRS dissociation)"
      ]
    },
    assessment: `#EKG Interpretation — Systematic Analysis
Rate: *** bpm (regular: 300/large boxes; irregular: count x6)
Rhythm: [ ] Sinus  [ ] Non-sinus: ***  |  Regular [ ]  Irregular [ ]
Axis: [ ] Normal (−30 to +90°)  [ ] LAD  [ ] RAD  [ ] Extreme
PR interval: *** ms (normal <200ms) | QRS: *** ms (normal <120ms) | QTc: *** ms (normal ♂ <440, ♀ <460)
P waves: [ ] Normal morphology  [ ] Absent  [ ] Abnormal: ***
QRS: [ ] Narrow  [ ] RBBB (RSR' V1, wide S in I/V6)  [ ] LBBB (broad R in I/V6, QS in V1)  [ ] LVH  [ ] Delta waves
ST-T: [ ] Normal  [ ] ST↑ ***  [ ] ST↓ ***  [ ] T inversions ***  [ ] STEMI pattern
Ischemia territory: [ ] Anterior (V1-V4 / LAD)  [ ] Inferior (II/III/aVF / RCA)  [ ] Lateral (I/aVL/V5-V6 / LCx)  [ ] Posterior (V7-V9; ST↓V1-V3)`,
    ddx: `ST ELEVATION DDx (not all ST↑ = STEMI):
• STEMI: acute coronary occlusion; ST↑ in contiguous leads; reciprocal ST↓ in opposite leads
• LBBB (new): Sgarbossa criteria — treat as STEMI equivalent if criteria met
• Benign early repolarization: young males; J-point elevation; concave ST elevation; no reciprocal changes
• Pericarditis: diffuse ST elevation (saddle-shaped), PR depression, no reciprocal ST changes (except aVR)
• LVH with strain: ST depression/T-wave inversion in lateral leads (V5-V6, I, aVL) — do NOT give tPA
• Brugada: coved ST elevation V1-V2; risk of sudden death
• STEMI mimic: hyperkalemia (peaked T, then sine wave), Wellens' syndrome (deep T inversions V2-V3 — LAD stenosis), de Winter T waves (V1-V4 — LAD occlusion without ST↑)

AV BLOCK DDx:
• First degree: PR >200ms; benign; many causes (vagal tone, medications, infiltrative)
• Mobitz I (Wenckebach): progressive PR lengthening → dropped QRS; intranodal; benign; inferior MI
• Mobitz II: fixed PR with sudden dropped QRS; infranodal; can progress to CHB; requires pacing
• CHB (third degree): P waves dissociated from QRS; junctional or ventricular escape rhythm; pace`,
    workup: `• Compare to prior EKG (most important): new changes vs. chronic
• Clinical correlation: symptoms (chest pain, syncope, palpitations, dyspnea)
• Troponin: if ischemia pattern on EKG
• BMP: electrolyte abnormalities affecting EKG (hyperK, hypoK, hypoCa, hypoMg)
• TSH: if new AFib or SVT
• Drug levels (digoxin toxicity → bidirectional VT, scooping ST, AV block)`,
    management: `STEMI: activate cath lab immediately — goal door-to-balloon <90 min
STEMI EQUIVALENT (new LBBB or posterior STEMI): treat same as STEMI
UNSTABLE BRADYARRHYTHMIA:
• Atropine 0.5mg IV q3-5min up to 3mg: AV nodal block or sinus arrest
• Transcutaneous pacing: if refractory to atropine
• Transvenous pacing: Mobitz II or CHB — bridge to PPM
LONG QTc (>500ms or increase >60ms from baseline):
• Stop all QTc-prolonging drugs; replete K+ to 4.5 mEq/L and Mg to 2-2.5 mEq/L
• TdP management: Mg 2g IV over 5 min; overdrive pacing for recurrent TdP
WELLENS' SYNDROME (deep T inversions V2-V3):
• High-grade LAD stenosis — do NOT stress test; admit for cardiac catheterization`,
    monitoring: `• Serial EKGs every 15-30 min if active ischemia; every 6-12h in ACS
• Continuous telemetry: new LBBB, Mobitz II, CHB, long QTc, recurrent arrhythmias
• QTc monitoring: q8-12h after starting QTc-prolonging drugs; q8h if QTc >500ms`,
    disposition: `• Cath lab activation: STEMI, new LBBB meeting Sgarbossa criteria
• ICU/CCU: unstable arrhythmias, CHB with hemodynamic compromise, Wellens' syndrome (prior to cath)
• Cardiology consult: new LBBB/RBBB, high-degree AV block, Brugada pattern, Wellens', LVH with new changes`
  },

  {
    id: "chest-pain-approach",
    system: "cv",
    title: "Chest Pain — Approach and Risk Stratification",
    keywords: ["chest pain","angina","chest pain workup","ACS risk stratification","HEART score","TIMI score","GRACE score","troponin","CCTA","unstable angina","stable angina","non-cardiac chest pain","pleuritic chest pain"],
    source: { chapter: "Cardiology", section: "Chest Pain", pages: "13", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Classic angina triad: (1) substernal pressure/discomfort, (2) worse with exertion, (3) relieved by rest or nitrate — 'atypical' language no longer recommended by ACC/AHA",
        "High-risk features for ACS: radiation to bilateral arms (+LR 2.6), diaphoresis (+LR 1.4-2.0), prior ACS (+LR 2.2), 24h pattern change (+LR 2.0)",
        "High-sensitivity troponin (hs-cTn): initial + 1h or 0/3h algorithm allows rapid rule-out; undetectable + low clinical probability = 99% NPV for NSTEMI",
        "HEART score (History, EKG, Age, Risk Factors, Troponin): 0-3 = low risk; 4-6 = moderate; ≥7 = high risk — guides admission and early invasive strategy",
        "Antianginals: avoid nitrates if preload-sensitive (RV ischemia/infarction, HoTN, severe AS, recent PDEi use); BB careful in ADHF, long PR, 2°/3° AV block"
      ]
    },
    assessment: `#Chest Pain — Risk Stratification
Character: [ ] Pressure/squeezing  [ ] Sharp/pleuritic  [ ] Burning/positional  [ ] Tearing/ripping
Onset/Duration: *** | Radiation: [ ] Left arm  [ ] Both arms (+LR 2.6)  [ ] Jaw  [ ] Back
Worse with: [ ] Exertion  [ ] Deep breath  [ ] Palpation  [ ] Position  [ ] Swallowing
Relieved by: [ ] Nitrates/rest  [ ] Antacids  [ ] Position change
Associated: [ ] Diaphoresis  [ ] N/V  [ ] Dyspnea  [ ] Syncope
HEART Score: H ___/2 + E ___/2 + A ___/2 + R ___/2 + T ___/2 = ___ (0-3: low; 4-6: moderate; ≥7: high)
Troponin: hs-cTn T0: *** | T1h/T3h: *** | Pattern: [ ] Rising (NSTEMI)  [ ] Stable/falling (non-ischemic)  [ ] Undetectable (rule-out)`,
    ddx: `LIFE-THREATENING (must exclude promptly):
• ACS (STEMI/NSTEMI/UA): ischemic pattern, troponin rise, typical angina features, ST changes
• Aortic dissection: tearing/ripping, migratory, maximal at onset, pulse differential, wide mediastinum
• Pulmonary embolism: pleuritic, sudden onset, hypoxia, risk factors (immobility, malignancy, prior DVT)
• Tension pneumothorax: sudden, pleuritic, tracheal deviation, unilateral absent breath sounds
• Cardiac tamponade: positional, muffled heart sounds, Beck's triad, pulsus paradoxus >10mmHg

HIGH PRIORITY:
• ADHF (acute decompensated): dyspnea, orthopnea, S3, elevated BNP, bilateral crackles
• Pericarditis: sharp, pleuritic, positional (better leaning forward), friction rub, diffuse ST elevation
• Myocarditis: young, viral prodrome, chest pain + arrhythmias, elevated troponin, EF depression on TTE

OTHER:
• Esophageal spasm: responds to nitrates (mimics angina); relieved by antacids/PPI
• GERD: burning, postprandial, positional
• Musculoskeletal: reproducible on palpation, localized tenderness
• Pleuritis, pneumonia, pneumothorax: pleuritic pain with respiratory variation`,
    workup: `• EKG STAT (within 10 minutes of presentation): ST changes, LBBB, AV block, arrhythmia
• High-sensitivity troponin T (hs-cTnT): T0 and T1h (rapid 0/1h algorithm) or T0 and T3h
  - Rising ≥3 ng/L in 1h OR rising ≥5 ng/L in 3h = NSTEMI
  - Undetectable T0 + low probability = safe rule-out (NPV 99%)
• CXR: mediastinal widening (dissection), cardiomegaly, bilateral infiltrates (ADHF), PTX, rib fractures
• BMP, CBC, BNP/NT-proBNP, lipid panel (acute evaluation + secondary prevention planning)
• D-dimer (if Wells score low-intermediate for PE) or CTA PE (if Wells high)
• CTA chest/abdomen (if aortic dissection suspected): widened mediastinum, pulse differential, tearing pain
• Bedside echo (POCUS): wall motion abnormality (ischemia), pericardial effusion, RV strain (PE), LVEF`,
    management: `ACS (see ACS template for full management):
• ASA 325mg PO immediately; atorvastatin 80mg; anticoagulation (heparin gtt)
• STEMI → activate cath lab; NSTEMI → risk-stratify and plan early invasive vs. ischemia-guided
ANTIANGINAL (ongoing ischemia):
• Sublingual NTG 0.4mg q5min x3 → IV nitroglycerin gtt if refractory (avoid: RV MI, HoTN, AS, recent PDEi)
• Metoprolol tartrate 25-50mg PO (or 2.5-5mg IV): if HR elevated; avoid in ADHF/bradycardia/high-grade AV block
AORTIC DISSECTION: IV beta blockade (esmolol/labetalol) → CT surgery STAT — NO anticoagulation
PE: anticoagulation; thrombolytics if massive (see PE template)
NON-CARDIAC CHEST PAIN: reassurance, PPI if GERD; NSAIDs for pericarditis; musculoskeletal → rest/NSAIDs`,
    monitoring: `• Serial EKGs: every 15-30 min while chest pain ongoing; q6-8h if ischemia pattern
• Serial troponin per 0/1h or 0/3h algorithm — do not discharge until T2 troponin resulted and pattern clear
• Continuous telemetry for any ischemic workup
• BP both arms if aortic dissection concern (>20 mmHg differential is abnormal)`,
    disposition: `• Cath lab activation: STEMI or STEMI equivalent (new LBBB, posterior MI)
• CCU/ICU: unstable ACS (ongoing ischemia, hemodynamic compromise), STEMI post-PCI
• Cardiology telemetry: NSTEMI (high HEART score ≥7 → early invasive), intermediate-risk chest pain
• Discharge with stress testing or CCTA: low HEART score (0-3) + negative hs-cTn x2`
  },

  {
    id: "mi-complications",
    system: "cv",
    title: "MI Complications",
    keywords: ["MI complications","post MI","cardiogenic shock","free wall rupture","papillary muscle rupture","VSD","ventricular septal defect","pericarditis Dressler","mechanical complications","ischemic MR","reinfarction","STEMI complications"],
    source: { chapter: "Cardiology", section: "MI Complications", pages: "16–17", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Cardiogenic shock: 6% STEMI, 3% NSTEMI; most within 24-72h post-MI; diagnosis: CI <2.2 + PCWP >18; treat with emergent PCI + MCS (IABP or Impella)",
        "Free wall rupture: 0.05-0.09% of STEMIs; days 3-7 post-MI; sudden hemodynamic collapse + pericardial tamponade; surgical emergency",
        "Papillary muscle rupture (acute MR): sudden severe pulmonary edema + holosystolic murmur; day 3-7; more common with inferoposterior MI; emergent surgery",
        "VSR (ventricular septal rupture): 0.3% post-MI; new harsh systolic murmur + step-up in saturation from RA to PA; emergent surgery or percutaneous closure",
        "Post-MI pericarditis (early): pleuritic chest pain day 1-5 after STEMI; aspirin first-line; avoid NSAIDs/colchicine in first month post-MI if possible"
      ]
    },
    assessment: `#MI Complications
MI type: [ ] STEMI  [ ] NSTEMI | Infarct territory: *** | Days since MI: ***
Mechanical complication evaluation:
[ ] Cardiogenic shock: CI <2.2 + PCWP >18 | SBP *** | Lactate *** | End-organ signs: ***
[ ] Acute MR / papillary muscle rupture: new holosystolic murmur at apex *** | Pulmonary edema: ***
[ ] VSR / VSD: new harsh systolic murmur *** | O2 step-up RA→PA: ***
[ ] Free wall rupture: sudden collapse + pericardial effusion on echo | Beck's triad: ***
[ ] Post-MI pericarditis: pleuritic pain, friction rub, diffuse ST elevation
[ ] Reinfarction: new ST changes or troponin re-elevation`,
    ddx: `CARDIOGENIC SHOCK: ischemic LV dysfunction (most common), mechanical complication, RV failure from RV MI
ACUTE MR: papillary muscle ischemia/infarction/rupture → acute mitral regurgitation; posterior papillary muscle (single blood supply from RCA PDA) > anterolateral
VSD/VSR: anterior MI (apical VSD) > inferior MI (basal VSD); left-to-right shunt → biventricular failure; hyperdynamic LV with severe RV failure
FREE WALL RUPTURE: anterior MI more common; risk: first MI, no prior angina, female, elderly, thrombolytics without PCI, late PCI
POST-MI PERICARDITIS (early): day 1-5, adjacent pericardial inflammation; vs Dressler syndrome (late — week 2-10, autoimmune, fever + pericarditis)
ISCHEMIC MR (chronic): annular dilation or LV remodeling — more indolent; systolic murmur, pulmonary hypertension over time`,
    workup: `• Serial EKGs every 6-8h: new ST elevation (reinfarction), new LBBB, arrhythmias (VT — scar-mediated)
• TTE (urgent): LVEF, wall motion, pericardial effusion, MR/TR severity, VSD, RV function
• TEE: if TTE non-diagnostic for mechanical complication; better assessment of MV, VSD anatomy
• PA catheter (if cardiogenic shock): CI <2.2, PCWP >18 = cardiogenic; O2 step-up from RA to PA confirms VSR
• Troponin trend: re-elevation suggests reinfarction (vs. plateau of initial MI)
• BMP (renal function in cardiogenic shock), CBC, lactate, LFTs
• CXR: pulmonary edema (cardiogenic shock, acute MR), cardiomegaly`,
    management: `CARDIOGENIC SHOCK:
• Emergent PCI: revascularization is the most important intervention — reduces mortality (NEJM 1999;341:625)
• Vasopressors: NE 0.1-0.5 mcg/kg/min (first-line); add epi if refractory
• Inotropes: dobutamine 2.5-10 mcg/kg/min if CI severely reduced and not in vasoplegia
• MCS: IABP (afterload reduction, diastolic augmentation) → Impella CP/5.5 if refractory shock; ECMO if bridge needed (DanGer Shock trial — Impella 5.5 reduces mortality)

PAPILLARY MUSCLE RUPTURE / ACUTE MR:
• Emergent surgical mitral valve repair/replacement
• Bridge: IABP + nitroprusside/nitroglycerin (afterload reduction); avoid positive inotropes if possible (increase regurgitant fraction)

VENTRICULAR SEPTAL RUPTURE (VSR):
• Emergent surgical repair (gold standard) or percutaneous VSD closure
• Bridge: IABP + vasodilators; avoid pressors alone (worsen left-to-right shunt)

FREE WALL RUPTURE:
• Pericardiocentesis for tamponade as temporizing measure
• Emergent surgery (very high mortality)

POST-MI PERICARDITIS:
• ASA 650mg q6h for 2-4 weeks (first-line); avoid NSAIDs and colchicine in first month if possible (impair scar healing — controversial)
• Avoid anticoagulation (risk of hemorrhagic conversion)`,
    monitoring: `• PA catheter waveforms (if placed): Cv waves of acute MR; oxygen saturations for VSD step-up
• Hemodynamics every 1-4h in cardiogenic shock: MAP, CI, PCWP, lactate, UOP
• Serial troponin for reinfarction; serial EKGs for new ischemia
• Daily TTE or POCUS: track effusion, MCS device position (Impella), ventricular function`,
    disposition: `• CCU mandatory: all mechanical complications, cardiogenic shock
• CT surgery STAT: free wall rupture, VSR, papillary muscle rupture
• Cardiology + CT surgery Heart Team: all mechanical complications
• IR/structural cardiology: percutaneous VSD closure, Impella placement`
  },

  {
    id: "cardiac-catheterization",
    system: "cv",
    title: "Cardiac Catheterization — Pre/Post Procedure Management",
    keywords: ["cardiac catheterization","PCI","coronary angiogram","cath lab","radial access","femoral access","contrast nephropathy","FFR","iFR","CABG vs PCI","post cath complication","pseudoaneurysm","retroperitoneal bleed"],
    source: { chapter: "Cardiology", section: "Cardiac Catheterization", pages: "18", authors: "Joseph Replogle, Brian Huang",
      keyFacts: [
        "LHC (arterial access: radial or femoral): coronary anatomy, LV/Ao pressures, PCI; radial = fewer bleeding/vascular complications",
        "Prep: NPO MN or clear liquids until 2h prior; hold metformin 1 day pre + 2 days post; hold DOACs >48h (>72h if CrCl <30); hold SGLT2i; continue ASA/statin/BB",
        "CIN (contrast-induced nephropathy): Cr peaks 1-5 days post; no benefit to prophylactic NAC or bicarb hydration in CKD (NEJM 2018;378:603); consider volume expansion with NS",
        "Retroperitoneal bleed: hemodynamic instability ± flank pain ± ecchymoses within hours post-cath; STAT CT A/P if stable; stop/reverse anticoagulation",
        "Pseudoaneurysm: pulsatile mass with bruit at access site → US-guided thrombin injection if >2cm; surgery if failing compression"
      ]
    },
    assessment: `#Pre-Cardiac Catheterization Assessment / Post-Cath Complication
Indication: [ ] Stable angina/ischemia evaluation  [ ] ACS/NSTEMI  [ ] STEMI  [ ] Pre-TAVR  [ ] Other: ***
ACCESS: [ ] Radial (preferred — fewer bleeding complications)  [ ] Femoral
Pre-procedure: Last meal *** | INR ___ (<2 radial, <1.8 femoral) | Cr ___ (risk for CIN) | Allergy to contrast: [ ] Yes → pre-medicate
Anticoagulation held: [ ] ASA (continue)  [ ] DOAC: *** (held ___ h)  [ ] UFH gtt (held on call)
POST-CATH COMPLICATION ASSESSMENT:
Access site: [ ] Hematoma  [ ] Pulsatile mass with bruit (pseudoaneurysm)  [ ] Continuous bruit without mass (AV fistula)
Limb: [ ] Pulses symmetric  [ ] Ischemic changes (↓ warmth/sensation/pulses — call fellow STAT)
Flank pain / hemodynamic instability (retroperitoneal bleed): [ ] Suspected — CT A/P STAT`,
    ddx: `POST-CATH ACCESS SITE COMPLICATIONS:
• Hematoma: mass without bruit; direct compression; call fellow if expanding
• Pseudoaneurysm: pulsatile mass + systolic bruit; <2cm → ultrasound-guided compression; ≥2cm → thrombin injection or surgery
• AV fistula: continuous (systolic + diastolic) bruit; vascular surgery referral
• Retroperitoneal bleed: hours post-cath, hemodynamic instability ± flank/back pain ± ecchymoses → STAT CT A/P; IVF + blood products + stop anticoagulation
• Limb ischemia: thrombus/dissection or malpositioned closure device → Doppler US + pulse checks → urgent vascular surgery

OTHER POST-PCI COMPLICATIONS:
• In-stent thrombosis (acute): return to cath lab urgently for repeat PCI
• Contrast-induced nephropathy (CIN): Cr rise 24-72h post (peak 1-5 days); volume expansion most protective
• Atheroembolism (cholesterol emboli): eosinophilia, livedo reticularis, blue toes, AKI, mesenteric ischemia
• Cardiac tamponade: narrow PP + HoTN 2° coronary/cardiac perforation → STAT TTE + alert cath fellow
• Stroke/TIA: focal neuro changes post-cath → STAT neurology + CT head/CTA neck`,
    workup: `PRE-PROCEDURE:
• BMP (Cr — CIN risk), CBC, INR/PT (if on warfarin), type and screen
• Bilateral radial/femoral/popliteal/DP pulse documentation + Allen's test
• EKG: baseline
• TTE (if not recent): LV function, valvular disease, effusion
POST-PROCEDURE:
• BMP at 24-48h: Cr for CIN; K+ (contrast can cause shifts)
• CXR if respiratory symptoms post-procedure (effusion, pulmonary edema from contrast load)
• ABI/limb Doppler US if limb ischemia suspected`,
    management: `PRE-PROCEDURE:
• Volume hydration: NS 0.9% 1-1.5 mL/kg/h x6-12h pre- and post-procedure for CIN prevention (especially GFR <30)
• Hold: metformin (hold 1d pre + 2d post); DOACs (>48h, >72h if CrCl <30); SGLT2i; ACEi (procedure-dependent)
• Contrast allergy premedication: prednisone 50mg PO at 13h, 7h, and 1h before + benadryl 50mg x1 hour before
• Continue: ASA, statin, beta-blocker
RADIAL TR BAND: apply after radial procedure per protocol; loosen per protocol over 4-6h; monitor for hand numbness/paresthesias
RETROPERITONEAL BLEED: STAT CT A/P → 2 large-bore IVs + IVF + crossmatch + stop/reverse anticoagulation (vitamin K + PCC if on warfarin; hold heparin) → vascular surgery consult`,
    monitoring: `• Radial access: TR band check every 30-60 min; finger pulse oximetry for perfusion; remove air per protocol
• Femoral access: neurovascular checks (pulses, sensation, motor) every 30-60 min x4h
• Urine output every 2-4h post-procedure in CKD patients (CIN monitoring)
• Cr at 24-48h (all patients); earlier if oliguria`,
    disposition: `• Discharge: same-day discharge after elective radial access PCI with stable vitals and no complications
• Observation: femoral access, CKD (CIN monitoring), contrast load in high-risk patients
• Cardiology/vascular surgery: access site complications
• CCU: post-STEMI PCI, cardiogenic shock, large infarct territory`
  },

  {
    id: "noninvasive-cardiac-testing",
    system: "cv",
    title: "Non-Invasive Cardiac Testing",
    keywords: ["stress test","exercise stress test","nuclear stress test","dobutamine stress echo","cardiac CT","CCTA","coronary CTA","cardiac MRI","CMR","stress imaging","calcium score","CAC","non-invasive testing","chest pain workup"],
    source: { chapter: "Cardiology", section: "Non-Invasive Cardiac Testing", pages: "19–20", authors: "Joseph Replogle, Brian Huang",
      keyFacts: [
        "CCTA favored: age <65, no prior CAD, rule out obstructive CAD, detect non-obstructive CAD — higher sensitivity than functional testing; guides preventive care",
        "Stress imaging favored: age >65, known >50% CAD (assess for ischemia), prior inconclusive CCTA, microvascular dysfunction evaluation (PET/CMR)",
        "Exercise ECG (ETT alone): preferred if patient can exercise and has interpretable EKG (no LBBB, LVH, digoxin, >1mm ST depression at rest, WPW, paced rhythm)",
        "Dobutamine stress echo (DSE): contraindicated if HR can be raised but used for: pre-op risk, LF/LG AS evaluation, non-exercising patients; assess for wall motion abnormalities",
        "Contraindications to stress testing: untreated ACS, MI within 2 days, hemodynamically significant arrhythmia, severe AS, uncontrolled HF, BP >200/110"
      ]
    },
    assessment: `#Non-Invasive Cardiac Testing — Indication and Selection
Clinical question: [ ] Diagnose CAD  [ ] Evaluate ischemia in known CAD  [ ] Pre-operative risk  [ ] New cardiomyopathy  [ ] Valvular disease
Symptom acuity: [ ] Acute (ED/inpatient)  [ ] Stable (outpatient)
Prior CAD: [ ] No  [ ] Yes — prior PCI/CABG: ***
Patient can exercise adequately: [ ] Yes  [ ] No (→ pharmacologic stress)
EKG interpretable (no LBBB, LVH, WPW, digoxin effect, >1mm ST baseline): [ ] Yes  [ ] No (→ imaging modality needed)
Test selected: [ ] Exercise ECG (ETT)  [ ] Exercise stress echo  [ ] Nuclear (SPECT/PET)  [ ] CCTA  [ ] CMR  [ ] Dobutamine stress echo`,
    ddx: `TEST SELECTION:
• Can exercise + interpretable EKG: EXERCISE TREADMILL TEST (ETT) ± IMAGING
• Cannot exercise: PHARMACOLOGIC STRESS (dobutamine echo or adenosine/regadenoson nuclear/MRI)
• Anatomy needed + age <65 + no prior obstructive CAD: CCTA
• Known CAD + specific ischemia localization needed: NUCLEAR (SPECT/PET) or STRESS ECHO
• Viability (hibernating myocardium), cardiomyopathy characterization, infiltrative disease: CARDIAC MRI
• Calcium scoring: asymptomatic patients for risk stratification — not for symptomatic workup

POSITIVE STRESS TEST FINDINGS:
• Exercise ECG: ≥1mm horizontal/downsloping ST depression in ≥2 contiguous leads
• Stress echo: new or worsening wall motion abnormality (RWMA) during stress
• Nuclear (SPECT/PET): fixed defect (scar) vs. reversible defect (ischemia)
• High-risk features: large territory ischemia, EF drop with stress, ischemia at low workload, ST elevation in non-Q territories`,
    workup: `PRE-TEST:
• EKG: interpretability assessment (LBBB, WPW, LVH, paced rhythm → imaging modality needed)
• BP: >200/110 = contraindication; hold exercise stress if uncontrolled
• Hold beta-blockers 24-48h before diagnostic stress testing (may blunt HR response)
POST-TEST INTERPRETATION:
• Adequate HR achieved: ≥85% age-predicted maximum HR [(220-age) × 0.85]
• Duke Treadmill Score: [exercise time (min)] – [5 × (max ST deviation)] – [4 × (angina index 0-2)] — score ≥+5 = low risk; ≤-11 = high risk
• Image interpretation: perfusion defect size/location (nuclear), regional wall motion abnormality (echo/CMR)`,
    management: `LOW-RISK STRESS TEST:
• Medical management: aspirin, statin, risk factor reduction
• No immediate catheterization needed; outpatient follow-up

HIGH-RISK STRESS TEST (large territory, EF drop, ischemia at low workload):
• Cardiac catheterization for coronary anatomy and revascularization consideration
• Heart Team discussion for complex anatomy (3VD, LM disease — PCI vs. CABG)

INCONCLUSIVE STRESS TEST:
• Consider alternative imaging modality (nuclear if echo suboptimal, CCTA for anatomy)

PHARMACOLOGIC STRESS PRECAUTIONS:
• Dobutamine: hold BBs; do not use if HR >100, severe HTN, recent MI, significant arrhythmias, severe AS
• Adenosine/regadenoson: hold methylxanthines (caffeine, theophylline) 24h prior; avoid in severe asthma/reactive airway disease, high-grade AV block, severe HoTN`,
    monitoring: `• Continuous 12-lead EKG and BP monitoring during stress test
• Recovery monitoring until HR returns to <100 and ST changes resolve
• Atropine 0.5-1mg IV on standby during pharmacologic stress; resuscitation equipment at bedside`,
    disposition: `• High-risk stress test: admission/urgent cardiology consult for catheterization planning
• Cardiology referral: intermediate/high probability of obstructive CAD on imaging
• Pre-op clearance: most patients with good functional capacity (≥4 METS) do not require additional testing`
  },

  {
    id: "echocardiography",
    system: "cv",
    title: "Echocardiography — Views, Indications, and Interpretation",
    keywords: ["echocardiography","TTE","TEE","POCUS","echo views","LVEF","wall motion","pericardial effusion","tamponade echo","cardiac output","diastolic function","valvular disease echo"],
    source: { chapter: "Cardiology", section: "Echocardiography", pages: "21", authors: "Joseph Replogle, Brian Huang",
      keyFacts: [
        "Standard TTE views: parasternal long axis (LV size/function, MV/AoV, LVOT), parasternal short axis, apical 4-chamber (RV/LV function, TV/MV), apical 5-chamber (AoV, LVOT), subcostal (RV, IVC), suprasternal (aortic arch)",
        "LVEF estimation: normal ≥55%; mildly reduced 41-54% (HFmrEF); moderately reduced 30-40%; severely reduced <30%",
        "Tamponade echo: pericardial effusion + RV collapse in diastole + RA collapse + IVC plethora + respiratory variation in Doppler velocities (>25% mitral E-wave variation)",
        "TEE limitations: invasive, requires sedation, cannot see below diaphragm — superior for: LAA thrombus, prosthetic valve endocarditis, PFO, intraoperative monitoring, complex valve anatomy",
        "Point-of-care echo (POCUS): LV function, pericardial effusion, pleural effusion, IVC (volume assessment), B-lines (pulmonary edema) — rapid bedside assessment"
      ]
    },
    assessment: `#Echocardiography — Clinical Indication
Indication:
[ ] LV function/cardiomyopathy evaluation  [ ] Tamponade / pericardial effusion
[ ] Valvular disease assessment  [ ] Source of embolism (LAA thrombus, vegetation)
[ ] RV function / pulmonary hypertension  [ ] Shock/hemodynamic instability
[ ] Endocarditis  [ ] Pre-/post-cardioversion AFib  [ ] Post-cardiac procedure
Type: [ ] TTE (standard first-line)  [ ] TEE (LAA, prosthetic valve, better views)  [ ] POCUS (bedside rapid)
Key question: ***`,
    ddx: `TTE LIMITATIONS → TEE INDICATIONS:
• LAA thrombus evaluation (pre-cardioversion of AFib >48h without anticoagulation)
• Prosthetic valve endocarditis (TTE limited by shadowing; TEE required)
• PFO assessment (better sensitivity with agitated saline + Valsalva)
• Intraoperative monitoring (cardiac surgery)
• Complex valvular anatomy (native or prosthetic)
• Better posterior structure visualization (posterior MI, posterior effusion)

POCUS USES:
• Rapid LV function: "eyeballing" EF, wall motion abnormalities
• Pericardial effusion: circumferential (echo-free space)
• IVC diameter and collapsibility: volume responsiveness (≥2cm and non-collapsing = elevated CVP)
• B-lines (comet tails): ≥3 per zone = interstitial edema (pulmonary edema)
• Pleural effusion: anechoic space above diaphragm posteriorly
• RV:LV ratio: RV/LV >0.9 suggests RV strain (PE, ARDS)`,
    workup: `STANDARD TTE ASSESSMENT:
• LV size and systolic function (LVEF, wall motion)
• LV diastolic function: E/A ratio, E/e' (tissue Doppler), LA size, TR velocity (diastolic grade)
• RV size and function: RV:LV ratio, TAPSE (≥17mm = normal), RV strain pattern (inferior-apical sparing)
• Pericardium: effusion (small <1cm, moderate 1-2cm, large >2cm), tamponade physiology
• Valvular assessment: all 4 valves — severity, morphology, gradients
• IVC: diameter (<2.1cm + >50% collapsibility = RAP ≤3mmHg)
• Estimated RVSP (TR velocity): 4×(TRV)² + RAP = RVSP (>35mmHg = elevated)`,
    management: `CARDIAC TAMPONADE (echo-confirmed):
• Pericardiocentesis: emergent if hemodynamically compromised (Beck's triad: hypotension/JVD/muffled heart sounds)
• Subxiphoid approach: US-guided; drain to dryness; leave catheter x24-48h for reaccumulation check
SEVERE VALVULAR DISEASE: see Valvular Heart Disease template
REDUCED LVEF (HFrEF): initiate GDMT (BB, ACEi/ARBi/ARNI, MRA, SGLT2i); see Heart Failure template
RV STRAIN PATTERN: evaluate for PE (CTA chest), ARDS, pulmonary hypertension — see RV Failure template`,
    monitoring: `• Repeat TTE in 2-4 weeks after ADHF hospitalization (reassess LVEF after optimal GDMT)
• Serial TTE every 6-12 months: moderate-severe valvular disease, known cardiomyopathy
• TTE immediately post-pericardiocentesis: confirm resolution of effusion, rule out reaccumulation`,
    disposition: `• Cardiology consult: new cardiomyopathy (LVEF <40%), moderate-severe valvular disease, endocarditis, RV failure
• CT surgery / structural cardiology: severe valvular disease meeting intervention criteria
• Cardiac imaging service: complex cases requiring TEE, PET, or CMR`
  },

  {
    id: "mechanical-circulatory-support",
    system: "cv",
    title: "Mechanical Circulatory Support (IABP / Impella / ECMO)",
    keywords: ["mechanical circulatory support","MCS","IABP","intra-aortic balloon pump","Impella","cardiogenic shock","ECMO","VA ECMO","LV assist device","LVAD","temporary MCS","heart failure advanced"],
    source: { chapter: "Cardiology", section: "Mechanical Circulatory Support", pages: "26", authors: "Frederick Lang, Emily Manning",
      keyFacts: [
        "Cardiogenic shock ladder: vasopressors/inotropes → IABP (afterload reduction) → Impella CP (3.5 L/min) → Impella 5.5 (6.5 L/min) → VA-ECMO → bridge to permanent LVAD or transplant",
        "Impella 5.5: reduces mortality in MI-related cardiogenic shock (DanGer Shock trial) — requires surgical placement via axillary artery; enables patient mobilization",
        "IABP: inflates in diastole (↑coronary perfusion), deflates in systole (↓afterload); limited survival benefit in cardiogenic shock but useful as adjunct",
        "VA-ECMO: drains venous blood, oxygenates, returns to arterial system; can support cardiac output up to 5-6 L/min; complications: LV distension, limb ischemia, bleeding",
        "Impella vs IABP: Impella provides more cardiac output support and is preferred for higher-acuity cardiogenic shock; position monitored by waveform + CXR/echo"
      ]
    },
    assessment: `#Mechanical Circulatory Support
Indication: [ ] Cardiogenic shock (CS)  [ ] High-risk PCI  [ ] Refractory VT ablation  [ ] Bridge to recovery/LVAD/transplant
Hemodynamics: CI ___ L/min/m² (goal >2.2) | PCWP ___ mmHg (goal <18) | MAP ___ | Lactate ___
Vasopressor/inotrope support: ***
Current MCS device: [ ] IABP  [ ] Impella 2.5  [ ] Impella CP  [ ] Impella 5.5  [ ] Impella RP  [ ] VA-ECMO  [ ] None
Device settings: *** | Waveform: *** | Position confirmed: [ ] CXR  [ ] Echo
Complications: [ ] Position alarm  [ ] Hemolysis (Hgb drop, pink urine, LDH ↑)  [ ] Limb ischemia  [ ] Bleeding`,
    ddx: `ESCALATION ALGORITHM (cardiogenic shock):
• Level 1: Vasopressors (NE) + inotropes (dobutamine) — MAP ≥65, UOP >0.5 mL/kg/h
• Level 2: IABP — reduces afterload, augments diastolic BP and coronary perfusion; useful peri-PCI
• Level 3: Impella CP (3.5 L/min, percutaneous) — unloads LV, increases forward flow
• Level 4: Impella 5.5 (6.5 L/min, surgical axillary) — highest percutaneous support; DanGer Shock benefit
• Level 5: VA-ECMO — full cardiopulmonary support; add Impella (ECPELLA) to unload LV
• Definitive: transplant or durable LVAD (destination therapy)

RV FAILURE SUPPORT:
• Impella RP: IVC→PA flow (>4 L/min) — acute RV failure post-LVAD implant or RV MI
• Centrimag/RVAD: surgical; prolonged RV support`,
    workup: `• TTE/POCUS: LV dilation/impaction from Impella? Adequate position? IABP in aorta?
• Daily CXR: IABP tip position (2cm above carina/1-2cm below left subclavian); Impella in LV (across AoV)
• Labs: CBC (hemolysis from Impella — Hgb drop, LDH ↑, pink urine); BMP (renal function); coagulation (anticoagulation for MCS)
• Limb vascular checks: especially for femoral access devices; ABI if concern for distal ischemia`,
    management: `IABP:
• Timing: inflate at dicrotic notch (beginning of diastole); deflate before systole
• Augmented diastolic pressure > systolic; end-diastolic pressure drops (↓afterload)
• Anticoagulation: UFH to anti-Xa 0.3-0.5 (or aPTT 60-80)
• Weaning: reduce augmentation ratio 1:1 → 1:2 → 1:3 while monitoring hemodynamics
IMPELLA:
• Power settings: P2-P9 (low to high); increase power to improve CI and reduce PCWP
• Monitor for suction events (Impella pulling blood but LV filling insufficient — reduce power, ↑preload)
• Anticoagulation: argatroban or bivalirudin (no UFH through device — sheath only)
• Hemolysis: if present — reposition device, reduce power; consider device exchange if severe
VA-ECMO:
• Flows 2-6 L/min; sweep gas controls CO2 clearance
• LV distension (↑PCWP): add IABP or Impella for LV venting (ECPELLA configuration)
• Distal perfusion catheter: femoral artery (distal to arterial cannula) prevents limb ischemia`,
    monitoring: `• Hemodynamic parameters every 1-4h: MAP, CI, PCWP, UOP, lactate (trending is key)
• Device waveforms continuously: IABP balloon inflation/deflation timing; Impella inlet/outlet pressure
• Daily CBC (hemolysis), CXR (device position), limb checks (vascular)
• Weaning assessment: daily — is native heart recovering? (PPCW, CI improving off support?)`,
    disposition: `• CCU mandatory: all MCS patients
• Heart failure/advanced heart disease team: all patients with MCS — bridge to recovery, LVAD, or transplant evaluation
• CT surgery + cardiac anesthesia: Impella 5.5 placement, VA-ECMO cannulation, durable LVAD implant`
  },

  {
    id: "pulmonary-artery-catheter",
    system: "cv",
    title: "Pulmonary Artery Catheterization (PA Catheter / Swan-Ganz)",
    keywords: ["pulmonary artery catheter","PA catheter","Swan-Ganz","PCWP","wedge pressure","cardiac output","cardiogenic shock hemodynamics","PAC","pulmonary capillary wedge","cardiac index","right heart catheterization"],
    source: { chapter: "Cardiology", section: "Pulmonary Artery Catheterization", pages: "27", authors: "Frederick Lang, Emily Manning",
      keyFacts: [
        "PA catheter indications: undifferentiated shock, cardiogenic vs non-cardiogenic pulmonary edema, LV vs RV failure, pulmonary hypertension etiology, L-R shunting, valve disease hemodynamics",
        "Line course: central vein (IJ/fem) → SVC/IVC → RA → RV → PA → distal pulmonary arteriole (wedge position)",
        "Normal values: CVP 0-8 mmHg, RVP 15-25/0-8, PAP 15-25/8-15, PCWP 6-12 mmHg, CI 2.4-4.0 L/min/m², PVR <2 Wood units",
        "PCWP >18 = cardiogenic; PCWP <12 with CI <2.2 = distributive/hypovolemic; Fick cardiac output = VO2/(CaO2-CvO2)×10",
        "Waveform: a wave (atrial contraction), c wave (tricuspid closure), x descent (atrial relaxation), v wave (passive venous filling), y descent (tricuspid opening)"
      ]
    },
    assessment: `#Pulmonary Artery Catheterization — Hemodynamic Profile
PA Pressures: PA sys/dia/mean *** mmHg (normal 15-25/8-15/12-16)
PCWP (wedge): *** mmHg (normal 6-12; >18 = cardiogenic pulmonary edema)
CVP/RAP: *** mmHg (normal 0-8)
Cardiac Output: *** L/min | Cardiac Index (CI): *** L/min/m² (normal 2.4-4.0; shock <2.2)
PVR = (mPAP – PCWP)/CO = *** Wood units (normal <2; >2 = pre-capillary PH)
SVR = [80 × (MAP – RAP)]/CO = *** dynes·sec·cm⁻⁵ (normal 700-1600)
Mixed venous O2 sat (SvO2): ***% (normal >65%; <60% = ↑O2 extraction/low CO)
Profile: [ ] Cardiogenic shock (CI <2.2 + PCWP >18)  [ ] Distributive/septic (CI ↑ + SVR ↓)  [ ] Hypovolemic (CI ↓ + PCWP ↓)`,
    ddx: `HEMODYNAMIC PROFILES:
• Cardiogenic shock: CI <2.2, PCWP >18, SVR ↑, SvO2 ↓ — cold/wet
• Distributive shock (sepsis): CI ↑ or normal, PCWP ↓ or normal, SVR ↓, SvO2 ↑ — warm/wet (early) or warm/dry
• Hypovolemic: CI ↓, PCWP ↓, CVP ↓, SVR ↑
• RV failure (e.g. massive PE): CVP ↑↑, PCWP normal/low, CI ↓, RVP ↑, PA diastolic–PCWP gradient ↑
• Constrictive pericarditis: equalization of diastolic pressures (RA = RVd = PCWP within 5mmHg)
• Tamponade: equalization of all 4 chamber diastolic pressures; no clear y descent on CVP

WAVEFORM ABNORMALITIES:
• Large V waves on PCWP trace: acute MR (papillary muscle rupture) or VSD (step-up in O2 saturation RA→PA)
• Absent Y descent: tamponade (restricted diastolic filling)
• Kussmaul's sign (CVP ↑ with inspiration): constrictive pericarditis, RV infarct`,
    workup: `• PCWP tracing: confirm balloon position (wedge waveform); measure at end-expiration
• Mixed venous saturation: blood from PA distal port (not PCWP port while inflated)
• Fick cardiac output: indirect measurement using O2 consumption; Thermodilution CO: 3 measurements averaged
• Step-up O2 saturations (RA vs PA): >5-8% step-up in O2 sat = L→R shunt (VSR, ASD)
• Daily CXR: line position; tip should be proximal to hilum (zone 3 position)`,
    management: `TAILORED THERAPY BASED ON HEMODYNAMIC PROFILE:
• Cold/wet (cardiogenic): diuresis (IV furosemide/CRRT) + vasodilators (nitroprusside/NTG if SBP tolerable) + inotropes (dobutamine) ± MCS
• Warm/wet (distributive): volume resuscitation + vasopressors (NE) + source control (sepsis)
• Cold/dry (cardiogenic without congestion): careful IVF challenge + inotropes; avoid diuresis
• RV failure: preload optimization (avoid over-diuresis) + pulmonary vasodilators + treat underlying cause
PCWP-GUIDED DIURESIS: target PCWP 12-18 with CI >2.0; titrate diuretics to UOP 1-2 mL/kg/h`,
    monitoring: `• PA pressures every 4h on AM rounds (patient supine, HOB 0-60°, transducer at mid-axillary line)
• Balloon inflation: <10 seconds; note minimum volume for wedge waveform
• Troubleshooting: dampened waveform = kinked tubing, thrombus, or catheter against vessel wall → flush; persistent wedge = too distal → withdraw 1-2 cm; arrhythmia = in RVOT → reposition`,
    disposition: `• CCU mandatory: all PA catheter patients
• Remove catheter: when therapeutic goals met or patient stabilized; PA lines are not indefinite — reassess daily
• Hemodynamic goals met? → wean vasopressors/inotropes → transition to oral medications`
  },

  {
    id: "cardiac-devices",
    system: "cv",
    title: "Cardiac Devices (PPM / ICD / CRT)",
    keywords: ["pacemaker","PPM","ICD","CRT","defibrillator","implantable cardioverter","cardiac resynchronization","device malfunction","pacemaker syndrome","magnet response","MRI safety pacemaker","device interrogation","DDD pacing","CIED"],
    source: { chapter: "Cardiology", section: "Cardiac Devices", pages: "28", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Pacemaker code: D=dual, V=ventricular, A=atrial — 1st letter=chamber paced, 2nd=chamber sensed, 3rd=response to sensing (I=inhibited, T=triggered, D=dual, O=none)",
        "DDD: most common; paces/senses both chambers; tracks atrial activity to trigger ventricular pacing — most closely mimics normal conduction",
        "Magnet response: PPM → asynchronous pacing (DOO/VOO); ICD → suspends detection and therapy (turns off tachyarrhythmia treatment, does NOT affect pacing)",
        "PPM indications (Class I): symptomatic sinus bradycardia, Mobitz II or third-degree AV block, symptomatic chronotropic incompetence",
        "ICD indications (Class I): survivors of VF/sustained VT, LVEF ≤35% on GDMT ≥3 months with NYHA II-III symptoms"
      ]
    },
    assessment: `#Cardiac Device Assessment
Device type: [ ] PPM (pacemaker)  [ ] ICD (implantable cardioverter-defibrillator)  [ ] CRT-P  [ ] CRT-D  [ ] Loop recorder
Manufacturer: ***  |  Implant date: ***  |  Last interrogation: ***
Pacing mode: *** (e.g., DDD, VVI, AAI)  |  Rate: *** bpm
Current concern:
[ ] Pacemaker-dependent: underlying rhythm if device failed: ***
[ ] Failure to pace (pacer spikes without capture — threshold elevated? lead displacement?)
[ ] Failure to sense (inappropriate pacing — lead issue, electrolyte abnormality, Mg depletion)
[ ] ICD shock delivered: [ ] Appropriate (VT/VF)  [ ] Inappropriate (AFib/oversensing/T-wave)
[ ] Needs urgent re-programming: [ ] Surgery planned  [ ] Magnet needed (inappropriate shocks)`,
    ddx: `PPM MALFUNCTION:
• Failure to pace: battery depletion, lead displacement, threshold increase (electrolyte imbalance, antiarrhythmic drugs, infarction at lead tip)
• Failure to sense: lead displacement, oversensing (T-wave, myopotentials), electrolyte abnormalities
• Pacemaker-mediated tachycardia (PMT): retrograde P → re-sensed by atrial lead → triggers ventricular pacing loop — magnet terminates
• Pacemaker syndrome: AV dissociation (VVI pacing) → cannon A waves, HoTN, syncope — upgrade to DDD

ICD MALFUNCTION:
• Appropriate shock: VT/VF treated correctly
• Inappropriate shock: oversensing (T-wave, skeletal muscle, lead fracture), supraventricular tachycardia (AFib/flutter), electromagnetic interference
• Storm: ≥3 appropriate shocks in 24h — IV amiodarone + deep sedation + urgent electrophysiology

DEVICE-INFECTION:
• Pocket infection: erythema, warmth, fluctuance, erosion over device
• Lead infection/CIED endocarditis: bacteremia (especially S. aureus) with implanted device — require device extraction + prolonged antibiotics`,
    workup: `• EKG and rhythm strip: pacemaker spikes present/absent, capture, sensing abnormalities, pacing pattern
• CXR: lead position (right atrium → right ventricle apex → coronary sinus for CRT); lead fracture (break in lead continuity)
• Device interrogation (EP tech/cardiology): battery life, pacing threshold, sensing threshold, lead impedance, electrogram review, arrhythmia log
• Electrolytes: K+, Mg2+ (hypokalemia/hypomagnesemia → ↑pacing threshold)
• Blood cultures x2: if fever + CIED (S. aureus bacteremia with device = CIED infection until proven otherwise)
• TTE/TEE: if endocarditis concern (lead vegetations, valvular involvement)`,
    management: `MAGNET APPLICATION:
• PPM: triggers asynchronous pacing (DOO/VOO) at manufacturer-specific rate — use for inappropriate inhibition during surgery/interference
• ICD: SUSPENDS shock detection/delivery — use to prevent inappropriate shocks during surgery; do NOT apply if patient needs ICD therapy
• Apply magnet to device and confirm response with telemetry
PERI-OPERATIVE MANAGEMENT:
• Pacemaker-dependent patients: ensure continuous pacing (telemetry + magnet available); reprogram to asynchronous if needed
• ICD patients: reprogram to suspend tachytherapy before procedure OR apply magnet; restore after procedure
• MRI compatibility: many modern devices are MRI-conditional (check device ID); non-MRI-safe devices may be safe to scan after reprogramming (NEJM 2017;376:755)
APPROPRIATE ICD SHOCK: reassure patient; evaluate for correctable triggers (electrolytes, ischemia, medication); EP follow-up
INAPPROPRIATE ICD SHOCK: device interrogation urgently; apply magnet to prevent further shocks; reprogram detection criteria; treat underlying arrhythmia (rate control for AFib)
ICD STORM: IV amiodarone 150mg over 10 min then 1mg/min; deep sedation; urgent EP consultation; consider ECMO if hemodynamic compromise`,
    monitoring: `• Telemetry: continuous while investigating device malfunction
• Device interrogation: EP or device rep should access device within 24h for any significant concern
• CXR: after any device manipulation or if lead displacement suspected
• Wound check: device pocket daily if infection concern`,
    disposition: `• Electrophysiology consult: device malfunction, ICD storm, CIED infection, device upgrade consideration
• CT surgery + EP: CIED extraction (lead endocarditis, pocket infection, device recall)
• Outpatient remote monitoring: all CIED patients should have remote monitoring set up — transmit every 3 months or with any alert`
  },

  {
    id: "antiarrhythmic-medications",
    system: "cv",
    title: "Anti-Arrhythmic Medications",
    keywords: ["antiarrhythmic","amiodarone","sotalol","flecainide","propafenone","lidocaine","procainamide","mexiletine","dofetilide","dronedarone","digoxin","Vaughan-Williams classification","rhythm control"],
    source: { chapter: "Cardiology", section: "Anti-Arrhythmic Medications", pages: "37", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "Vaughan-Williams Classification: Class I (Na channel blockers: IA/IB/IC), Class II (BBs), Class III (K channel blockers: amiodarone/sotalol/dofetilide/ibutilide), Class IV (CCBs)",
        "Amiodarone: most effective AAD but extensive toxicities — thyroid, pulmonary, hepatic, ocular, cutaneous; monitor TFTs, PFTs, CXR, LFTs every 6 months; 5-year half-life",
        "Class IC agents (flecainide, propafenone): CONTRAINDICATED in structural heart disease (CAD, reduced EF) due to proarrhythmia — use only in 'lone AFib' without structural disease",
        "Sotalol: Class III + non-selective BB; requires inpatient initiation (QTc monitoring); QTc >500ms or increase >60ms from baseline = stop; dose-adjust for renal function",
        "Procainamide: WPW + AFib (better than amiodarone for pre-excited AFib); IV only in acute setting; beware QRS prolongation + HoTN; long-term use → drug-induced lupus"
      ]
    },
    assessment: `#Anti-Arrhythmic Medication Assessment
Arrhythmia type: [ ] AFib/flutter  [ ] VT  [ ] SVT  [ ] VF  [ ] Pre-excited (WPW)
Goal: [ ] Rate control  [ ] Rhythm control (maintenance)  [ ] Acute termination
Structural heart disease: [ ] Present (EF: ***)  [ ] Absent (normal LV function)
  → IC agents (flecainide, propafenone) CONTRAINDICATED if structural heart disease present
Current QTc: *** ms | K+: *** | Mg2+: *** | Cr/CrCl: *** (critical for dosing sotalol/dofetilide/quinidine)
Drug selected: ***
Monitoring plan: [ ] QTc at baseline + 2-4h after initiation  [ ] Inpatient initiation (sotalol, dofetilide)`,
    ddx: `CLASS I — Na CHANNEL BLOCKERS:
• IA (procainamide, quinidine, disopyramide): slows conduction + prolongs repolarization; ↑QTc; QRS widening
• IB (lidocaine, mexiletine): minimal effect on repolarization; used for ventricular arrhythmias (MI-associated VT)
• IC (flecainide, propafenone): potent conduction slowing; ONLY for structurally normal hearts (no CAD/reduced EF)

CLASS II — BETA BLOCKERS: carvedilol, metoprolol, atenolol — rate control, reduce adrenergic trigger for VT

CLASS III — K CHANNEL BLOCKERS:
• Amiodarone: broadest coverage; Class I/II/III/IV; most effective but highest toxicity profile; can use in structural heart disease
• Sotalol: Class III + BB; AF rhythm control or VT suppression; requires inpatient QTc monitoring
• Dofetilide/ibutilide: selective Class III; inpatient initiation (dofetilide); ibutilide IV for acute AF cardioversion
• Dronedarone: Class III; less toxic than amiodarone; CONTRAINDICATED in HFrEF/permanent AFib

CLASS IV — CCBs: diltiazem, verapamil — AV nodal rate control for AFib/SVT; avoid in WPW + AFib, HFrEF`,
    workup: `• Baseline QTc (and every 4-8h after initiation of QTc-prolonging agents)
• BMP: K+ (maintain ≥4.5 for sotalol/dofetilide), Mg2+ (maintain ≥2.0), Cr/CrCl (dose adjustment)
• TFTs (baseline before amiodarone; q6 months during): hypo- and hyperthyroidism
• PFTs + CXR (baseline with amiodarone; q6 months): pulmonary toxicity
• LFTs (baseline with amiodarone; q6 months): hepatotoxicity
• Drug-induced lupus (procainamide): ANA, anti-histone antibodies with prolonged use`,
    management: `ACUTE MANAGEMENT:
• Stable VT (monomorphic): amiodarone 150mg IV over 10 min → 1mg/min x6h → 0.5mg/min x18h; OR lidocaine 1-1.5mg/kg → 1-4mg/min infusion (preferred if QTc prolonged or TdP concern)
• Stable VT (pre-excited/WPW): procainamide 20-50mg/min IV up to 17mg/kg → 1-4mg/min; DO NOT use amiodarone (may accelerate conduction)
• AFib chemical cardioversion: IV ibutilide 1mg over 10 min (→ repeat x1) — effective for flutter especially; watch QTc
• Rate control (AFib): diltiazem 0.25mg/kg IV → infusion OR metoprolol 2.5-5mg IV q5min

CHRONIC MANAGEMENT:
• AFib rhythm control + structural heart disease: amiodarone (safest in low EF, HF); dofetilide (inpatient initiation required)
• AFib rhythm control + no structural disease: flecainide 100-200mg BID OR propafenone 150-300mg TID; dronedarone 400mg BID
• VT suppression (structurally normal heart): flecainide or mexiletine; EP ablation preferred if catheter-eligible
• VT suppression (cardiomyopathy): amiodarone; mexiletine (adjunct); consider EP catheter ablation`,
    monitoring: `• QTc: before and 4-8h after initiation/dose increase of Class IA, IC, or III agents; stop if QTc >500ms or increase >60ms
• Amiodarone: TFTs, LFTs, PFTs, CXR at 3-6 months (pulmonary toxicity); ophthalmology annually
• Sotalol/dofetilide: inpatient QTc monitoring (minimum 3 days); Cr/CrCl before each dose adjustment
• Drug levels: digoxin (check 6-12h after load; goal <1.2 ng/mL in AFib); lidocaine (toxicity: CNS symptoms — perioral numbness, tremor)`,
    disposition: `• Inpatient required: sotalol initiation (3+ days), dofetilide initiation, ibutilide administration
• Electrophysiology consult: antiarrhythmic selection in structural heart disease, amiodarone toxicity, catheter ablation evaluation
• Pharmacy: drug-drug interaction review (amiodarone inhibits multiple CYP enzymes — warfarin, digoxin, statins significantly increased levels)`
  },

  {
    id: "telemetry-physical-exam",
    system: "cv",
    title: "Telemetry Monitoring / Cardiovascular Physical Exam",
    keywords: ["telemetry","cardiac monitoring","heart sounds","murmur","JVP","jugular venous pressure","S3","S4","pulsus paradoxus","Kussmaul sign","cardiovascular exam","murmur grading","telemetry indications"],
    source: { chapter: "Cardiology", section: "Telemetry and Physical Exam", pages: "38", authors: "Brian Huang, Christopher Schenck",
      keyFacts: [
        "JVP: for measured CVP >8cm — Sn 47-92%, Sp 83-96%, +LR 8.9; add 5cm to estimated height to approximate RA pressure; veins show respiratory variation; non-pulsatile = SVC obstruction",
        "S3 ('sloshing in' of blood): heard at apex with bell in left lateral decubitus; for EF <30%: Sn 68-78%, Sp 80-88%; a/w HF, volume overload; can be physiologic in young",
        "S4 (atrial kick into stiff ventricle): late diastolic; a/w LVH, acute MI, cardiomyopathy, hypertension — not physiologic",
        "Pulsus paradoxus (>10mmHg BP drop with inspiration): cardiac tamponade, severe asthma, tension PTX — use sphygmomanometer",
        "Murmur grade: I-VI (I barely heard, II easily heard, III without thrill, IV with thrill, V with stethoscope edge on chest, VI without stethoscope); radiation pattern helps localize valve"
      ]
    },
    assessment: `#Cardiovascular Physical Exam Documentation
JVP: *** cm H2O (normal <4-5 cm above sternal angle at 45°)  |  Hepatojugular reflux: [ ] Present  [ ] Absent
Heart sounds: S1 [ ] Normal  [ ] Soft | S2 [ ] Normal  [ ] Loud P2  [ ] Fixed split  [ ] Paradoxical split
S3: [ ] Present (a/w HF — LV volume overload)  [ ] Absent
S4: [ ] Present (a/w LVH, hypertension, acute MI)  [ ] Absent
Murmur: Grade _/6 | Timing: [ ] Systolic  [ ] Diastolic  [ ] Continuous | Location: *** | Radiation: ***
[ ] Aortic area (2nd RICS): AS (↑ with squatting, ↓ with Valsalva) / AR (blowing diastolic)
[ ] Mitral area (apex): MR (holosystolic, radiation to axilla) / MVP (mid-systolic click → murmur)
[ ] Tricuspid area (LLSB): TR (↑ with inspiration — Carvallo's sign) / TS
[ ] Pulmonary area (2nd LICS): PS, Graham Steell murmur (pHTN)
Pulsus paradoxus: *** mmHg drop (>10 = abnormal) | Kussmaul's sign: [ ] Present  [ ] Absent (JVP ↑ with inspiration)
Edema: [ ] None  [ ] Peripheral *** | Ascites: [ ] Present  [ ] Absent`,
    ddx: `JVP ABNORMALITIES:
• Elevated JVP: HF, tamponade, SVC syndrome, constrictive pericarditis, cor pulmonale
• Large a waves: tricuspid stenosis, severe pHTN, non-conducted PAC (blocked P wave)
• Large cv waves (cannon a waves): CHB (P fires into closed tricuspid), VT (AV dissociation)
• Large v waves: TR, acute MR (v wave in PCWP trace), VSD
• Absent Y descent: tamponade (restricted filling; distinguish from constrictive where Y is prominent)

HEART SOUND ABNORMALITIES:
• Loud P2: pulmonary hypertension
• Fixed split S2: ASD (RV volume overload throughout breathing cycle)
• Paradoxical split S2: LBBB, severe AS, HCM (A2 delayed)
• Friction rub: pericarditis (3-component: atrial systole + ventricular systole + diastole); best heard leaning forward

DYNAMIC AUSCULTATION (murmur changes):
• Valsalva (↓preload): HOCM ↑ (obstruction worsens), MVP ↑ (click moves earlier); AS/MR/TR ↓
• Squatting (↑preload): HOCM ↓, MVP ↓ (click moves later); AS/MR/TR ↑
• Standing (↓preload): HOCM ↑; most murmurs ↓
• Inspiration: right-sided murmurs ↑ (Carvallo's sign for TR), Kussmaul's sign for RV failure/constrictive pericarditis`,
    workup: `• TTE: confirm clinical exam findings; quantify murmur severity; LVEF; RV function
• EKG: LAE/RAE, LVH/RVH, AV block, arrhythmia
• BNP/NT-proBNP: HF (↑with S3/elevated JVP)
• CXR: cardiomegaly, pulmonary vascular congestion, pleural effusions
• Echo Doppler: valve gradients and areas; severity grading of murmurs

TELEMETRY INDICATIONS:
• Mandatory: ACS, cardiac arrest, post-PCI, CHB or Mobitz II, new LBBB, post-cardiac surgery, severe electrolyte abnormality
• Recommended: ADHF, new antiarrhythmic initiation, syncope with ischemic risk factors, AF with RVR, overdose with cardiac risk
• Routine monitoring: ≥2 CHADS-VASc risk factors, stroke/TIA, post-electrophysiology procedure`,
    management: `ELEVATED JVP WITH PRESERVED EF: diuretics; evaluate for constrictive pericarditis (pericardiectomy) vs. cardiac tamponade (pericardiocentesis)
PULSUS PARADOXUS (>10mmHg): cardiac tamponade → STAT echo + pericardiocentesis if hemodynamically compromised
NEW SIGNIFICANT MURMUR:
• TTE urgently (same admission): confirm severity, anatomy, LVEF impact
• Severe AS with symptoms: TAVR/SAVR evaluation (do not delay)
• Acute MR/TR: evaluate for mechanical complication post-MI (papillary muscle)
• New aortic regurgitation: evaluate for aortic dissection (CTA chest)`,
    monitoring: `• Telemetry waveform quality: lead placement, artifact reduction (electrode placement, skin prep)
• Alarm fatigue: set appropriate rate alarms per patient baseline; disable unnecessary alarms to preserve clinical significance
• Strip documentation: print rhythm strips for any concerning arrhythmia + annotate clinical context`,
    disposition: `• CCU/ICU: hemodynamically significant new murmurs, pulsus paradoxus >20mmHg, tamponade
• Cardiology consult: new murmurs requiring echo, significant arrhythmias on telemetry
• Electrophysiology: complex arrhythmias requiring EP study or ablation`
  },

  // ════════════════════ PULM/CCM — NEW TEMPLATES ════════════════════

  {
    id: "respiratory-distress",
    system: "pulm",
    title: "Respiratory Distress — Approach and Triage",
    keywords: ["respiratory distress","dyspnea","shortness of breath","tachypnea","hypoxemia","work of breathing","rapid response","stridor","wheezing","respiratory failure triage"],
    source: { chapter: "Pulmonary & Critical Care", section: "Respiratory Distress", pages: "39", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Respiratory distress ≠ dyspnea: distress is objective (RR ≥20, retractions, diaphoresis, cyanosis); dyspnea is subjective — look at the patient and count the rate yourself",
        "Call Rapid Response x6-3333 early; red flags for RICU STAT: SpO2 <80%, pooling secretions, hemoptysis, severe hypercapnia despite BiPAP, RR >35, tiring out",
        "DYSPNEA DDx: CV (MI/HF/PE/tamponade/PHT), AIRWAYS (asthma/COPD/anaphylaxis/VCD/angioedema), ALVEOLI (edema/PNA/hemorrhage), PLEURAL (effusion/PTX), CNS (CVA/toxin/metabolic acidosis)",
        "NRB mask delivers FiO2 60-90% and is the best first step for acute hypoxia — always start high and titrate down",
        "Target SpO2 91-96% generally; 88-92% for hypercapnic/COPD/OHS; ~100% for CO poisoning, sickle cell crisis, pneumothorax"
      ]
    },
    assessment: `#Respiratory Distress — Triage Assessment
SpO2: ***%  RR: ***  HR: ***  BP: ***  T: ***
Work of breathing: [ ] Mild  [ ] Moderate  [ ] Severe — retractions [ ] / diaphoresis [ ] / tripod [ ] / cyanosis [ ] / AMS [ ]
Airway: [ ] Patent  [ ] At risk (secretions/AMS/pooling)
RED FLAGS for RICU STAT: SpO2 <80% [ ] / Hemoptysis [ ] / Pooling secretions [ ] / Severe hypercapnia despite BiPAP [ ] / RR >35 [ ]
Dyspnea DDx category: [ ] CV  [ ] Airways  [ ] Alveolar  [ ] Pleural  [ ] CNS/metabolic  [ ] Other
Current O2: *** L/min via *** (FiO2 approx. ***)
Intubation needed: [ ] Imminent  [ ] Likely  [ ] Not yet — monitoring`,
    ddx: `CV: MI, ADHF, VHD, arrhythmia, cardiac tamponade, PE, pulmonary HTN
AIRWAYS: Asthma exacerbation, AECOPD, mucus plug, anaphylaxis, angioedema, vocal cord dysfunction, foreign body, Ludwig's angina
ALVEOLI: Pulmonary edema, PNA (bacterial/viral), ARDS, DAH, aspiration
PLEURAL: Large effusion, pneumothorax (tension or spontaneous), hemothorax
CNS/METABOLIC: CVA (posterior circulation), CO/ASA/BZD/opioid toxicity, metabolic acidosis (sepsis/DKA/uremia), hypothyroidism
NEUROMUSCULAR: ALS, GBS, MG, high cervical SCI, phrenic nerve paralysis
OTHER: Severe anemia, massive ascites, obesity hypoventilation, anxiety/panic (diagnosis of exclusion)`,
    workup: `IMMEDIATE (first 5 minutes):
• SpO2, RR (count yourself), HR, BP — do not trust nursing documentation of RR
• Place supplemental O2: NRB mask first (FiO2 60-90%) → titrate down when stable
• Focused exam: breath sounds (wheeze/crackles/absent), JVP, skin (diaphoresis/cyanosis/livedo), airway (drooling/stridor/edema)
URGENT:
• ABG or VBG: PaO2, PaCO2, pH — assess type 1 vs type 2 failure; A-a gradient
• CXR (portable): infiltrate, PTX, effusion, cardiomegaly, mediastinal shift
• EKG: PE pattern, ACS, arrhythmia
• BMP: metabolic acidosis (anion gap), BUN/Cr (uremia), K+
• BNP/NT-proBNP: cardiogenic vs non-cardiogenic
• CBC, troponin, D-dimer (if PE concern)
• Bedside echo (POCUS): LV function, pericardial effusion, RV:LV ratio (PE), B-lines (pulmonary edema), pleural effusion`,
    management: `INITIAL STABILIZATION:
• Sit patient upright (improves FRC, reduces WOB)
• O2: NRB mask 10-15 L/min (FiO2 60-90%) → titrate SpO2 to 91-96%
  - Hypercapnic risk (COPD/OHS/NM disease): target 88-92%; high flow can worsen hypercapnia
• IV access x2; basic labs (see above)
• Call Rapid Response if: not improving, RR >25, SpO2 <92% on NRB, AMS
ESCALATION PATHWAY (if not improving on NRB):
• HFNC (High Flow Nasal Cannula): 30-60 L/min, FiO2 up to 100% — better tolerated than NIV; trial for hypoxemic failure if no hypercapnia
• NIPPV/BiPAP: hypercapnic failure (COPD, OHS, pulmonary edema) — reduces intubation need; not if AMS/unable to protect airway
• Intubation: call RICU x6-3333 (STAT RICU) for: SpO2 <80%, rising pCO2 + acidosis despite BiPAP, AMS, exhaustion, hemoptysis
CAUSE-SPECIFIC: see individual templates (Asthma, AECOPD, PE, ADHF, ARDS, etc.)`,
    monitoring: `• SpO2 and RR continuously until stable; titrate O2 to maintain target saturation
• VBG or ABG 30-60 min after any major O2/ventilation change
• Reassess work of breathing clinically every 15-30 min: improving or worsening trajectory determines escalation
• If HFNC/BiPAP: ROX index (SpO2/FiO2)/RR — if <4.88 after 2-12h on HFNC = high failure risk → intubate`,
    disposition: `• ICU/RICU: SpO2 <92% on NRB or HFNC, hypercapnia, AMS, RR >30, hemoptysis, bilateral lung disease, requires BiPAP
• Step-down/telemetry: stable on NC/FM <6L, improving trajectory
• Pulm/RICU consult: any patient requiring >40% FiO2 to maintain SpO2 ≥92%`
  },

  {
    id: "hypoxemia-hypercapnia",
    system: "pulm",
    title: "Hypoxemia & Hypercapnia — Pathophysiology and ABG Interpretation",
    keywords: ["hypoxemia","hypercapnia","respiratory failure","ABG","A-a gradient","shunt","VQ mismatch","diffusion limitation","PaO2","PaCO2","P to F ratio","type 1 respiratory failure","type 2 respiratory failure","alveolar gas equation"],
    source: { chapter: "Pulmonary & Critical Care", section: "Hypoxemia & Hypercapnia", pages: "40", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Type 1 (hypoxemic): PaO2 <60 mmHg — V/Q mismatch (most common), shunt (cardiac or pulmonary), diffusion limitation, low FiO2",
        "Type 2 (hypercapnic): PaCO2 >45 mmHg — hypoventilation (reduced drive, muscle weakness, obstruction); PaO2 often low secondary to CO2 displacing O2",
        "A-a gradient = Alveolar PO2 − arterial PO2; Alveolar PO2 = FiO2×(760−47) − PaCO2/0.8; Normal = age/4 + 4",
        "Elevated A-a gradient + corrects with 100% O2 = V/Q mismatch; does NOT correct = shunt (R→L cardiac, AVM, massive PNA/ARDS)",
        "P:F ratio (PaO2/FiO2): normal ≥400; ARDS if <300; surrogate for A-a gradient at bedside without ABG calculation"
      ]
    },
    assessment: `#Hypoxemia / Hypercapnia — ABG Interpretation
SpO2: ***%  (SpO2 90% ≈ PaO2 60 mmHg)
ABG: pH *** / PaCO2 *** / PaO2 *** / HCO3 *** / FiO2 ***
P:F Ratio: PaO2/FiO2 = *** (normal ≥400; ARDS <300)
Alveolar PO2 (PAO2): FiO2 × (760−47) − PaCO2/0.8 = ***
A-a gradient: PAO2 − PaO2 = *** (normal = age/4 + 4 = *** mmHg)
Normal A-a? [ ] Yes → hypoventilation or low FiO2  [ ] No (elevated) → intrinsic lung pathology
If elevated A-a: Corrects with 100% O2? [ ] Yes → V/Q mismatch  [ ] No → shunt
Failure type: [ ] Type 1 (hypoxemic — PaO2 <60)  [ ] Type 2 (hypercapnic — PaCO2 >45)  [ ] Mixed`,
    ddx: `HYPOXEMIA (elevated A-a, corrects with O2 → V/Q MISMATCH):
• PNA, pulmonary edema/ADHF, COPD, asthma, ILD, PE — O2 supplementation partially effective
HYPOXEMIA (elevated A-a, does NOT correct → SHUNT, R→L):
• Intracardiac shunt (ASD, VSD, PFO), pulmonary AVM, consolidated lung (PNA/ARDS) — requires PEEP; supplemental O2 limited benefit
HYPOXEMIA (normal A-a → HYPOVENTILATION or LOW FiO2):
• Opioid/sedative OD, central hypoventilation, NM weakness (GBS, MG, ALS), obesity hypoventilation, high altitude
HYPERCAPNIA (Type 2 respiratory failure):
• Reduced respiratory drive: opioid, BZD, CNS lesion (CVA/tumor), metabolic alkalosis (CO2 retention to compensate)
• Increased WOB/pump failure: COPD, severe asthma, NM disease, chest wall restriction, obesity hypoventilation
• Increased dead space: PE, ARDS, COPD — ventilation going to non-perfused areas`,
    workup: `• ABG (required for precise analysis): pH, PaCO2, PaO2, HCO3, FiO2 at time of draw
• VBG (acceptable for pH and pCO2 screening): add 0.05 to VBG pH, add 5-6 mmHg to VBG pCO2 for approximate ABG
• CXR: consolidation (shunt), hyperinflation (COPD/asthma), pulmonary edema
• Echo/POCUS: cardiac function, RV:LV ratio, B-lines, shunt (bubble study)
• Spirometry/PFTs: obstructive vs restrictive pattern
• CT chest/CTPA: if PE, ILD, or mass suspected`,
    management: `TYPE 1 (HYPOXEMIC):
• O2 supplementation: NC (FiO2 24-44%), simple mask (40-60%), NRB (60-90%), HFNC (up to 100%)
• HFNC (High Flow Nasal Cannula): 30-60 L/min — first-line escalation for hypoxemic failure; provides CPAP effect; reduces intubation need vs standard O2 in non-hypercapnic patients (NEJM 2015;372:2185)
• For shunt: PEEP (via BiPAP/mechanical ventilation) to recruit atelectatic alveoli; O2 supplementation less effective
TYPE 2 (HYPERCAPNIC):
• NIV/BiPAP: first-line for acute hypercapnic failure (COPD, OHS); reduces intubation and mortality
• IPAP/EPAP settings: start IPAP 10-14 cmH2O, EPAP 4-6 cmH2O; titrate by 2-4 cmH2O to reduce pCO2 and WOB
• Reverse precipitant: naloxone (opioid OD), neostigmine (MG), treat infection (COPD)
• If BiPAP failing (rising pCO2, AMS, exhaustion): intubate — permissive hypercapnia acceptable in COPD if pH >7.20`,
    monitoring: `• ABG or VBG 30-60 min after every significant O2/ventilation change
• ROX index (SpO2/FiO2)/RR for HFNC monitoring: <4.88 at 2-12h = high failure risk → consider BiPAP or intubation
• For BiPAP: tolerance, air leak, RR, mental status, repeat VBG at 1-2h
• SpO2 and RR continuously`,
    disposition: `• ICU: type 2 failure requiring BiPAP or intubation, worsening despite HFNC, shunt physiology
• Step-down: stable HFNC or improving with supplemental O2
• Pulmonology: new ILD, unexplained hypoxemia, chronic hypercapnia management`
  },

  {
    id: "noninvasive-oxygenation-ventilation",
    system: "pulm",
    title: "Noninvasive Oxygenation and Ventilation (HFNC / CPAP / BiPAP)",
    keywords: ["HFNC","high flow nasal cannula","BiPAP","CPAP","noninvasive ventilation","NIV","NIPPV","oxygen delivery","nasal cannula","NRB","nonrebreather","supplemental oxygen","IPAP EPAP","optiflow"],
    source: { chapter: "Pulmonary & Critical Care", section: "Noninvasive Oxygenation/Ventilation", pages: "41", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Nasal cannula: FiO2 increases by 0.04 per L/min (1L=24%, 2L=28%, 6L=44%); simple face mask 40-60%; NRB 60-90% at 10-15L/min",
        "HFNC (Optiflow/Vapotherm): 30-60 L/min; FiO2 up to 100%; provides ~1 cmH2O PEEP per 10L/min flow; heats and humidifies — reduces intubation vs standard O2 in hypoxemic non-hypercapnic patients (FLORALI: NEJM 2015;372:2185)",
        "BiPAP/NIPPV: IPAP drives ventilation (reduces pCO2), EPAP = PEEP (improves oxygenation); reduces intubation in COPD exacerbation (NEJM 1995;333:817) and cardiogenic pulmonary edema",
        "BiPAP contraindications: hemodynamic instability, AMS/inability to protect airway, facial trauma, active vomiting, copious secretions, inability to tolerate mask — intubate instead",
        "ROX index = (SpO2/FiO2)/RR: value <4.88 at 2, 6, or 12h on HFNC = high risk of needing intubation"
      ]
    },
    assessment: `#Noninvasive Oxygenation/Ventilation
Current O2 delivery: ***
HFNC eligibility: Hypoxemic failure [ ] / Tolerating mask [ ] / Protecting airway [ ] / No hypercapnia [ ]
BiPAP eligibility: Hypercapnic failure (COPD/OHS/CPE) [ ] / Awake/cooperative [ ] / No vomiting [ ] / Hemodynamically stable [ ]
BiPAP settings: IPAP *** cmH2O / EPAP *** cmH2O / FiO2 *** / RR backup ***
HFNC settings: Flow *** L/min / FiO2 ***%
ROX index (for HFNC): (SpO2/FiO2)/RR = *** (>4.88 = lower risk; <4.88 = consider escalation)
Response: SpO2 *** (before) → *** (after) / RR *** → *** / WOB *** → ***`,
    ddx: `INDICATION MATCHING:
• Hypoxemic non-hypercapnic (PNA, ARDS, ADHF): HFNC first → BiPAP/CPAP if failing
• Hypercapnic (AECOPD, OHS, NM disease, CPE): BiPAP first-line — IPAP drives tidal volumes
• Cardiogenic pulmonary edema: CPAP (5-10 cmH2O) or BiPAP — reduces afterload, improves oxygenation
• Immunocompromised (post-transplant, heme malignancy): HFNC reduces ICU admission (NEJM 2015;372:2185)
• Post-extubation: HFNC ↓ reintubation risk vs conventional O2 (NEJM 2016;375:1919)
FAILURE INDICATORS (escalate/intubate):
• SpO2 not improving to ≥92%, RR not decreasing, WOB worsening
• AMS/agitation, inability to clear secretions, hemodynamic instability
• ROX index <4.88 at 2-12h on HFNC`,
    workup: `• VBG or ABG 1h after initiating HFNC/BiPAP: confirm pH, pCO2 improving
• SpO2 and RR continuously; titrate FiO2 to target saturation
• CXR: confirm tube/mask position; assess underlying cause`,
    management: `O2 DELIVERY DEVICE SELECTION (escalation ladder):
1. Nasal cannula (NC): 1-6 L/min, FiO2 24-44% — mild hypoxemia, tolerates eating/speaking
2. Simple face mask: 6-10 L/min, FiO2 40-60% — moderate hypoxemia
3. Non-rebreather mask (NRB): 10-15 L/min, FiO2 60-90% — best first step for acute severe hypoxemia
4. HFNC (Optiflow): 30-60 L/min, FiO2 21-100% — hypoxemic failure not responding to NRB; provides warmth + humidification
   - Start: 30-40 L/min flow, FiO2 60-80%; titrate up for SpO2 <92%
   - ROX index every 2h: <4.88 = consider NIV or intubation
5. BiPAP/NIPPV: hypercapnic failure, AECOPD, OHS, cardiogenic pulmonary edema
   - Start: IPAP 10 cmH2O, EPAP 5 cmH2O, FiO2 30-40%; titrate IPAP ↑ by 2 q15-30 min for pCO2/WOB
   - Typical range: IPAP 12-20, EPAP 4-8; backup rate 10-12 BPM
   - Reassess with VBG at 1-2h; tolerance at 30-60 min
BiPAP FOR SPECIFIC INDICATIONS:
• AECOPD: IPAP 12-16, EPAP 4-5 — titrate to reduce pCO2 and pH toward 7.35
• Cardiogenic pulmonary edema: CPAP 5-10 cmH2O or BiPAP IPAP 10-14/EPAP 5-8 — reduces preload/afterload
• OHS/OSA: higher EPAP needed (6-10 cmH2O) to stent airway`,
    monitoring: `• SpO2 and RR continuously; target SpO2 91-96% (88-92% for hypercapnic patients)
• VBG at 1-2h after BiPAP initiation; repeat every 2-4h if adjusting settings
• ROX index every 2h on HFNC — trend over time
• Mask fit/tolerance: air leak (ear/nose pain, eye dryness), claustrophobia — optimize before abandoning NIV
• Pressure injury: nasal bridge protection if using full-face mask (duoderm)`,
    disposition: `• ICU: BiPAP with worsening or no improvement at 1-2h; ROX <4.88 on HFNC; hemodynamic instability
• Step-down: improving on HFNC or BiPAP with stable hemodynamics
• Consider intubation early if: AMS, hemodynamic instability, secretion burden, mask intolerance with worsening failure`
  },

  {
    id: "chest-imaging-interpretation",
    system: "pulm",
    title: "Chest Imaging Interpretation (CXR / CT)",
    keywords: ["chest X-ray","CXR","chest imaging","CT chest","HRCT","consolidation","infiltrate","pneumothorax","pleural effusion","cardiomegaly","mediastinum","silhouette sign","ground glass","honeycombing","CXR approach","ABCDEF"],
    source: { chapter: "Pulmonary & Critical Care", section: "Interpretation of Chest Imaging", pages: "42", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "ABCDEF CXR approach: Airway, Bones/soft tissue, Cardiac silhouette, Diaphragm, Effusions, Fields/Foreign bodies — always compare to prior",
        "Silhouette sign: loss of normal cardiac or mediastinal border indicates adjacent density (RML PNA obscures right heart border; LLL PNA obscures left hemidiaphragm)",
        "Pneumothorax: pleural line + absent lung markings peripherally; tension PTX = contralateral tracheal deviation + ipsilateral hemidiaphragm depression; mediastinal shift",
        "HRCT patterns: UIP (honeycombing + traction bronchiectasis + basal/subpleural → IPF); NSIP (bilateral GGO + lower lobe → CTD-ILD); crazy paving (GGO + septal thickening → PCP, pulmonary edema, adenocarcinoma)",
        "PA diameter of main pulmonary artery ≥29mm on CT: 97% PPV for pulmonary hypertension"
      ]
    },
    assessment: `#Chest Imaging Interpretation
Film type: [ ] PA  [ ] AP (portable — larger cardiac silhouette, ↑false cardiomegaly)  [ ] Lateral
CXR systematic review (ABCDEF):
A — Airway: trachea midline [ ] / deviated [ ] / ETT position *** cm above carina [ ]
B — Bones/soft tissue: rib fractures [ ] / subcutaneous air [ ]
C — Cardiac: CTR *** (<0.5 = normal on PA); mediastinum width *** (<8cm normal); widened [ ]
D — Diaphragm: L lower than R [ ] / flat (emphysema) [ ] / free air under R hemidiaphragm [ ]
E — Effusions: CP angle blunting [ ] / large ( > *** cm) [ ] / layering [ ]
F — Fields: [ ] Clear  [ ] Consolidation (lobar/segmental) location: ***  [ ] Ground glass  [ ] Diffuse bilateral  [ ] Unilateral
    Silhouette sign: *** (R heart border → RML; L hemidiaphragm → LLL; L heart border → lingula)
    [ ] Pneumothorax: [ ] Right  [ ] Left  [ ] Tension (tracheal deviation + mediastinal shift)
Tubes/lines: ETT ___ cm / NGT *** / CVC tip ***`,
    ddx: `CONSOLIDATION / AIRSPACE OPACITY:
• Lobar/segmental: bacterial PNA (Strep pneumo), aspiration (gravity-dependent), lung contusion
• Bilateral/diffuse: ARDS (bilateral + non-cardiogenic), cardiogenic pulmonary edema (perihilar "bat wing"), DAH (bilateral GGO), PCP (bilateral GGO + low CD4)
• Atelectasis: linear (subsegmental) vs lobar (loss of volume + displaced fissure)

INTERSTITIAL / GROUND GLASS OPACITY (CT patterns):
• GGO bilateral: pulmonary edema, PCP (PJP), viral PNA, eosinophilic pneumonia, NSIP
• Honeycombing + traction bronchiectasis, basal/subpleural: UIP/IPF
• Crazy paving (GGO + septal thickening): PCP, edema, lipoid PNA, adenocarcinoma, COVID-19
• Nodules: metastases (cannon ball), miliary TB, fungal, sarcoid (upper lobe, perilymphatic), hypersensitivity (centrilobular GGO)

PLEURAL:
• Unilateral effusion: parapneumonic, malignancy, TB, hemothorax
• Bilateral effusion: CHF (right ≥ left), cirrhosis, nephrotic
• Loculated effusion: doesn't shift on decubitus — empyema or organizing hemothorax

MEDIASTINUM:
• Widened (>8cm): aortic dissection/hematoma, LAD (lymphoma/sarcoid), goiter
• Anterior mass: 4 Ts — Thymoma, Teratoma/germ cell, Terrible lymphoma, Thyroid`,
    workup: `• Compare to PRIOR films — most important step in interpretation
• CT chest with contrast: characterize mediastinal/hilar pathology, vascular structures, PE (CTPA), pleural processes
• HRCT (no contrast, <2mm): diffuse lung disease — ILD, bronchiectasis, emphysema; includes expiratory, prone, and supine sequences
• CT angiography (CTPA): PE (with rapid contrast injection); main PA diameter assessment for pHTN
• Ultrasound (pleural): confirm free-flowing effusion before thoracentesis; differentiate transudates/exudates is clinical`,
    management: `PTX: small/stable → observation; large (>3 cm apex to cupola on PA) or symptomatic → needle aspiration or chest tube; TENSION PTX → immediate needle decompression (2nd ICS MCL) + chest tube
PULMONARY EDEMA (bilateral/perihilar): diuresis, afterload reduction (see ADHF template)
LOBAR ATELECTASIS: incentive spirometry, chest PT, bronchoscopy if mucus plug; position change (unaffected side down)
LARGE EFFUSION: thoracentesis (diagnostic and/or therapeutic) if >1 cm on lateral decubitus
CONCERNING MASS/NODULE: follow up CT, PET scan, tissue biopsy if high suspicion`,
    monitoring: `• Daily portable CXR in ICU: ETT position (3-5 cm above carina), central line tip (SVC/cavoatrial junction), PTX after procedures
• Serial CXR to track progression: PNA (should improve by 6 weeks), ARDS (bilateral opacity progression), effusion size
• HRCT: not for serial monitoring (radiation); used once for diagnosis, then clinical/PFT tracking`,
    disposition: `• Pulmonology: new ILD (HRCT + multidisciplinary discussion), complex effusion, unexplained mediastinal mass
• CT surgery/interventional radiology: empyema, complex PTX, lung mass requiring biopsy
• RICU: large PTX with hemodynamic compromise (tension), ARDS with bilateral opacities`
  },

  {
    id: "bronchiectasis-hemoptysis",
    system: "pulm",
    title: "Bronchiectasis / Hemoptysis / DAH",
    keywords: ["bronchiectasis","hemoptysis","massive hemoptysis","diffuse alveolar hemorrhage","DAH","CF","cystic fibrosis","MAC","bronchial artery embolization","BAE","signet ring sign","tram track","non-tuberculous mycobacteria"],
    source: { chapter: "Pulmonary & Critical Care", section: "Bronchiectasis & Hemoptysis", pages: "45", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Bronchiectasis CT criteria: bronchial diameter > adjacent pulmonary artery (signet-ring sign), lack of bronchial tapering (tram-track sign), or visible airways in lung periphery",
        "Hemoptysis causes: bronchiectasis/CF most common, followed by lung cancer, TB, PNA, fungal/Aspergillus — massive (>200-600mL/24h) = life-threatening; protect airway",
        "Massive hemoptysis management: position with bleeding side DOWN, rigid bronchoscopy + BAE (bronchial artery embolization) for definitive hemostasis; intubate large ETT (≥8mm) if needed",
        "Diffuse alveolar hemorrhage (DAH): hemoptysis + bilateral opacities + progressive BAL (serial washes show increasing blood); capillaritis from vasculitis/AI disease → pulse-dose steroids",
        "Bronchiectasis acute exacerbation: change in ≥3 of cough/sputum purulence/dyspnea/fatigue/hemoptysis — send sputum cx before antibiotics (Pseudomonas and NTM common)"
      ]
    },
    assessment: `#Bronchiectasis / Hemoptysis
HEMOPTYSIS:
Volume: *** mL (mild <30mL/24h; moderate 30-200mL; massive >200-600mL/24h — life-threatening)
Active bleeding: [ ] Yes  [ ] No  |  Color: [ ] Bright red  [ ] Dark red  [ ] Pink frothy (pulm edema — not true hemoptysis)
Position: bleeding side down? [ ] Yes (protect non-bleeding lung)
Airway compromised: [ ] Yes → intubate (≥8mm ETT) and position  [ ] No → monitor
BRONCHIECTASIS EXACERBATION:
Symptoms changed: cough [ ] / sputum purulence/volume [ ] / dyspnea [ ] / fatigue [ ] / hemoptysis [ ]
Sputum culture last result: ***  | Recent hospitalization: ***
Baseline FEV1: *** | Current FEV1: ***
Prior organisms: [ ] Pseudomonas  [ ] NTM (MAC)  [ ] MRSA  [ ] Aspergillus (ABPA)`,
    ddx: `HEMOPTYSIS CAUSES (by frequency in adults):
• Bronchiectasis/CF — most common cause of massive hemoptysis; friable bronchial arteries
• Lung cancer — unilateral hemoptysis in smoker >40 years; CT mass
• Infection: TB (upper lobe cavitation), PNA (bacterial + viral), lung abscess, aspergilloma ("fungus ball")
• Tracheobronchitis — common cause of blood-tinged sputum
• PE with pulmonary infarction — pleuritic pain + hemoptysis + DVT risk factors
• Vasculitis/AI: GPA (saddle nose, sinusitis), microscopic polyangiitis, anti-GBM/Goodpasture, SLE

PSEUDO-HEMOPTYSIS: pink frothy = pulmonary edema; brown/dark = UGI bleed or epistaxis; confirm source

BRONCHIECTASIS ETIOLOGY:
• Post-infectious: prior severe PNA, TB, childhood whooping cough, measles
• CF (bilateral upper lobe + mucus plugging), ABPA (central bronchiectasis + eosinophilia + IgE)
• Immunodeficiency: CVID, IgA deficiency, HIV — recurrent infections → bronchiectasis
• CTD: RA, Sjogren's, IBD — consider in otherwise unexplained bronchiectasis
• NTM (MAC most common): bilateral nodular bronchiectasis, Lady Windermere syndrome (RML/lingula)`,
    workup: `HEMOPTYSIS:
• CXR: localize bleeding (consolidation, mass, cavitation, bilateral GGO for DAH)
• CT chest/CTA: localizes bleeding source; identifies endobronchial lesion, mass, pulmonary vasculature; CTA to plan BAE
• CBC, coagulation: anemia (severity/chronicity), coagulopathy
• Sputum cx + cytology; acid-fast bacilli smear and culture (TB/NTM)
• Bronchoscopy: rigid (therapeutic, massive hemoptysis) vs flexible (diagnostic, localizing source)
BRONCHIECTASIS:
• HRCT: signet-ring sign, tram-track sign, distribution (upper vs lower vs diffuse)
• PFTs: obstructive pattern (FEV1/FVC <0.7)
• Sputum culture (bacterial, fungal, AFB): before antibiotics; always include mycobacteria
• CBC/diff (eosinophilia → ABPA), total IgE + Aspergillus IgE (ABPA), ANA/RF/CCP, Ig levels, HIV, A1AT
• Consider CF testing (sweat chloride, genetics) if bilateral upper lobe disease or young patient`,
    management: `MASSIVE HEMOPTYSIS:
• Position: bleeding side DOWN (protects non-bleeding lung from aspiration)
• Large-bore ETT (≥8mm): if airway compromise; allows rigid bronchoscopy
• Correct coagulopathy: reverse anticoagulants, platelets if <50k, FFP if INR >1.5
• Bronchial Artery Embolization (BAE): IR procedure; definitive hemostasis in 80-90%; preferred over surgery
• Call interventional radiology (IR) and pulmonology simultaneously
• Vasopressin/terlipressin IV: temporizing measure for vasoconstruction
• Surgical resection: last resort; consider if BAE fails and single-lobe source confirmed
BRONCHIECTASIS ACUTE EXACERBATION:
• Send sputum culture first, then antibiotics
• Empiric: ciprofloxacin 750mg PO BID OR pip-tazo 4.5g IV q6h (if prior Pseudomonas or severe)
• Prior culture-directed if available
• Duration: 14 days
• Airway clearance: scheduled albuterol nebs + hypertonic saline 7% + HFCWO vest or oscillating PEP device
CHRONIC BRONCHIECTASIS MANAGEMENT:
• Long-term azithromycin 250mg 3x/week: reduces exacerbations but risks macrolide resistance
• Airway clearance devices (Acapella, Aerobika, Flutter, vest) — every patient
• NTM (MAC): multidrug regimen — azithromycin + rifampin + ethambutol ± aminoglycoside (ID consult)
DIFFUSE ALVEOLAR HEMORRHAGE (DAH):
• Pulse methylprednisolone 500-1000mg IV qday x3-5 doses if AI/vasculitis etiology
• Cyclophosphamide or rituximab for GPA/MPA/anti-GBM (rheumatology/nephrology consult)
• Reverse anticoagulation if coagulopathy-related`,
    monitoring: `• Hemoptysis: volume and frequency every shift; Hgb every 6-12h if significant bleeding
• Bronchiectasis: sputum culture results → de-escalate antibiotics; spirometry at follow-up
• DAH: serial CXR or CT; BAL serial washings (clearing = improvement); DLCO (sensitive for hemorrhage)`,
    disposition: `• ICU: massive hemoptysis, intubated, DAH with hemodynamic compromise
• IR: BAE for significant hemoptysis
• Pulmonology: ABPA (steroid protocol), NTM (multidrug therapy), severe bronchiectasis management
• CT surgery: surgical candidate with localized disease and failed BAE`
  },

  {
    id: "interstitial-lung-disease",
    system: "pulm",
    title: "Interstitial Lung Disease (ILD)",
    keywords: ["interstitial lung disease","ILD","IPF","idiopathic pulmonary fibrosis","NSIP","UIP","COP","hypersensitivity pneumonitis","CTD-ILD","nintedanib","pirfenidone","sarcoidosis","HRCT","honeycombing","velcro crackles"],
    source: { chapter: "Pulmonary & Critical Care", section: "Interstitial Lung Disease", pages: "46", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "IPF diagnosis: UIP pattern on HRCT (basal/subpleural honeycombing ± traction bronchiectasis) + exclusion of other causes; biopsy if HRCT indeterminate",
        "Anti-fibrotic therapy (IPF): nintedanib (BIBF 1120) 150mg BID or pirfenidone 2403mg/day — both reduce FVC decline by ~50%; neither reverses fibrosis",
        "CTD-ILD: scleroderma most common; nintedanib reduces progression; MMF, cyclophosphamide, rituximab for inflammatory subtypes (NSIP)",
        "Acute exacerbation of IPF: rapid deterioration with new bilateral GGO on background UIP; high mortality (40-65%); high-dose steroids often used empirically",
        "Transplant referral criteria: FVC <80% or DLCO <40% predicted; FVC decline ≥10% over 2 years; supplemental O2 at rest — refer early (IPF at time of diagnosis)"
      ]
    },
    assessment: `#Interstitial Lung Disease
Presentation: progressive dyspnea ± non-productive cough ± exertional hypoxemia (SpO2 at rest *** / 6MWT nadir ***)
Exam: [ ] Velcro crackles (bibasilar)  [ ] Clubbing  [ ] CTD features (heliotrope rash/Gottron's/sclerodactyly/sicca)
HRCT pattern: [ ] UIP (honeycombing/traction bronchiectasis/basal-subpleural) → IPF likely
             [ ] NSIP (bilateral GGO/reticulation/lower lobe/peribronchovascular) → CTD-ILD
             [ ] COP/organizing pneumonia (consolidation/migratory/"reverse halo")
             [ ] HP (centrilobular GGO/nodules/mosaic attenuation/upper lobe) → exposure history
PFTs: FVC ***% / DLCO ***% / FEV1/FVC ratio *** (restrictive = ↓FVC, ↓TLC, nl or ↑FEV1/FVC)
Etiology: [ ] IPF (idiopathic, UIP, age >60, male, smoker)  [ ] CTD-ILD: ***  [ ] HP: exposure ***  [ ] Drug-related: ***
         [ ] Sarcoidosis  [ ] ABPA  [ ] Other: ***`,
    ddx: `IDIOPATHIC:
• IPF (UIP): most common; male, >60yo, smoking history; honeycombing + traction bronchiectasis basal/subpleural; rapidly progressive; no treatment reverses
• NSIP: younger, female, often CTD; bilateral GGO lower lobe; better prognosis than IPF; steroid-responsive
• COP (Cryptogenic Organizing PNA): consolidation migratory pattern; "reverse halo" sign; steroid-responsive; good prognosis
• AIP (Acute Interstitial PNA): rapidly progressive ARDS-like; diffuse bilateral opacities; idiopathic ARDS
CTD-ILD: Scleroderma (most common, NSIP pattern), RA, polymyositis/DM (anti-synthetase, NSIP/UIP/COP), Sjogren's, MCTD, SLE
EXPOSURE-RELATED:
• Hypersensitivity pneumonitis (HP): organic antigens (bird droppings, mold, hay); centrilobular GGO + mosaic attenuation; acute (hours) vs chronic (months-years)
• Drug-induced: nitrofurantoin, MTX, amiodarone, bleomycin, immune checkpoint inhibitors (check PneumoTox)
GRANULOMATOUS: Sarcoidosis (upper lobe predominant, perilymphatic nodules, bilateral hilar LAD); ACE level; BAL lymphocytosis`,
    workup: `• HRCT (thin-section, no contrast): essential for pattern recognition; includes prone images (UIP vs NSIP)
• PFTs with DLCO: restriction (↓FVC, ↓TLC), ↓DLCO (alveolar destruction) — severity and progression
• 6-minute walk test: exertional O2 saturation, functional capacity
• Bronchoscopy with BAL: cellular differential (lymphocytosis → HP/sarcoid/NSIP; eosinophilia → EP; neutrophilia → IPF/acute infection); serial BAL for DAH
• Surgical lung biopsy (VATS): if HRCT indeterminate and clinical diagnosis uncertain; risk/benefit discussion
• Serologies: ANA, RF, anti-CCP, anti-Ro/La, anti-Scl-70, anti-MDA5, anti-Jo-1, anti-synthetase panel (CTD screen)
• ANCA (GPA/MPA), anti-GBM (if DAH concern)
• Exposure history review: birds, hot tubs, humidifiers, mold, occupational exposures
• Echo: pulmonary hypertension (RVSP) — common in ILD, worsens prognosis`,
    management: `IPF:
• Anti-fibrotics: nintedanib 150mg PO BID (check LFTs) OR pirfenidone 801mg PO TID with food (titrate up over 2 weeks)
• Supplement O2: >15h/day if SpO2 <88% at rest; ambulatory O2 if SpO2 ≤88% on 6MWT
• Lung transplant referral: at time of diagnosis — most die within 3-5 years without transplant
• Avoid: pirfenidone + fluvoxamine (CYP1A2); nintedanib + anticoagulants (bleeding risk); high-dose steroids alone in IPF (not effective, may harm)
• Acute exacerbation IPF: pulse methylprednisolone 500-1000mg IV qday x3; consider broad spectrum antibiotics (infectious trigger); high mortality
CTD-ILD:
• Inflammatory (NSIP): prednisone 0.5-1mg/kg/day; add AZA, MMF, cyclophosphamide, or rituximab for steroid-sparing
• Scleroderma-ILD: nintedanib + MMF; cyclophosphamide if progressive
• Anti-synthetase/DM: prednisone + AZA or tacrolimus
COP: Prednisone 0.75-1mg/kg/day x3-6 months; pulse methylpred if fulminant
HP: Remove inciting exposure (most important); steroids if not improving after removal
SARCOIDOSIS: Prednisone 20-40mg/day if symptomatic pulmonary disease, cardiac, CNS, or ocular involvement; methotrexate/hydroxychloroquine for steroid-sparing
DRUG-INDUCED ILD: Stop offending medication; steroids if moderate-severe and not improving after discontinuation`,
    monitoring: `• PFTs every 3-6 months: FVC trend (decline >10%/year = significant progression; transplant referral)
• DLCO decline ≥15%/2 years = significant; adds to transplant referral criteria
• 6MWT: functional status and exertional O2 supplementation need
• Echo annually: pulmonary hypertension development (RVSP >40mmHg warrants RHC)
• LFTs every 1-3 months on nintedanib or pirfenidone`,
    disposition: `• Pulmonology/ILD center: all new ILD diagnosis (multidisciplinary discussion — pulm/rheum/radiology/pathology)
• Lung transplant center: FVC <80% or DLCO <40%, IPF at diagnosis — early referral, do not wait until end-stage
• Rheumatology: CTD-ILD (co-management)
• Pharmacy review: PneumoTox database for drug-induced ILD`
  },

  {
    id: "vte-diagnostics-management",
    system: "pulm",
    title: "VTE — Diagnostics and Management (DVT / PE)",
    keywords: ["DVT","PE","pulmonary embolism","deep vein thrombosis","Wells score","PERC","D-dimer","CTPA","anticoagulation VTE","DOAC VTE","thrombolysis","massive PE","submassive PE","catheter directed thrombolysis","PERT","Wells criteria"],
    source: { chapter: "Pulmonary & Critical Care", section: "VTE Diagnostics / VTE Management", pages: "47–48", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Wells PE score: clinical DVT signs/sx (3), PE most likely (3), HR>100 (1.5), immobilization/surgery (1.5), prior DVT/PE (1.5), hemoptysis (1), malignancy (1) — low <2, moderate 2-6, high >6",
        "PERC rule (low pre-test probability): age <50, HR <100, SpO2 ≥95%, no leg swelling, no hemoptysis, no recent surgery/trauma, no prior VTE, no exogenous estrogen — all 8 negative = no D-dimer needed",
        "Massive PE (high-risk): hemodynamic instability (SBP <90 or drop ≥40) → systemic thrombolysis (tPA 100mg IV over 2h) or surgical embolectomy; ECMO if contraindicated",
        "Submassive PE (intermediate-high risk): RV dysfunction on TTE/CT + elevated troponin/BNP — PERT consult; catheter-directed thrombolysis (CDT) considered",
        "DOAC > VKA > LMWH for VTE treatment (DOAC first-line); cancer-associated VTE: DOAC > LMWH > VKA; duration ≥3 months; indefinite if unprovoked + low bleed risk"
      ]
    },
    assessment: `#VTE — DVT / PE Assessment
DVT symptoms: unilateral leg swelling [ ] / warmth [ ] / erythema [ ] / palpable cord [ ]
PE symptoms: dyspnea [ ] / pleuritic chest pain [ ] / hemoptysis [ ] / syncope [ ] / tachycardia [ ]
Wells PE score: *** (low <2 / moderate 2-6 / high >6)
PERC criteria met (all 8 negative)? [ ] Yes (no D-dimer needed if low pre-test prob)  [ ] No
PE SEVERITY:
[ ] Massive (HIGH-RISK): SBP <90 mmHg or drop ≥40 → systemic tPA immediately
[ ] Submassive (INTERMEDIATE): RV dysfunction + biomarkers → PERT consult, CDT consideration
[ ] Low-risk: hemodynamically stable, no RV dysfunction
Diagnostic studies: D-dimer ___ / CTPA [ ] ordered / Lower extremity US [ ] ordered
Current anticoagulation: ***`,
    ddx: `DVT MIMICS: cellulitis (bilateral, no cord), Baker cyst rupture (posterior knee swelling), superficial thrombophlebitis (palpable, painful superficial cord), lymphedema (non-pitting, chronic), post-thrombotic syndrome (chronic edema)
PE MIMICS: acute MI (pleuritic component unusual), pericarditis (friction rub, ST elevation), pneumothorax (sudden onset, absent BS), PNA (fever, consolidation on CXR), musculoskeletal pain
PE RISK STRATIFICATION (WHO classification):
• High risk (massive): hemodynamic instability → systemic thrombolysis or surgical embolectomy
• Intermediate-high: RV dysfunction (TTE/CT) + elevated troponin/BNP → ICU, PERT, consider CDT
• Intermediate-low: RV dysfunction OR biomarkers (not both) → inpatient monitoring
• Low risk: no RV dysfunction, normal biomarkers → early discharge (Hestia criteria)`,
    workup: `DVT:
• Compression duplex US (lower extremity): proximal DVT (popliteal + femoral + iliac) has clear treatment; distal DVT = serial imaging vs AC
• Upper extremity US: if arm swelling or PICC/CVC in place
PE:
• D-dimer: highly sensitive (>99%), poor specificity; use PERC or Wells first to determine if D-dimer appropriate; age-adjusted cutoff = age × 10 if >50 years
• CTPA (chest CTA with contrast): gold standard for PE; sensitivity >95%; assess RV:LV ratio >0.9 (RV strain)
• TTE/POCUS: RV dilation, McConnell's sign (apical sparing), septal bowing, RV:LV >0.9; confirms RV strain; not sensitive for PE itself
• BNP/NT-proBNP, troponin: elevated = submassive/high-risk; risk stratification
• EKG: S1Q3T3, sinus tach, RBBB, T-wave inversions V1-V4, right axis deviation
• V/Q scan: alternative if CTPA contraindicated (CKD, contrast allergy); indeterminate if abnormal CXR`,
    management: `MASSIVE PE (SBP <90 or drop ≥40):
• Systemic thrombolysis: tPA (alteplase) 100mg IV over 2h — monitor BP, neuro closely; ensure no contraindications
• If pulseless: TNK 50mg IV + CPR x15 min (ACLS PE protocol)
• Surgical embolectomy: if thrombolysis contraindicated/failed; CT surgery consult
• VA-ECMO: bridge if contraindication to thrombolysis or hemodynamic collapse
• Anticoagulate immediately: UFH 80 U/kg bolus → 18 U/kg/h infusion
SUBMASSIVE PE (RV dysfunction + biomarkers):
• PERT consult (PE Response Team) for multidisciplinary management
• UFH infusion (preferred over LMWH to allow rapid reversal)
• Catheter-directed thrombolysis (CDT): tPA 1-2mg/h per catheter x12-24h — lower dose, lower bleeding risk vs systemic
• Anticoagulation + close monitoring → transition to DOAC if stabilizes
LOW-RISK PE:
• DOAC: apixaban 10mg PO BID x7 days → 5mg PO BID OR rivaroxaban 15mg PO BID x21 days → 20mg PO qday
• Enoxaparin (LMWH): 1mg/kg SQ BID (preferred in malignancy, pregnancy, renal failure CrCl <30)
• UFH gtt: active bleeding risk, hemodynamic instability (allow rapid reversal), thrombolysis planned
ANTICOAGULATION DURATION:
• Provoked (surgery/trauma): 3 months
• Provoked (hormonal/prolonged immobility): 3 months
• 1st unprovoked: 3+ months, reassess bleed risk before extending
• Recurrent or non-modifiable RF: indefinite (if low bleed risk)
• Active malignancy: DOAC preferred (rivaroxaban or edoxaban); 6-12 months minimum or until cancer resolved
DVT TREATMENT: proximal DVT → anticoagulate (same as PE); distal DVT → serial imaging OR AC (see above)`,
    monitoring: `• Massive/submassive PE: hemodynamics every 1-4h; serial TTE at 24-48h; troponin/BNP trends
• CTPA post-thrombolysis: not routine; repeat if symptoms worsen
• LMWH anti-Xa levels: obesity (>100kg), CKD, pregnancy — target 0.6-1.0 IU/mL (q12h dosing) or 1.0-2.0 (qday)
• For UFH: aPTT every 6h until therapeutic (60-100 sec) then q24h`,
    disposition: `• ICU: massive PE (thrombolysis/ECMO), submassive PE with hemodynamic instability or requiring CDT
• Step-down/floor: submassive PE with stable hemodynamics after UFH/monitoring
• PERT consult: intermediate-high risk PE at MGH (x47378)
• Early discharge (Hestia criteria): low-risk PE (negative Hestia criteria) on DOAC — pulmonary follow-up`
  },

  {
    id: "pulmonary-hypertension",
    system: "pulm",
    title: "Pulmonary Hypertension",
    keywords: ["pulmonary hypertension","pHTN","PAH","WHO group","right heart catheterization","RHC","mPAP","PVR","phosphodiesterase inhibitor","ERA","prostacyclin","sildenafil","ambrisentan","bosentan","tadalafil","PCWP","VA/Q"],
    source: { chapter: "Pulmonary & Critical Care", section: "Pulmonary Hypertension", pages: "49", authors: "Kristin Harrington, Alexander Jacobs",
      keyFacts: [
        "Definition: mPAP ≥20 mmHg on right heart catheterization; pre-capillary: PVR >2 Wood units + PCWP ≤15 (PAH or WHO group 3/4/5); post-capillary: PCWP >15 (WHO group 2 = left heart disease)",
        "WHO groups: 1 PAH (idiopathic/heritable/drug/CTD/HIV/PoPH/CHD), 2 Left heart disease (most common), 3 Lung disease/hypoxia, 4 CTEPH (chronic thromboembolic), 5 Multifactorial",
        "Gold standard diagnosis: RHC ± iNO vasoreactivity testing (positive response = mPAP drops ≥10mmHg to <40mmHg without fall in CO → trial CCB)",
        "PAH treatment: dual oral therapy first-line (ERA + PDE5i); IV/SQ prostacyclin for high-risk; goal NT-proBNP <300, NYHA I-II, 6MWT >440m",
        "Acute decompensation: avoid hypoxia (maintain SpO2 >90%), optimize volume, avoid intubation if possible (PPV → ↑PVR → RV death spiral); inhaled iNO/epoprostenol as bridge"
      ]
    },
    assessment: `#Pulmonary Hypertension
Diagnosis confirmed: [ ] TTE (RVSP *** mmHg; TR velocity *** m/s)  [ ] RHC (mPAP *** / PCWP *** / CO *** / PVR ***)
WHO Group: [ ] 1 PAH  [ ] 2 Left heart (↑PCWP)  [ ] 3 Lung disease/hypoxia  [ ] 4 CTEPH  [ ] 5 Multifactorial
Functional Class: [ ] WHO/NYHA I  [ ] II  [ ] III  [ ] IV
6MWT: *** m | NT-proBNP: *** | Troponin: ***
Symptoms: dyspnea on exertion [ ] / syncope [ ] / chest pain [ ] / exertional symptoms only [ ]
Current medications: ***
Decompensation: [ ] New hypoxia  [ ] Increasing edema  [ ] Syncope  [ ] Hemodynamic compromise`,
    ddx: `ETIOLOGY (WHO CLASSIFICATION):
Group 1 PAH: idiopathic (iPAH), heritable (BMPR2 mutation), drug/toxin (methamphetamine, cocaine, dasatinib), CTD (scleroderma >>SLE), HIV, portopulmonary HTN (liver disease), CHD (Eisenmenger)
Group 2 Left heart disease: most common overall cause of elevated RVSP on TTE; diastolic dysfunction, mitral/aortic disease, HFpEF/HFrEF — PCWP >15 distinguishes from Group 1
Group 3 Lung/hypoxia: COPD (most common in group 3), ILD, sleep apnea, obesity hypoventilation, living at altitude
Group 4 CTEPH: chronic thromboembolic — surgical endarterectomy potentially curative; CT angiography (mosaic perfusion, pruning, webs)
Group 5 Multifactorial: sarcoidosis, myeloproliferative, metabolic disorders
ACUTE DECOMPENSATION TRIGGERS: hypoxia, infection, arrhythmia (especially AFib), volume overload, missed medications, thyroid disease`,
    workup: `INITIAL WORKUP (suspected pHTN):
• TTE: RVSP (4×TRV² + RAP), RV size/function, IVC, PCWP estimate, LV function, valvular disease
  - RVSP >40mmHg = pHTN likely; agitated saline bubble study (shunt detection)
• CT pulmonary angiography: rule out CTEPH (mosaic perfusion, pruning, filling defects)
• V/Q scan: more sensitive than CTPA for CTEPH
• PFTs with DLCO: Group 3 (obstruction/restriction)
• Labs: ANA, anti-Scl-70, anti-centromere, anti-SSA/SSB (CTD); HIV; LFTs/hepatic panel (portopulmonary HTN); TSH; BNP/NT-proBNP; anti-phospholipid antibodies (Group 4)
• RHC (right heart catheterization): GOLD STANDARD — required before initiating PAH-specific therapy
  - mPAP ≥20 + PVR >2 + PCWP ≤15 = pre-capillary PH
  - iNO vasoreactivity test: if +response → CCB trial (calcium channel blockers)`,
    management: `GROUP 1 PAH — RISK-STRATIFIED APPROACH:
• Low/intermediate risk: dual oral therapy — ambrisentan (ERA) 5-10mg qday + tadalafil (PDE5i) 40mg qday (AMBITION trial)
• High risk (WHO IV, 6MWT <165m, NT-proBNP >1400): IV epoprostenol (prostacyclin) + ERA + PDE5i; IV/SQ treprostinil alternative
• Vasoreactive: CCB only if confirmed response on RHC vasoreactivity testing (nifedipine 120-240mg/day or diltiazem 360-720mg/day)
PAH MEDICATION CLASSES:
• ERA (endothelin receptor antagonists): ambrisentan, macitentan, bosentan — teratogenic; monthly LFTs (bosentan)
• PDE5 inhibitors: sildenafil 20-80mg TID, tadalafil 40mg qday — avoid nitrates (hypotension)
• Prostacyclins: epoprostenol (IV, continuous infusion), treprostinil (IV/SQ/inhaled), iloprost (inhaled), selexipag (PO)
• Soluble guanylate cyclase stimulator: riociguat (avoid with PDE5i — both vasodilate via cGMP)
• Activin receptor IIA inhibitor: sotatercept (newest agent — reduces PA remodeling)
GROUP 2 (left heart): optimize left heart failure treatment (diuresis, GDMT); pHTN-specific drugs NOT indicated (worsen outcomes)
GROUP 3 (lung/hypoxia): treat underlying lung disease; supplemental O2 (SpO2 >90%); riociguat approved for CTEPH
GROUP 4 (CTEPH): pulmonary endarterectomy (PEA) for surgical candidates (curative); riociguat if inoperable; balloon pulmonary angioplasty
ACUTE DECOMPENSATION (pHTN crisis):
• Avoid: intubation if possible (PPV → ↑PVR), excessive IVF (worsens RV failure), hypoxia
• Inhaled NO (iNO) 20ppm or inhaled epoprostenol: acute pulmonary vasodilation
• IV epoprostenol: if on chronic therapy — do not interrupt; crisis may be due to pump failure/line occlusion
• VA-ECMO: bridge to transplant or recovery in refractory RV failure`,
    monitoring: `• Every 3-6 months: NT-proBNP, 6MWT, functional class (WHO/NYHA), TTE
• RHC at follow-up: assess treatment response (target PVR reduction, CO improvement)
• LFTs monthly for bosentan; teratogenicity counseling (ERA teratogenic — contraception required)
• Continuous SpO2 monitoring during sleep (PAH + sleep-disordered breathing common)`,
    disposition: `• Pulmonary hypertension center: all new Group 1 PAH — requires RHC, complex medication management
• ICU: pHTN crisis (acute decompensation), hemodynamic instability, iNO/epoprostenol initiation
• Lung transplant evaluation: WHO IV on maximal therapy, escalating NT-proBNP, refractory RV failure`
  },

  {
    id: "mechanical-ventilation",
    system: "pulm",
    title: "Mechanical Ventilation — Initiation, Modes, Troubleshooting, and Liberation",
    keywords: ["mechanical ventilation","intubation","PEEP","tidal volume","plateau pressure","driving pressure","ventilator modes","AC/VC","pressure control","PSV","SIMV","ventilator weaning","spontaneous breathing trial","SBT","SAT","extubation","rapid shallow breathing index","RSBI","auto PEEP"],
    source: { chapter: "Pulmonary & Critical Care", section: "Mechanical Ventilation", pages: "50–51", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Five main variables: RR, VT, FiO2, PEEP, mode; ventilation controls PaCO2 (MV = RR×VT); oxygenation controlled by FiO2 and PEEP",
        "Initial settings: VT 6-8 mL/kg IBW, RR 12-20, FiO2 1.0 (wean rapidly), PEEP 5 cmH2O; lung-protective in ARDS (VT 6, Pplat ≤30, driving pressure ≤15)",
        "Pplat >30 cmH2O = high risk for VILI (reduce VT); PIP-Pplat gradient = airway resistance (bronchospasm/secretions/kinking); if Pplat also high = compliance issue (ARDS/pulmonary edema/pneumothorax)",
        "Auto-PEEP (intrinsic PEEP): air trapping in COPD/asthma; measure with expiratory hold; treat with ↓RR, ↑expiratory time (I:E 1:4-5), bronchodilators; hemodynamic collapse → briefly disconnect vent",
        "Liberation criteria: P:F >200, FiO2 ≤0.40, PEEP ≤8, GCS improving, hemodynamically stable → SAT then SBT (PS 5/PEEP 5 or T-piece x30 min); RSBI <105 predicts success"
      ]
    },
    assessment: `#Mechanical Ventilation
Mode: [ ] AC/VC  [ ] AC/PC  [ ] PSV  [ ] SIMV  |  Trigger: [ ] Patient  [ ] Time
Current settings: VT ___ mL (*** mL/kg IBW) | RR ___ set / *** measured | FiO2 ___ | PEEP ___ cmH2O
Peak inspiratory pressure (PIP): ___ cmH2O | Plateau pressure (Pplat): ___ cmH2O (hold: inspiratory pause)
Driving pressure (Pplat – PEEP): ___ cmH2O (goal ≤15)
Auto-PEEP measured (expiratory hold): ___ cmH2O
Minute ventilation (MV): *** L/min (RR × VT)
P:F ratio: *** | SpO2: ***% | ETCO2: *** mmHg
Liberation check: P:F >200 [ ] / FiO2 ≤0.40 [ ] / PEEP ≤8 [ ] / Hemodynamics stable [ ] / Awake/following commands [ ]`,
    ddx: `INTUBATION INDICATIONS: failure of NIPPV, PaCO2 >60 with pH <7.20, P:F <150 despite HFNC, airway protection (AMS/secretions/vomiting), hemodynamic instability
TROUBLESHOOTING HIGH PIP (DOPE):
• D — Displacement (ETT): right mainstem or esophageal placement; CXR + direct laryngoscopy/capnography
• O — Obstruction: secretion plug/mucus plug (suction + saline lavage); bite block + sedation; kinked ETT
• P — Pneumothorax: unilateral absent breath sounds; hemodynamic deterioration → needle decompression if emergent; CXR
• E — Equipment: circuit malfunction, leak; check all connections
HIGH PPLAT (elevated airway compliance issue): ARDS, pulmonary edema, pneumothorax, auto-PEEP, obesity, abdominal compartment syndrome, right mainstem intubation
DYSSYNCHRONY: patient-ventilator mismatch (flow starvation, reverse trigger, double triggering) → adjust flow/rate/mode or increase sedation`,
    workup: `• Daily CXR (ICU): ETT position (3-5 cm above carina), PTX, line/tube positions, pulmonary edema, progression of underlying disease
• Plateau pressure check: inspiratory hold ×0.5-1s (briefly stop ventilation on exam)
• Auto-PEEP: expiratory hold ×0.5-1s; automated on most modern ventilators
• ABG: PaO2, PaCO2, pH — guide FiO2/PEEP/RR titration
• VBG: acceptable for trend monitoring between ABGs`,
    management: `INITIAL SETTINGS (standard):
• Mode: AC/VC (Assist Control/Volume Control) — most common starting mode; ensures minimum MV regardless of effort
• VT: 6-8 mL/kg IBW; ARDS: 6 mL/kg strictly
• IBW: male = 50 + 2.3×(height in inches − 60); female = 45.5 + 2.3×(height in inches − 60)
• RR: 12-20 BPM (can increase to 30 in ARDS for permissive hypercapnia management)
• FiO2: start 1.0, wean rapidly to SpO2 ≥92% (target FiO2 ≤0.6 when possible to minimize O2 toxicity)
• PEEP: 5 cmH2O standard; higher (8-14) for ARDS (ARDSNet PEEP/FiO2 table)
LUNG-PROTECTIVE VENTILATION (ARDS):
• VT 6 mL/kg IBW strictly; Pplat ≤30; driving pressure ≤15; higher PEEP per ARDSNet table
AUTO-PEEP MANAGEMENT:
• Reduce RR (allow longer expiratory time), increase I:E ratio (1:3 to 1:5)
• Bronchodilators: albuterol MDI (4-8 puffs) or nebulized 2.5mg q4h for bronchospasm
• Emergency: if hemodynamic collapse — briefly disconnect ETT from vent (relieves air trapping)
LIBERATION FROM MECHANICAL VENTILATION:
1. Daily SAT (Spontaneous Awakening Trial): hold sedation/analgesia in the morning → assess neurologic status
2. SBT (Spontaneous Breathing Trial): PS 5 cmH2O / PEEP 5 cmH2O for 30-120 min (or T-piece)
   - Pass criteria: RR <35, SpO2 >90%, no diaphoresis/excessive accessory muscle use, no agitation
   - RSBI (RR/VT in liters): <105 = likely successful extubation
3. Extubation: if SBT passed and able to follow commands, cough effectively, secretions manageable
4. Post-extubation: HFNC 30-40 L/min x4h reduces reintubation vs standard O2 (NEJM 2016;375:1919)
WEANING SEDATION: minimize BZDs; target RASS 0 to −2; propofol/dexmedetomidine preferred to midazolam`,
    monitoring: `• Pplat every 4h (or after any VT/PEEP change); driving pressure every shift
• ABG daily (or more frequently during active titration)
• Daily liberation assessment: SAT + SBT readiness check every morning
• ETT cuff pressure: target 20-30 cmH2O (prevents aspiration and tracheal injury)
• Ventilator-associated events (VAE) bundle: HOB 30-45°, oral care with CHX, peptic ulcer prophylaxis, DVT prophylaxis`,
    disposition: `• ICU mandatory: all mechanically ventilated patients
• Daily SAT + SBT reassessment: optimize liberation timing — each additional day on vent = increased VAP/VAE risk
• Consider tracheostomy: if anticipated prolonged ventilation (>10-14 days); pulmonary/ENT/surgery`
  },

  {
    id: "ecmo",
    system: "pulm",
    title: "ECMO (Extracorporeal Membrane Oxygenation)",
    keywords: ["ECMO","extracorporeal membrane oxygenation","VV ECMO","VA ECMO","ECPR","oxygenation failure","refractory ARDS","cardiogenic shock ECMO","ECMO cannula","sweep gas","circuit","ECMO complications"],
    source: { chapter: "Pulmonary & Critical Care", section: "ECMO", pages: "54", authors: "Emma Kurz, Adam Gross",
      keyFacts: [
        "VV-ECMO (replaces lungs): for refractory hypoxemic failure — PaO2/FiO2 <80 despite optimization, Pplat >30, pH <7.25 with pCO2 >60 despite MV; relies on native cardiac output",
        "VA-ECMO (replaces heart + lungs): refractory cardiogenic shock, massive PE, cardiac arrest (ECPR) — venous cannula IVC/RA; arterial cannula R femoral artery",
        "ECMO consult at MGH: MGH STAT App or Directory 'ECMO Consult' or p24252, # 857-310-0335 — consider early (cardiac arrest: ideally <10 min from code start)",
        "VV-ECMO contraindications (absolute): non-recoverable multi-organ failure, unwitnessed arrest/CPR >30 min without ROSC, active severe bleeding, recent NSGY procedure/intracranial bleed (<10 days)",
        "Sweep gas controls CO2 removal; blood flow controls O2 delivery; target venous saturation (SvO2) of circuit >70%"
      ]
    },
    assessment: `#ECMO Assessment
Indication:
[ ] VV-ECMO (respiratory): P:F <80 despite optimization [ ] / Pplat >30 cmH2O [ ] / pH <7.25 + pCO2 >60 [ ]
[ ] VA-ECMO (cardiac): refractory cardiogenic shock [ ] / massive PE [ ] / cardiac arrest (ECPR) [ ]
Absolute contraindications checked:
[ ] Non-recoverable multi-organ failure  [ ] Unwitnessed arrest/CPR >30 min without ROSC
[ ] Active severe bleeding  [ ] Recent NSGY/intracranial bleed <10 days
VA specific: BMI >40 [ ] / aortic dissection [ ] / severe AI [ ] / ESLD/ESRD [ ]
VV specific: severe RV or LV failure [ ]
Current circuit parameters: Blood flow *** L/min | Sweep gas *** L/min | FiO2 circuit ***
SvO2 (pre-oxygenator): ***% | SvO2 (post-oxygenator): ***%`,
    ddx: `VV-ECMO INDICATIONS (pulmonary): severe ARDS (P:F <80), bridge to lung transplant, bilateral PNA with respiratory failure, severe status asthmaticus failing MV
VA-ECMO INDICATIONS (cardiac): refractory cardiogenic shock (post-MI, myocarditis, massive PE), bridge to transplant or LVAD, ECPR (cardiac arrest — especially in-hospital), post-cardiotomy shock
ECPR CONSIDERATIONS: In-hospital cardiac arrest preferred (evidence stronger); ECMO team should be activated within 5-10 min of arrest if refractory; out-of-hospital arrest — limited evidence, individualized
CANNULATION CONFIGURATIONS:
• VV standard: femoral vein drainage → R IJ return (or bicaval dual-lumen single cannula via R IJ)
• VA standard: femoral vein drainage → femoral artery return (with distal perfusion catheter to ipsilateral leg)
• Harlequin syndrome (VA): north-south problem — upper body (including heart/brain) receives unoxygenated blood; requires vent optimization or V-AV conversion`,
    workup: `• ABG every 4-6h on ECMO: titrate sweep gas (CO2) and FiO2/flow (O2)
• ACT (activated clotting time) 180-200s or anti-Xa: UFH anticoagulation monitoring (continuous UFH required to prevent circuit thrombosis)
• CBC daily: hemolysis (pink urine, LDH ↑, Hgb ↓ → circuit problem)
• CXR daily: cannula position, lung recruitment
• Echo (TTE/TEE): LV distension (VA-ECMO), cardiac recovery, cannula positions
• Creatinine, LFTs: end-organ function — determine reversibility
• Distal perfusion: lower extremity pulses, ABI, limb compartment pressure (VA-ECMO)`,
    management: `CIRCUIT MANAGEMENT:
• Blood flow (Q): target 60-80% of cardiac output; controls O2 delivery
• Sweep gas flow: controls CO2 removal (↑ sweep gas = ↓ pCO2); start at 4-6 L/min, titrate by ABG
• Circuit FiO2: usually 1.0 (pre-oxygenator)
• Anticoagulation: UFH to maintain ACT 180-200s or anti-Xa 0.3-0.5 IU/mL; no bolus on initiation
LUNG REST (VV-ECMO): permit low-frequency ventilation — VT 2-4 mL/kg, RR 4-12, FiO2 0.3, PEEP 8-10 (prevents VILI)
VA-ECMO — LV UNLOADING:
• Add IABP or Impella (ECPELLA): unloads LV if distending (avoid pulmonary edema)
• Monitor for Harlequin syndrome: northward migration of unoxygenated blood → may need VV or V-AV conversion
COMPLICATIONS:
• Thrombosis: circuit or cannula clot → ACT/anti-Xa subtherapeutic; visual circuit inspection; replace circuit if significant
• Hemolysis: ↑ circuit pressure, kinked cannula, air in circuit — check positioning; reduce RPM
• Limb ischemia (VA-ECMO): place distal perfusion catheter (3-5 French, ipsilateral femoral artery) prophylactically
• Bleeding: supratherapeutic anticoagulation, DIC → reduce UFH, blood products
WEANING (VV-ECMO): ↓ sweep gas (watch pCO2) and blood flow while monitoring P:F and work of breathing — trial clamp x2-4h if P:F >150 on ECMO
WEANING (VA-ECMO): ↓ blood flow to 2 L/min (minimum); cardiac output monitoring (watch for dependence); echo for LV recovery`,
    monitoring: `• Continuous ACT or anti-Xa q4-6h; circuit visual inspection every shift for clot
• Hemolysis markers: LDH, Hgb, haptoglobin, urine for myoglobin q12h
• Lower limb pulses and ABI q4h (VA-ECMO); distal perfusion catheter flow q shift
• Daily echo: cardiac recovery assessment (VA), LV distension (VA), RV function (VV)
• Daily 'ECMO rounds': blood flow, sweep gas, anticoagulation, complications, weaning readiness`,
    disposition: `• ICU mandatory: all ECMO patients — 24/7 intensivist, perfusionist/ECMO specialist
• ECMO consult at MGH: early — STAT App, Directory "ECMO Consult", p24252, 857-310-0335
• Bridge decision: daily reassessment — bridge to recovery, transplant, LVAD, or palliation`
  },

  {
    id: "icu-sedation-analgesia",
    system: "pulm",
    title: "ICU Sedation, Analgesia, and Delirium (ABCDEF Bundle)",
    keywords: ["ICU sedation","RASS","Richmond agitation","propofol","dexmedetomidine","ketamine","fentanyl","hydromorphone","delirium ICU","CAM-ICU","A2F bundle","SAT","SBT","ABCDEF bundle","ICU pain","analgo-sedation","spontaneous awakening trial"],
    source: { chapter: "Pulmonary & Critical Care", section: "Sedation", pages: "55–56", authors: "Cassandra Fiorino",
      keyFacts: [
        "ICU triad: pain, agitation, delirium — treat in that order; analgesia first (analgo-sedation), then assess agitation need before adding sedative",
        "Target RASS 0 to -2 (alert/calm to light sedation); avoid deeper sedation unless specific indication (NMB, severe ICP, refractory dyssynchrony)",
        "Propofol: first-line ICU sedative; fast on/off; respiratory depressant (requires ETT); monitor TGs >48h; PRIS risk if >48h high dose",
        "Dexmedetomidine (Precedex): α2-agonist; reduces delirium, earlier extubation; less respiratory depression (can use non-intubated); negative chronotropy (↓HR); idiosyncratic fever possible",
        "A2F Bundle reduces ICU mortality and delirium: Assess/Prevent/Manage Pain, Both SAT+SBT, Choice of sedation, Delirium, Early Mobility, Family engagement"
      ]
    },
    assessment: `#ICU Sedation / Analgesia / Delirium
RASS: *** (target 0 to −2 for most; −3 to −5 only if NMB or refractory dyssynchrony)
Pain (CPOT for non-verbal): *** / 8 | NRS (verbal): *** / 10 (goal ≤3)
Delirium (CAM-ICU): [ ] Positive (delirious)  [ ] Negative  [ ] Unable to assess
Delirium features: [ ] Acute onset/fluctuating  [ ] Inattention  [ ] Disorganized thinking  [ ] Altered consciousness
Current sedative: *** (dose/route) | Current analgesic: *** (dose/route)
A2F Bundle progress:
A — Pain assessed and managed: [ ] Yes  B — SAT/SBT daily: [ ] Yes
C — Sedation choice optimized: [ ] Yes  D — Delirium monitored: [ ] Yes
E — Early mobility: [ ] Yes  F — Family engaged: [ ] Yes`,
    ddx: `AGITATION/DELIRIUM IN ICU:
• Hyperactive delirium: agitation, pulling at lines, combative — often ICU psychosis or withdrawal; haloperidol
• Hypoactive delirium: quiet, somnolent, looks like drowsiness — easily missed; worse prognosis than hyperactive
• Delirium precipitants: pain, medications (BZDs, opioids, steroids, anticholinergics), metabolic (Na, glucose, uremia, hepatic), infection, hypoxia, sleep deprivation, immobility, ICU environment
• Withdrawal: alcohol/BZD withdrawal (CIWA-Ar), opioid withdrawal, clonidine/dexmedetomidine withdrawal
• ICU-acquired weakness: prolonged deep sedation + NMB + immobility → prevent with early mobility
PAIN ASSESSMENT:
• Verbal: NRS 0-10; target ≤3
• Non-verbal (intubated): CPOT (Critical-Care Pain Observation Tool) 0-8; target ≤2
• Behavioral Pain Scale (BPS): 3-12; used in sedated/paralyzed patients`,
    workup: `• CAM-ICU assessment every shift: fluctuating mental status + inattention + (disorganized thinking OR altered consciousness) = positive
• Review medication list: BZDs (benzodiazepines are most impactful modifiable risk factor for ICU delirium — avoid)
• BMP: Na, K, glucose, BUN/Cr (metabolic causes)
• ABG: hypoxia/hypercapnia contributing to AMS
• LFTs: ketamine DILI risk; propofol pancreatitis risk (monitor TGs)
• Review sleep/wake cycle, restraint use, sensory deprivation (lights/glasses/hearing aids)`,
    management: `ANALGESICS (analgesia-first approach):
• Fentanyl: IV 25-100 mcg/h infusion; short-acting; safe in renal failure (preferred to morphine in ICU); PCA available
• Hydromorphone: IV 0.2-0.4 mg q3-4h PRN or 0.2-0.4 mg/h infusion; more potent than morphine
• Ketamine: 5-20 mcg/kg/min IV; analgesic + sedative; bronchodilatory; minimal respiratory depression; avoid if seizure risk; monitor LFTs (DILI)
• NSAIDs/ketorolac (adjunct): reduces opioid requirements; caution in AKI, bleeding risk
SEDATIVES:
• Propofol 5-50 mcg/kg/min IV (first-line): fast on/off; vasodilatory/cardiac depressant; monitor TGs q48h
  - PRIS (Propofol Infusion Syndrome): rare but fatal — rhabdo + AGMA + ↓HR + hepatic/renal failure; risk if >48h and high dose
• Dexmedetomidine 0.2-0.7 mcg/kg/h IV (adjunct/preference in non-intubated): ↓delirium + earlier extubation; negative chronotropy (bradycardia); slow onset/offset
• Midazolam 1-5 mg/h IV: avoid in most ICU patients (↑delirium); short courses acceptable; tolerance develops quickly
• Ketamine (sedative dose 5-20 mcg/kg/min): adjunct; preserves airway reflexes; useful in bronchospasm, hemodynamic instability
• Benzodiazepines: AVOID as primary ICU sedation (↑delirium, ↑mortality); exception: alcohol/BZD withdrawal
DELIRIUM MANAGEMENT:
• Non-pharmacologic FIRST: reorientation, sleep hygiene (lights off at night, ear plugs), early mobility, remove unnecessary restraints, sensory aids (glasses/hearing aids), family visits
• Haloperidol: 1-5 mg IV q6-8h PRN (or 0.5-1 mg for elderly) — does NOT reduce delirium duration but manages agitation; monitor QTc
• Quetiapine: 25-50 mg PO BID (sedating, useful in hyperactive delirium); monitor QTc
• Dexmedetomidine: if RASS +1 to −1; reduces emergence delirium; can treat agitation without causing deep sedation
A2F BUNDLE: implement all 6 elements daily — significantly reduces ICU mortality, delirium, and ICU-acquired weakness`,
    monitoring: `• RASS every 4h; target 0 to −2; document deepest and most common RASS each shift
• CAM-ICU every shift
• Pain assessment before each procedure, q4h, and with any agitation
• TGs every 48h on propofol; LFTs with ketamine infusions (every 24-48h)
• Spontaneous Awakening Trial (SAT): daily — hold all sedation/analgesia; assess RASS, then SAT→SBT paired`,
    disposition: `• ICU: all intubated patients on continuous sedation
• SAT/SBT daily readiness: optimize timing of liberation from MV — sedation minimization is critical
• Psychiatry: hyperactive delirium not responding to standard measures, ICU psychosis, pre-existing psychiatric conditions`
  },

  {
    id: "vasopressors-inotropes",
    system: "pulm",
    title: "Vasopressors and Inotropes",
    keywords: ["vasopressors","norepinephrine","vasopressin","phenylephrine","epinephrine","dopamine","dobutamine","milrinone","inotropes","septic shock","cardiogenic shock","MAP","angiotensin II","peripheral vasopressor","pressor dosing"],
    source: { chapter: "Pulmonary & Critical Care", section: "Vasopressors", pages: "60", authors: "Kristin Harrington",
      keyFacts: [
        "Norepinephrine (Levophed): first-line for septic, cardiogenic, and hypovolemic shock — α1 > β1; ↑SVR + ↑CO; start 0.1-0.15 mcg/kg/min; max 0.75 mcg/kg/min",
        "Peripheral vasopressors: can temporize with NE <10 mcg/min or phenylephrine <150 mcg/min peripherally for <72h — requires 2 PIVs, ≤20G, with blood return, in upper extremity; check q2h for extravasation",
        "Vasopressin (0.03-0.04 U/min): acts at V1 receptors; add to NE in refractory septic shock — allows NE dose reduction; do NOT use for cardiogenic shock (↑afterload)",
        "Dobutamine: β1 > β2 agonist; inotrope/vasodilator; used in cardiogenic shock with low CO; dose 2.5-10 mcg/kg/min; causes tachycardia and arrhythmias",
        "Angiotensin II (ATII, Giapreza): vasopressor via AT1 receptor; add-on in refractory vasodilatory shock; particularly useful with RAS inhibitor therapy or AKI"
      ]
    },
    assessment: `#Vasopressors and Inotropes
Shock type: [ ] Distributive/Septic  [ ] Cardiogenic  [ ] Hypovolemic  [ ] Obstructive
Hemodynamics: MAP *** (goal ≥65) | HR *** | BP *** | CI *** | CVP *** | SvO2 ***
Volume status optimized: [ ] Yes  [ ] No — IVF challenge first
Current pressors/inotropes:
1. *** at *** mcg/kg/min  2. *** at ***  3. *** at ***
Access: [ ] Central venous catheter  [ ] IO  [ ] Peripheral (≤20G, blood return, upper extremity, <72h) — q2h checks
Extravasation precautions: *** | Last access check: ***`,
    ddx: `VASOPRESSOR SELECTION BY SHOCK TYPE:
• Distributive/Septic: NE first → add vasopressin 0.03 U/min → add phenylephrine or epinephrine → ATII (refractory)
• Cardiogenic: NE first → add dobutamine (if low CO) → avoid vasopressin (↑afterload); epinephrine as bridge; MCS (Impella) preferred for dose reduction
• Hypovolemic: volume first; NE as bridge until volume replaced
• Obstructive (PE/tamponade): treat underlying cause; NE to maintain MAP while preparing intervention
RECEPTOR PROFILE REVIEW:
• α1 only: phenylephrine — pure vasoconstriction; reflex bradycardia; ↑SVR with ↓CO
• α1 > β1: norepinephrine — ↑SVR + modest ↑CO; first-line for most shock
• β1 > β2: dobutamine — inotropy + mild vasodilation; ↓SVR; ↑CO; avoid in hypovolemia
• β1 + β2 + α1: epinephrine — potent inotrope + vasopressor; tachycardia + arrhythmias; ↑lactate (splanchnic vasoconstriction)
• V1: vasopressin — splanchnic vasoconstriction; no tachycardia; ideal add-on in septic shock
• PDE inhibitor: milrinone — ↑cAMP → ↑CO + ↓PVR; useful in RV failure/pHTN; long half-life (difficult to titrate)`,
    workup: `• MAP, UOP (≥0.5 mL/kg/h), lactate, ScvO2/SvO2 (goal >70%) — targets of resuscitation
• POCUS/TTE: LV/RV function, IVC (volume assessment), pericardial effusion
• Lactic acid every 2-4h: trending down = adequate perfusion; persistently elevated = inadequate resuscitation or distributive etiology
• ABG: assess oxygenation, ventilation, metabolic derangements
• BMP: vasopressin effect on water retention (hyponatremia); electrolytes`,
    management: `FIRST-LINE:
• Norepinephrine (NE): start 0.1-0.15 mcg/kg/min; titrate by 0.05-0.1 q5-15 min; max 0.75 mcg/kg/min
  - Peripheral route (<10 mcg/min): 2 PIVs ≤20G with blood return, upper extremity AC or more proximal; check q2h for extravasation
ADD-ON IN REFRACTORY SEPTIC SHOCK:
• Vasopressin 0.03 U/min (fixed dose): allows NE dose reduction; do NOT use as primary pressor; avoid in cardiogenic shock
• Phenylephrine 0.5-2 mcg/kg/min: pure vasopressor; reflex bradycardia; avoid in cardiogenic shock or low CO
• Angiotensin II 5-80 ng/kg/min: add in refractory vasodilatory shock; expensive but effective
INOTROPES (cardiogenic shock/low CO):
• Dobutamine 2.5-10 mcg/kg/min: β1 >> β2; ↑CO, ↓SVR, ↑HR; tachycardia limits use
• Milrinone 0.125-0.75 mcg/kg/min: PDE inhibitor; ↑CO + ↓PVR; useful in pHTN + RV failure; long half-life (difficult to titrate rapidly); adjust for CrCl
• Epinephrine 0.05-0.2 mcg/kg/min: β > α at low doses; potent inotropy + chronotropy; ↑lactate via splanchnic vasoconstriction
PERIPHERAL VASOPRESSOR PROTOCOL:
• Temporize only: NE <10 mcg/min or phenylephrine <150 mcg/min for <72h
• 2 PIVs ≤20G with blood return, upper extremity (AC or more proximal)
• Extravasation → phentolamine 5-10mg in 10mL NS subcutaneously into affected area; apply dry warm compress
WEANING: reduce dose by 20-25% every 15-30 min as hemodynamics allow; wean 1 pressor at a time; NE last`,
    monitoring: `• MAP every 5-15 min while adjusting; target ≥65 mmHg (higher if chronic hypertension: ≥75-80)
• UOP hourly with Foley catheter: goal 0.5 mL/kg/h
• Lactic acid every 2-4h; target trending to <2 mmol/L
• Distal extremity perfusion (peripheral route): q2h skin assessment; educate nursing to report
• Troponin and BNP: ongoing myocardial injury from shock`,
    disposition: `• ICU mandatory: all patients requiring vasopressors
• Central venous access (CVC or IO): obtain as soon as possible; do not maintain peripheral indefinitely
• Cardiology/Critical care: refractory cardiogenic shock → MCS (Impella, ECMO)`
  },

  {
    id: "toxicology-critical-care",
    system: "pulm",
    title: "Toxicology — Critical Care Approach",
    keywords: ["toxicology","overdose","poisoning","antidote","acetaminophen overdose","opioid overdose","carbon monoxide","salicylate","TCA overdose","acetylcholinesterase","antidote NAC","toxidrome","poison control","ingestion"],
    source: { chapter: "Pulmonary & Critical Care", section: "Toxicology & Lung Transplant", pages: "61", authors: "Rachel Ancar, Cassandra Fiorino, Daniel Fulop",
      keyFacts: [
        "Toxidrome recognition: opioid (miosis/bradypnea/coma), cholinergic (SLUDGE/DUMBELS), anticholinergic (hot/dry/flushed/tachycardia/mydriasis/delirium), sympathomimetic (↑HR/BP/temp/mydriasis/diaphoresis), serotonin syndrome (clonus/hyperreflexia/agitation)",
        "Poison Control: 1-800-222-1222 — call for all significant ingestions; toxicology consult available 24/7",
        "Acetaminophen: NAC (N-acetylcysteine) for ALL APAP toxicity — IV: 150mg/kg over 1h → 50mg/kg over 4h → 100mg/kg over 16h; even effective late (>24h) in hepatic failure",
        "Salicylate toxicity: primary respiratory alkalosis + high AG metabolic acidosis; tinnitus; alkalinize urine (pH >7.5 with bicarb) — hemodialysis if severe (level >100 mg/dL, AKI, AMS, CNS)",
        "TCA overdose: wide QRS (>120ms), QRS >160ms = high risk VT/VF; sodium bicarbonate 1-2 mEq/kg IV bolus (narrows QRS via Na channel competitive inhibition); avoid physostigmine"
      ]
    },
    assessment: `#Toxicology Assessment
Substance(s): *** | Time of ingestion: *** | Amount: ***
Toxidrome pattern:
[ ] Opioid: miosis + bradypnea + coma (↓RR, pinpoint pupils)
[ ] Cholinergic (SLUDGE): Salivation/Lacrimation/Urination/Defecation/GI cramps/Emesis + bradycardia
[ ] Anticholinergic: hot/dry/flushed + tachycardia + mydriasis + urinary retention + delirium
[ ] Sympathomimetic: tachycardia/HTN/hyperthermia/mydriasis/diaphoresis + agitation
[ ] Serotonin: clonus + hyperreflexia + agitation + diaphoresis + tremor
[ ] Mixed/unknown: ***
Vital signs: T *** / HR *** / BP *** / RR *** / SpO2 ***
EKG: QRS *** ms / QTc *** ms / rhythm ***
Acetaminophen level (ALWAYS check): *** mcg/mL at ___ h post-ingestion
Salicylate level: *** | ASA use: ***
Poison Control called: [ ] Yes  [ ] No — call 1-800-222-1222`,
    ddx: `TOXIDROME SUMMARY:
• Opioid: miosis, bradypnea, ↓consciousness, hypotension, bradycardia — naloxone reversal
• Cholinergic (OP/carbamate pesticides, nerve agents): SLUDGE+DUMBELS (Diarrhea, Urination, Miosis, Bradycardia, Emesis, Lacrimation, Salivation) — atropine + pralidoxime
• Anticholinergic (TCA, diphenhydramine, scopolamine): "Blind as a bat, mad as a hatter, hot as a hare, red as a beet, dry as a bone" — benzodiazepines for agitation
• Sympathomimetic (cocaine, amphetamines, MDMA): tachycardia, HTN, hyperthermia, diaphoresis, mydriasis — benzodiazepines; avoid BBs (unopposed α)
• Serotonin syndrome (see NMS/Serotonin template): Hunter criteria; cyproheptadine
• Sedative/hypnotic: similar to opioid but no reversal; BZDs → flumazenil (use caution — seizures in chronic users)
COMMON SPECIFIC INGESTIONS:
• Acetaminophen: may be asymptomatic early; hepatotoxicity peaks 72-96h; Rumack-Matthew nomogram for risk
• Salicylates: tinnitus, N/V, mixed acid-base; do NOT induce emesis; alkalinize + HD if severe
• TCAs: QRS widening + QTc prolongation + anticholinergic features + hypotension; sodium bicarb
• Beta-blockers: bradycardia + hypotension; glucagon 3-10 mg IV; high-dose insulin (1 U/kg bolus + infusion); calcium
• Calcium channel blockers (CCB): bradycardia + hypotension; calcium gluconate 3-6 g IV; high-dose insulin (same as BB); consider lipid emulsion therapy`,
    workup: `• Acetaminophen level (check in ALL ingestions — often co-ingested), ASA level, EtOH level
• Urine toxicology screen (UDS): immunoassay (misses fentanyl, novel opioids, some stimulants) — confirm with mass spectrometry
• EKG: QRS (TCA/CCB/sodium channelopathy), QTc (antipsychotics, methadone), ventricular dysrhythmia
• BMP: AG (MUDPILES — salicylates, methanol, ethylene glycol, DKA, uremia), renal function (elimination), glucose
• ABG: acid-base status; salicylate (mixed respiratory alkalosis + AGMA)
• LFTs: baseline + q24-48h for APAP hepatotoxicity; peak at 72-96h
• Osmolal gap (measured Osm − calculated Osm): >20 = toxic alcohol (methanol, ethylene glycol, isopropanol)`,
    management: `GI DECONTAMINATION:
• Activated charcoal 1 g/kg (max 50g): within 1-2h of ingestion if airway protected + bowel sounds; APAP, salicylates, TCA, many pills; NOT for caustics, metals, hydrocarbons
• Gastric lavage: rarely used; consider within 60 min of life-threatening ingestion if intubated
• Whole bowel irrigation (GoLYTELY): sustained-release medications, body packers, iron, lithium
SPECIFIC ANTIDOTES:
• Opioid → Naloxone 0.4-2 mg IV/IM/IN q2-3 min; infusion 2/3 of reversal dose per hour for long-acting
• APAP → NAC: 150mg/kg IV over 1h → 50mg/kg over 4h → 100mg/kg over 16h; continue until INR <2 and LFTs improving
• Methanol/ethylene glycol → Fomepizole 15mg/kg IV; HD if severe
• Organophosphate → Atropine 2-4mg IV q5-10 min until secretions dry; pralidoxime 1-2g IV over 15-30 min (within 24-48h of exposure)
• TCA → Sodium bicarbonate 1-2 mEq/kg IV bolus; repeat if QRS >120ms or hypotension persists
• Beta-blocker/CCB → Glucagon 3-10mg IV; HIGH-DOSE INSULIN (1 U/kg bolus + 0.5-1 U/kg/h infusion) + dextrose; calcium gluconate; lipid emulsion 1.5 mL/kg IV
• Salicylate → NaHCO3 to urine pH >7.5; HD if level >100 mg/dL, AMS, AKI, pulmonary edema
• CO poisoning → 100% O2 (3 hours); HBO (hyperbaric oxygen) if loss of consciousness, CO >25%, end-organ damage, pregnancy
SUPPORTIVE CARE: airway (intubate if AMS or unable to protect), hemodynamic support (fluids + vasopressors), temperature management, seizure management (BZDs), cardiac monitoring`,
    monitoring: `• Serial EKGs: every 1-2h for QRS and QTc-prolonging ingestions; resolve to normal before discharge/de-monitoring
• Acetaminophen levels at 4h post-ingestion (plot on Rumack nomogram); LFTs every 12-24h
• Salicylate levels every 2-4h until declining; urine pH on alkalinization (target >7.5)
• Blood glucose every 1-2h during high-dose insulin therapy
• Lactate/creatinine: toxic alcohol ingestion, rhabdomyolysis`,
    disposition: `• ICU: hemodynamic instability, AMS, intubation, significant cardiac arrhythmia, ongoing organ toxicity (hepatic failure)
• Toxicology consult (all significant ingestions) + Poison Control 1-800-222-1222
• Psychiatry: all intentional overdoses — capacity assessment + psychiatric evaluation before discharge
• Transplant evaluation: APAP-induced fulminant hepatic failure (King's College Criteria met)`
  },

  // ════════════════════ GI — NEW TEMPLATES ════════════════════

  {
    id: "abdominal-pain",
    system: "gi",
    title: "Abdominal Pain — Approach",
    keywords: ["abdominal pain","acute abdomen","abdominal pain approach","epigastric pain","RUQ pain","LLQ pain","RLQ pain","cannot miss diagnosis","mesenteric ischemia","appendicitis","McBurney","red flags abdominal"],
    source: { chapter: "Gastroenterology", section: "Abdominal Pain", pages: "65", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "Cannot miss: mesenteric infarct, bowel perforation, extra-intestinal hemorrhage, SBO, ectopic pregnancy, MI/aortic dissection",
        "Red flags: HDUS, rigidity, guarding, rebound tenderness, pain out of proportion to exam, absent bowel sounds, gross distension, bilious emesis, hematemesis, hematochezia",
        "Image-negative pain: metabolic (DKA/Ca/uremia), meds/toxins (EtOH/opioids/cocaine), functional (IBS/functional dyspepsia), episodic (sphincter of Oddi/passed stone)",
        "Special populations: immunosuppressed (blunted signs), elderly (atypical presentations, lower threshold for imaging), SCD (VOE vs acute abdomen)",
        "Initial labs: BMP, Ca, Mg, CBC w/ diff, LFTs, lipase, lactate, ESR/CRP, UA, β-hCG, troponin, coags, T&S"
      ]
    },
    assessment: `#Abdominal Pain Assessment
Location: *** | Character: [ ] Sharp  [ ] Crampy  [ ] Colicky  [ ] Dull/aching
Onset: [ ] Sudden  [ ] Gradual  |  Duration: ***  |  Radiation: ***
Modifying factors: *** | Worse with: ***  |  Better with: ***
Associated: N/V [ ] / Fever [ ] / Diarrhea [ ] / Constipation [ ] / Jaundice [ ] / Wt loss [ ] / GI bleed [ ]
Red flags: HDUS [ ] / Rigidity/rebound [ ] / Pain out of proportion [ ] / Absent BS [ ] / Bilious emesis [ ]
Exam: Tenderness location *** / Guarding [ ] / Rebound [ ] / Distension [ ] / Peritoneal signs [ ]
McBurney's [ ] / Rovsing's [ ] / Murphy's [ ] / Obturator [ ] / Psoas [ ] / DRE: ***`,
    ddx: `RIGHT UPPER QUADRANT: Hepatitis, abscess, Budd-Chiari, portal vein thrombosis, Fitz-Hugh-Curtis (perihepatitis from GC/Chlamydia); biliary: cholelithiasis/colic, cholecystitis, cholangitis, Sphincter of Oddi; Extra-abd: PE, PNA, CHF
EPIGASTRIC: Pancreatitis, gastric pathology (GERD/PUD/gastritis/gastroparesis/functional dyspepsia); mesenteric ischemia; esophagitis; Extra-abd: MI, aortic dissection
LEFT UPPER QUADRANT: Splenic (splenomegaly/abscess/infarction/rupture/trauma); gastritis; PUD
PERIUMBILICAL: SBO (early), AAA, mesenteric ischemia, appendicitis (early), gastroenteritis, umbilical hernia
RIGHT LOWER QUADRANT: Appendicitis (McBurney's point), cecal/terminal ileal pathology (CD), pelvic (ovarian cyst/torsion/ectopic/PID — in females), psoas abscess, inguinal hernia
LEFT LOWER QUADRANT: Diverticulitis, colorectal CA, sigmoid pathology, pelvic (same as RLQ)
SUPRAPUBIC: UTI/cystitis, prostatitis, urinary retention, gynecologic, hernia
IMAGE-NEGATIVE: DKA, hypercalcemia, uremia, acute intermittent porphyria, heavy metals, EtOH/opioid/cocaine, IBS, functional dyspepsia, Familial Mediterranean Fever, hereditary angioedema`,
    workup: `• BMP, Ca, Mg, CBC w/ diff, LFTs, lipase, lactate, ESR/CRP, UA with micro, β-hCG (ALL reproductive-age females), troponin (epigastric + cardiac risk factors)
• CT abdomen/pelvis with IV ± PO contrast: first-line for most acute undifferentiated abdominal pain (HDUS or peritoneal signs → STAT)
  - CTA for vascular pathology (mesenteric ischemia, AAA, aortic dissection)
• RUQ ultrasound: biliary pathology (cholecystitis, cholelithiasis, CBD dilation)
• KUB: limited use; consider for obstruction or free air if CT unavailable
• EKG: exclude MI presenting as epigastric pain (especially inferior STEMI)
• Pelvic ultrasound (transvaginal preferred): reproductive-age females with pelvic/lower abd pain
• Specific tests: H. pylori stool Ag (epigastric + dyspepsia), amylase/lipase, blood cultures (fever + peritoneal signs)`,
    management: `EMERGENT: HDUS/peritoneal signs/acute abdomen → STAT surgery consult + IVF + NPO + pain control + broad-spectrum antibiotics
MESENTERIC ISCHEMIA (pain out of proportion + vascular RFs): CTA abdomen → surgery/IR consult; heparin anticoagulation; bowel rest
SBO: NGT decompression + IVF + bowel rest; gastrografin challenge for adhesive SBO (converts 74% avoiding surgery); surgery if high-grade, complete, ischemic signs
APPENDICITIS: urgent surgery consult; antibiotics (pip-tazo or CTX/metronidazole) — consider antibiotics-first for uncomplicated
BILIARY: see Cholecystitis/Cholangitis template
DIVERTICULITIS: uncomplicated (mild) → PO antibiotics outpatient (ciprofloxacin + metronidazole OR amoxicillin-clavulanate); complicated (abscess/perforation/fistula) → CT-guided drainage or surgery
PAIN MANAGEMENT: IV ketorolac 15-30mg or morphine/hydromorphone PRN; adequate analgesia does NOT mask surgical diagnosis — treat pain`,
    monitoring: `• Serial abdominal exams every 4-6h; immediate reassessment if pain worsens
• Temperature, WBC, lactate trend (ischemia/sepsis monitoring)
• Recheck β-hCG if ectopic pregnancy initially dismissed`,
    disposition: `• OR: free perforation, bowel ischemia, appendicitis, ruptured ectopic
• Surgery consult: peritoneal signs, suspected SBO, diverticulitis with complications
• GI consult: biliary, hepatic, IBD flare, GI bleed
• Discharge with close follow-up: uncomplicated diverticulitis, mild biliary colic with outpatient ultrasound planned`
  },

  {
    id: "gerd-pud",
    system: "gi",
    title: "GERD / Peptic Ulcer Disease",
    keywords: ["GERD","gastroesophageal reflux","peptic ulcer disease","PUD","H pylori","Helicobacter pylori","heartburn","PPI","proton pump inhibitor","Barrett esophagus","dyspepsia","EGD","triple therapy","vonoprazan"],
    source: { chapter: "Gastroenterology", section: "GERD & Peptic Ulcer Disease", pages: "66", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "GERD alarm symptoms (require EGD): dysphagia/odynophagia, weight loss, GIB, iron deficiency anemia, persistent vomiting, anorexia, new onset age ≥60",
        "PPI first-line: start 20mg omeprazole 30 min before AM meal; if no response in 4-8 weeks → uptitrate to 40mg or BID; taper by 50%/week when discontinuing to prevent rebound hypersecretion",
        "H. pylori testing: stool antigen or urea breath test preferred (not serology — cannot distinguish active vs past); PPI and antibiotics cause false negatives — hold 2 weeks before testing",
        "H. pylori treatment (first-line): quadruple therapy — PPI BID + bismuth 300mg QID + tetracycline 500mg QID + metronidazole 500mg QID x14 days (Pylera combination pill available)",
        "Barrett's esophagus surveillance: screen in GERD + ≥3 risk factors (>50yo, white, male, central obesity, tobacco, FH Barrett's/esophageal AdenoCA); EGD interval based on dysplasia grade"
      ]
    },
    assessment: `#GERD / Peptic Ulcer Disease
GERD symptoms: heartburn [ ] / regurgitation [ ] / sour taste [ ] / chronic cough [ ] / hoarseness [ ] / chest pain [ ]
Alarm features: dysphagia [ ] / odynophagia [ ] / weight loss [ ] / GIB [ ] / IDA [ ] / persistent vomiting [ ] / age ≥60 (new onset) [ ]
→ Alarm features present = EGD indicated
PUD symptoms: epigastric burning pain ± relief with food/antacids [ ] | N/V [ ] | GIB (melena/hematemesis) [ ]
H. pylori tested: [ ] Yes (result: ***)  [ ] No  | NSAID use: [ ] Yes  [ ] No
Current PPI: *** (dose/timing)  |  Duration of symptoms: ***
Barrett's risk factors: >50yo [ ] / male [ ] / white [ ] / central obesity [ ] / tobacco [ ] / FH Barrett's or adenoCA [ ]`,
    ddx: `GERD DDx: Eosinophilic esophagitis (EoE — dysphagia + GERD sx + food impaction; >15 eos/HPF on biopsy), reflux hypersensitivity (normal acid exposure time + symptom association), functional dyspepsia, peptic ulcer, achalasia, cardiac (chest pain), laryngopharyngeal reflux
PUD DDx: GERD, biliary disease, gastric CA (alarm symptoms → EGD), celiac, chronic pancreatitis, functional dyspepsia, medication-related (NSAIDs, bisphosphonates, sirolimus), ZES (Zollinger-Ellison — multiple/refractory ulcers + diarrhea + hypercalcemia)
H. PYLORI COMPLICATIONS: PUD, gastric adenocarcinoma (3-4x risk), MALT lymphoma, IDA (iron malabsorption)`,
    workup: `NO ALARM FEATURES:
• Trial 8-week PPI at standard dose; H. pylori "test-and-treat" if symptoms not responsive
• H. pylori testing: stool antigen (preferred, Sn 94%, Sp 97%) or urea breath test; NOT serology
  - Hold PPI x2 weeks and antibiotics x4 weeks before testing for accuracy
ALARM FEATURES:
• EGD with biopsy: exclude malignancy; assess for H. pylori (rapid urease test on biopsy), Barrett's esophagus, complications
• If EGD negative + persistent symptoms → ambulatory pH monitoring (24h) or pH-impedance testing (reflux hypersensitivity vs. GERD vs. functional)
• Esophageal manometry: if dysphagia + negative EGD (achalasia, esophageal spasm)
REFRACTORY GERD (no response after 8 weeks high-dose PPI BID):
• Check PPI compliance and timing; consider ambulatory pH monitoring; re-evaluate diagnosis`,
    management: `GERD:
• Lifestyle: weight loss (BMI <25), elevate HOB 6-8 inches, avoid eating 2-3h before bed, left lateral decubitus, tobacco cessation, ↓ coffee/alcohol/fatty/spicy foods
• PPI (first-line): omeprazole 20mg PO qday 30 min before breakfast; uptitrate to 40mg → 40mg BID if inadequate response
• H2RA (famotidine 10-20mg BID): adjunct at night with PPI; tachyphylaxis common after weeks
• Taper PPI when discontinuing: reduce dose by 50%/week to prevent rebound hypersecretion
• Vonoprazan (PCAB — newer alternative): 10-20mg qday; FDA-approved alternative to PPI
• Severe/refractory: laparoscopic fundoplication (superior to medical therapy for some patients; NEJM 2019;381:1513)
• Barrett's esophagus: indefinite high-dose PPI; EGD surveillance q3-5 years (no dysplasia); q6-12 months (low-grade dysplasia); endoscopic treatment (eradication) if high-grade dysplasia
H. PYLORI ERADICATION (first-line):
• Quadruple therapy x14 days: PPI BID + bismuth subcitrate 300mg QID + tetracycline 500mg QID + metronidazole 500mg QID; OR Pylera (combination pill) BID with each meal + HS
• Clarithromycin-based triple: avoid as first-line (rising clarithromycin resistance >15-20% in US)
• Test for eradication: stool antigen or urea breath test ≥4 weeks after completion
PUD:
• PPI (omeprazole 20-40mg qday) x4-8 weeks; longer if large ulcer, continued NSAID use, or H. pylori
• NSAID-induced PUD: discontinue NSAIDs; add PPI if NSAIDs must be continued (NEJM 2005;352:238); misoprostol alternative
• Recheck EGD: all gastric ulcers at 8-12 weeks (exclude malignancy); duodenal ulcers — only if not healing or complex`,
    monitoring: `• H. pylori eradication: retest at ≥4 weeks post-treatment (stool antigen or UBT)
• PUD healing: EGD at 8-12 weeks for gastric ulcers — rule out malignancy
• Barrett's: EGD q3-5 years (no dysplasia); q6-12 months (low-grade); endoscopic eradication if high-grade`,
    disposition: `• GI consult: alarm features, refractory GERD, Barrett's with dysplasia, ZES, complicated PUD (perforation/hemorrhage)
• Surgery referral: surgical fundoplication for refractory GERD without Barrett's
• Outpatient: uncomplicated GERD/PUD — PPI trial, H. pylori test-and-treat, lifestyle modification`
  },

  {
    id: "nausea-vomiting-gastroparesis",
    system: "gi",
    title: "Nausea, Vomiting & Gastroparesis",
    keywords: ["nausea","vomiting","gastroparesis","antiemetics","ondansetron","prochlorperazine","metoclopramide","delayed gastric emptying","gastric emptying study","PONV","cyclic vomiting syndrome","hyperemesis"],
    source: { chapter: "Gastroenterology", section: "Nausea, Vomiting & Gastroparesis", pages: "67–68", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "First rule out life-threatening causes: bowel obstruction, perforation, mesenteric ischemia, pancreatitis, MI, DKA, elevated ICP",
        "VVOOMMIIITING mnemonic: Vestibular/Vertigo, vOmiting centers, Obstruction, Medications, Metabolic/toxins, Inflammation/Infection/Ischemia, Intracranial, Nerves, Gut dysmotility",
        "Gastroparesis diagnosis: gastric scintigraphy showing >10% retention at 4 hours (hold motility meds and opioids 48h prior); most common cause is idiopathic > diabetic > post-surgical",
        "Antiemetic selection: normal QTc → ondansetron first; prolonged QTc → lorazepam (avoid 5-HT3 antagonists); chemo-induced → dex + lorazepam + ondansetron + aprepitant + olanzapine",
        "SBO management: NGT suction + NPO + IVF; gastrografin per NGT converts 74% of adhesive SBOs to avoid surgery (BJS 2010;97:470)"
      ]
    },
    assessment: `#Nausea / Vomiting / Gastroparesis
Duration: acute (<1 month) [ ] / chronic (>1 month) [ ]
Character: N/V only [ ] / associated abdominal pain [ ] / bilious [ ] / feculent [ ] / blood/hematemesis [ ]
Timing: morning [ ] / postprandial [ ] / continuous [ ] / episodic [ ]
Red flags: GI bleed [ ] / obstruction symptoms [ ] / severe abdominal pain [ ] / fever [ ] / neurologic symptoms [ ]
Life-threatening excluded: SBO [ ] / perforation [ ] / ischemia [ ] / pancreatitis [ ] / MI [ ] / DKA [ ] / ↑ICP [ ]
Precipitants: medications (opioids/antibiotics/chemo) *** / dietary / infection / pregnancy / metabolic ***
Gastroparesis: known DM [ ] / prior gastric surgery [ ] / symptoms (early satiety/postprandial fullness/bloating) [ ]
Current QTc: *** ms (important for antiemetic selection)`,
    ddx: `ACUTE NAUSEA/VOMITING (VVOOMMIIITING):
• Vestibular/Vertigo: labyrinthitis, BPPV, Meniere's — vertigo + N/V, positional component
• Obstruction: SBO, gastric outlet obstruction, volvulus — bilious/feculent emesis, distension, obstipation
• Medications: opioids, antibiotics (azithromycin, metronidazole), chemo, cannabis
• Metabolic/Toxins: uremia, hypercalcemia, ketoacidosis (DKA), alcohol, food poisoning
• Inflammation/Infection: gastroenteritis, PUD, pancreatitis, cholecystitis, hepatitis, PNA, pyelonephritis
• Intracranial: elevated ICP (migraine, tumor, meningitis, CVA) — projectile vomiting, HA, papilledema
• Nerves: anxiety, pain, anticipatory N/V
CHRONIC NAUSEA:
• Gastroparesis (idiopathic > diabetic > post-surgical)
• Functional dyspepsia — postprandial distress syndrome
• Cyclic vomiting syndrome (CVS) — stereotyped episodes, migraine history, cannabis use
• GERD (see GERD template)
• Rumination syndrome — regurgitation after meals, not preceded by retching, no acidic taste
• Pregnancy/hyperemesis gravidarum — onset 5-6 weeks, peaks 9 weeks, subsides 20 weeks`,
    workup: `ACUTE NAUSEA/VOMITING:
• BMP (electrolytes, glucose, Cr, BUN), LFTs, lipase (pancreatitis), β-hCG (all reproductive-age females)
• TSH (hypothyroidism — often overlooked)
• UA, troponin (inferior MI can present with N/V)
• KUB or CT abdomen/pelvis: if obstruction/ischemia/perforation concern
• Head CT: if new neurologic symptoms or HA with vomiting
GASTROPARESIS:
• Gastric emptying scintigraphy: gold standard; hold motility agents (metoclopramide) and opioids 48h prior; hold if glucose >275 mg/dL; positive if >10% gastric retention at 4h
• EGD: exclude mechanical obstruction before diagnosing gastroparesis
• HbA1c, TSH, ANA, total protein/albumin (assess for metabolic or systemic causes)`,
    management: `ANTIEMETICS (choose based on etiology and QTc):
• Normal QTc: ondansetron 4-8mg IV/PO q8h (first-line); add prochlorperazine 10mg IV/PO q6h if persistent
• Prolonged QTc (>480ms): lorazepam 0.5-1mg IV/PO q6h; dexamethasone 4-8mg IV; diphenhydramine 25-50mg IV
• Opioid-induced N/V: ondansetron; consider rotating opioid or reducing dose; metoclopramide 10mg q6h
• Chemo N/V (highly emetogenic): dexamethasone + lorazepam + ondansetron → aprepitant → olanzapine (stepwise)
• Vestibular/Vertigo: meclizine 25mg q8h; dimenhydrinate; scopolamine patch
• Migraine: prochlorperazine 10mg IV (also acts as abortive migraine treatment); metoclopramide 10mg IV
• Functional/IBS: tricyclic antidepressants (low dose nortriptyline), mirtazapine; SSRIs (5-HT3 antagonist effect)
ANTIEMETIC DOSING REFERENCE:
• Ondansetron 2-8mg PO/IV q8h | Prochlorperazine 10mg PO/IV q6h | Promethazine 12.5-25mg IV/PR q6h | Haloperidol 0.5-1mg IV q6h (IV best for refractory)
GASTROPARESIS:
• Lifestyle: small meals (5-6/day), low fat, low non-digestible fiber, soft/pureed foods
• Glycemic optimization: gastroparesis worsens with hyperglycemia → tight glucose control
• Prokinetics (before meals): metoclopramide 5-10mg PO TID (max 12 weeks due to tardive dyskinesia risk); domperidone (not in US); erythromycin 125-250mg PO TID (short courses — tachyphylaxis)
• Refractory: GES (gastric electrical stimulation device — implanted by surgery); jejunal feeds if severe
SBO: NGT suction + IVF + bowel rest; gastrografin challenge (water-soluble contrast per NGT) for adhesive SBO → 74% avoid surgery; urgent surgery if ischemia/peritonitis/failure to progress`,
    monitoring: `• Electrolyte repletion: hypokalemia + metabolic alkalosis common with prolonged vomiting (measure K+, Cl− every 12-24h)
• Fluid balance: daily weights, I&O; IV hydration until tolerating PO
• Gastroparesis: HbA1c at every visit; renal function (metoclopramide doses in CKD)
• AIMS (Abnormal Involuntary Movement Scale): screen for tardive dyskinesia with metoclopramide`,
    disposition: `• ICU: aspiration, hemodynamic instability from volume depletion, severe electrolyte derangements
• GI consult: refractory N/V, cyclic vomiting, suspected gastroparesis (needs gastric emptying study)
• Nutrition consult: inability to maintain oral intake >7 days; consider enteral (NJ) vs parenteral nutrition`
  },

  {
    id: "diarrhea",
    system: "gi",
    title: "Diarrhea — Acute and Chronic",
    keywords: ["diarrhea","acute diarrhea","chronic diarrhea","infectious diarrhea","traveler diarrhea","secretory diarrhea","osmotic diarrhea","stool osmotic gap","IBS-D","malabsorption","SIBO","fecal lactoferrin","bloody diarrhea","dysentery"],
    source: { chapter: "Gastroenterology", section: "Diarrhea", pages: "69", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "Acute diarrhea: small bowel = watery, large volume, cramping/bloating; large bowel = frequent, small volume, ± fever, blood, mucus",
        "Workup if high-risk or severe: stool PCR (immunocompromised, severe sx, bloody diarrhea, sx >1 week), C. diff, shigatoxin, fecal leukocytes; stool O&P (3 samples q24h for travel, MSM, immunocompromised)",
        "Do NOT give antidiarrheal agents (loperamide) in bloody diarrhea/suspected bacterial colitis — risk of toxic megacolon with Shiga toxin-producing E. coli",
        "Stool osmotic gap = 290 − 2×(stool Na + stool K): >125 = osmotic (stops with fasting, lactose intolerance, laxative); <50 = secretory (persists with fasting)",
        "SIBO treatment: rifaximin 550mg TID x14 days (non-absorbable antibiotic); first address underlying cause (hypomotility, blind loop)"
      ]
    },
    assessment: `#Diarrhea
Type: Acute (<14 days) [ ] / Persistent (14-30 days) [ ] / Chronic (>30 days) [ ]
Character: watery (large bowel) [ ] / small volume-frequent (large bowel) [ ] / bloody [ ] / mucus [ ] / greasy/fatty (malabsorption) [ ]
SEVERE FEATURES: fever >101.3°F [ ] / >6 BMs/24h [ ] / hypovolemia [ ] / severe pain [ ] / bloody stools [ ]
HIGH-RISK: immunocompromised [ ] / HIV [ ] / IBD [ ] / age >70 [ ] / pregnant [ ]
Exposure: travel [ ] (destination: ***) / antibiotics [ ] / sick contacts [ ] / food (undercooked meat/seafood/eggs) [ ] / hospitalization [ ]
Chronic diarrhea pattern: worse with fasting (secretory) [ ] / improves with fasting (osmotic) [ ] / blood/mucus (inflammatory) [ ] / fatty/malabsorptive [ ]
Current medications: ***`,
    ddx: `ACUTE INFECTIOUS:
• Viral (norovirus/rotavirus/adenovirus): 48-72h illness, watery, vomiting prominent, winter outbreaks
• Bacterial toxin (S. aureus/B. cereus/C. perfringens): sudden onset (1-8h after eating), short-lived, N/V prominent, no fever
• Invasive bacteria: Salmonella (eggs/poultry, bacteremia common), Shigella (low inoculum, hematochezia), Campylobacter (undercooked/unpasteurized, reactive arthritis risk, GBS), E. coli O157:H7 (undercooked beef, HUS risk — NO antibiotics, NO loperamide), Yersinia (undercooked pork, pseudo-appendicitis)
• C. difficile: antibiotics (within 3 months), hospitalization (see CDI template)
• Parasites: Giardia (water, outdoor streams), Cryptosporidium (immunocompromised), Entamoeba (travel, MSM)
CHRONIC DIARRHEA:
• Secretory (osmotic gap <50): microscopic colitis, lymphocytic colitis, VIPoma, carcinoid, bile acid diarrhea (post-ileal resection), medications (metformin, SSRIs, proton pump inhibitors, magnesium-containing antacids)
• Osmotic (gap >125): lactose intolerance, sorbitol/fructose (sugar alcohols in "diet" foods), laxative use
• Inflammatory (gap variable): IBD (Crohn's/UC), ischemic colitis, radiation colitis, ICI colitis (immune checkpoint inhibitor)
• Malabsorptive: celiac disease, SIBO (small intestinal bacterial overgrowth), pancreatic exocrine insufficiency, short bowel syndrome`,
    workup: `ACUTE (high-risk/severe features):
• Stool culture + sensitivity, C. diff PCR/toxin, fecal leukocytes/lactoferrin, shigatoxin (if bloody diarrhea — O157:H7)
• Stool O&P (3 samples q24h): travel diarrhea, MSM, immunocompromised, symptoms >1 week
• CBC (WBC), BMP (hypovolemia, electrolytes), lactate (if severe/systemic illness)
• Blood cultures x2: if fever + diarrhea + toxic-appearing (Salmonella bacteremia common)
CHRONIC (outpatient workup):
• CBC (anemia, eosinophilia), CMP, TSH, celiac serologies (tTG-IgA + total IgA), ESR/CRP (IBD screen)
• Stool calprotectin: elevated = inflammatory; helps distinguish IBD from IBS (Sn 93%, Sp 96%)
• Colonoscopy + random biopsies: suspected IBD, microscopic colitis, or any new chronic diarrhea age >45
• Stool fat (72h collection) or fecal elastase: malabsorption vs. pancreatic exocrine insufficiency
• SIBO workup: glucose hydrogen breath test; or treat empirically if strong clinical suspicion`,
    management: `ACUTE INFECTIOUS:
• Rehydration: oral rehydration solution (ORS) for mild-moderate; IV fluids for severe dehydration
• Diet: BRAT diet helpful; early reintroduction of normal diet shortens illness
• Antibiotics: NOT routinely indicated for acute self-limited diarrhea; consider if:
  - Febrile + bloody diarrhea + sick-appearing: ciprofloxacin 500mg BID x3-5 days OR azithromycin 500mg qday x3 days
  - Traveler's diarrhea: azithromycin (drug of choice) or rifaximin; cipro/levo in non-inflammatory
  - Shigella: azithromycin or cipro x3-5 days (treat all cases)
  - Campylobacter: azithromycin (preferred) x3-5 days if severe
  - Giardia: metronidazole 500mg TID x7 days OR tinidazole 2g x1
  - Cryptosporidium: nitazoxanide (immunocompetent); supportive + optimize immune function (HIV: ART)
• Avoid antibiotics: E. coli O157:H7 (↑HUS risk); viral diarrhea; mild traveler's diarrhea
• Avoid antiperistaltics (loperamide): bloody diarrhea, fever, severe abdominal pain, suspected bacterial colitis
CHRONIC:
• Lactose intolerance: lactase supplement (Lactaid); dietary modification
• SIBO: rifaximin 550mg TID x14 days; address underlying cause (correct anatomic/motility issues)
• Microscopic colitis: stop causative drugs (PPIs, NSAIDs, SSRIs); budesonide 9mg/day x8 weeks (most effective)
• IBS-D: see IBS section of Constipation/IBS template
• Bile acid diarrhea: cholestyramine 4g BID-TID (bile acid sequestrant)`,
    monitoring: `• Rehydration adequacy: urine output, skin turgor, orthostatics, daily weights
• Electrolytes (K+, Na) in prolonged diarrhea — hypokalemia and hyponatremia common
• E. coli O157:H7: CBC, Cr every 1-2 days for first 7 days (HUS risk) — if Hgb falling + thrombocytopenia + rising Cr → nephrology consult (HUS)`,
    disposition: `• Admit: dehydration requiring IV fluids, severe systemic symptoms, bloody diarrhea with hemodynamic instability, immunocompromised
• GI consult: chronic diarrhea evaluation, suspected IBD, ICI colitis, suspected microscopic colitis
• Outpatient: most mild-moderate acute infectious diarrhea with good oral hydration`
  },

  {
    id: "constipation-ibs",
    system: "gi",
    title: "Constipation / IBS / Colonic Disorders",
    keywords: ["constipation","IBS","irritable bowel syndrome","diverticulosis","diverticulitis","polyethylene glycol","Miralax","laxatives","IBS-C","IBS-D","Rome IV","lubiprostone","linaclotide","hemorrhoids","volvulus"],
    source: { chapter: "Gastroenterology", section: "Constipation, IBS & Colonic Disorders", pages: "70–71", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "Constipation Rome IV: <3 spontaneous BMs/week + ≥2 of: hard stools, straining, incomplete evacuation, anorectal blockage, manual facilitation — for ≥3 months",
        "Secondary constipation: medications (opioids most common inpatient cause — methylnaltrexone or naloxegol for opioid-induced), hypothyroidism, hypercalcemia, DM, Parkinson's, spinal cord injury",
        "IBS Rome IV: recurrent abdominal pain ≥1 day/week for 3 months + ≥2 of: related to defecation, change in stool frequency, change in stool form; subtypes C/D/M/U",
        "Diverticulitis: uncomplicated → PO antibiotics outpatient (ciprofloxacin + metronidazole OR amoxicillin-clavulanate x7-10d); complicated (abscess >4cm, fistula, perforation) → hospital + CT-guided drainage vs surgery",
        "PEG (Miralax) 17g qday: most effective and best-tolerated first-line laxative for chronic constipation (more effective than lactulose, fewer side effects)"
      ]
    },
    assessment: `#Constipation / IBS / Colonic Disorder
CONSTIPATION: <3 BMs/week [ ] / hard stools [ ] / straining [ ] / incomplete evacuation [ ] / manual facilitation [ ]
Secondary causes: opioids [ ] / anticholinergics [ ] / hypothyroid [ ] / hypercalcemia [ ] / DM [ ] / neurologic [ ]
Alarm features: age >50 with new symptom change [ ] / rectal bleeding [ ] / IDA [ ] / weight loss [ ] / FH CRC/IBD [ ]
IBS: abdominal pain relieved by defecation [ ] / change in stool frequency [ ] / change in stool consistency [ ]
Duration ≥3 months [ ] | Subtype: [ ] IBS-C (constipation)  [ ] IBS-D (diarrhea)  [ ] IBS-M (mixed)
DIVERTICULAR: location of pain (LLQ %) | fever [ ] | CT: *** | Perforation/abscess: [ ] Yes  [ ] No`,
    ddx: `CONSTIPATION (secondary causes):
Medications: opioids, anticholinergics (antihistamines, TCAs, antipsychotics), iron, Ca channel blockers, ondansetron, aluminum-containing antacids, clonidine, barium
Metabolic: hypothyroidism, hypercalcemia, hypokalemia, hypomagnesemia, uremia, heavy metal poisoning
Neurologic: Parkinson's, MS, spinal cord injury/compression, Hirschsprung disease, DM autonomic neuropathy
Structural: colon cancer (new onset, age >50 → colonoscopy), stricture, rectocele, external compression

IBS DDx: IBD, microscopic colitis, celiac disease, SIBO, lactose intolerance, functional constipation (no pain), endometriosis, ovarian pathology, chronic appendicitis (rare)

DIVERTICULAR DISEASE:
• Diverticulosis: incidental (CT/colonoscopy); no treatment needed; high-fiber diet
• Acute diverticulitis: LLQ pain + fever + leukocytosis; CT: pericolic fat stranding ± abscess
• Diverticular bleeding: painless hematochezia (see LGIB template)`,
    workup: `CONSTIPATION (alarm features or age >45):
• Colonoscopy: exclude malignancy, assess for melanosis coli (anthranoid laxative use), assess colonic anatomy
• TSH, calcium, BMP (metabolic secondary causes)
• Anorectal manometry + balloon expulsion test: if dyssynergic defecation suspected (straining, incomplete evacuation, sense of blockage)
• Colonic transit study (Sitz markers or wireless capsule): if STC suspected after failed laxative therapy
IBS:
• Rome IV criteria — diagnosis of exclusion; no routine labs/imaging needed if typical presentation, age <45, no alarm features
• CBC, CMP, TSH, celiac serologies (tTG-IgA), fecal calprotectin: if any doubt or alarm features
• Colonoscopy: alarm features, chronic diarrhea-predominant >45 years, positive calprotectin
DIVERTICULITIS:
• CT abdomen/pelvis with IV contrast (preferred): confirms diagnosis, grades severity, guides treatment
• CBC (leukocytosis), BMP, lactate (if severe)
• Blood cultures: if fever and toxic-appearing`,
    management: `CONSTIPATION:
• Step 1 — Lifestyle: ↑ fiber (25-35g/day gradually), ↑ fluids (8 glasses/day), physical activity, scheduled toilet time after meals (gastrocolic reflex)
• Step 2 — Osmotic laxatives (first-line for chronic constipation): PEG (Miralax) 17g PO qday (most evidence, best tolerated); lactulose 15-60mL qday (alternative, more bloating)
• Step 3 — Stimulant laxatives (acute or add-on): senna 2-4 tabs PO qHS or BID; bisacodyl 5-15mg PO qHS or 10mg PR AM
• Secretagogues (for CIC or IBS-C): lubiprostone 24mcg PO BID with food; linaclotide 290mcg PO QAC (30 min before meals)
• Opioid-induced constipation: methylnaltrexone 8-12mg SQ (preferred — peripherally restricted mu opioid antagonist); naloxegol 25mg PO qday; increase laxatives first
• Dyssynergic defecation: biofeedback therapy (most effective, not medications); pelvic floor physical therapy
IBS:
• IBS-D: low-FODMAP diet (fermentable oligosaccharides/disaccharides/monosaccharides/polyols) + psychotherapy (CBT); loperamide PRN; rifaximin 550mg TID x14 days; eluxadoline 100mg BID
• IBS-C: PEG/lactulose; lubiprostone 8mcg BID; linaclotide 290mcg QAC; low-FODMAP diet
• Central sensitization/visceral hyperalgesia: tricyclic antidepressants (amitriptyline/nortriptyline 10-25mg QHS); SSRIs (IBS-D); SNRIs
DIVERTICULITIS:
• Uncomplicated (no abscess, no systemic sepsis): ciprofloxacin 500mg BID + metronidazole 500mg TID x7-10 days PO; OR amoxicillin-clavulanate 875/125mg BID x7-10 days; outpatient management if tolerating PO
• Complicated (abscess <4cm): add hospital admission; NPO; IV antibiotics (pip-tazo 4.5g q6h OR CTX + metronidazole); most <4cm resolve with antibiotics
• Complicated (abscess ≥4cm): CT-guided percutaneous drainage + IV antibiotics; surgery if fails
• Perforation/fistula: urgent surgery consult; emergent OR if peritonitis`,
    monitoring: `• Laxative response: bowel frequency and consistency (Bristol Stool Scale) after 1-2 weeks
• Electrolytes: with prolonged laxative use (osmotic/stimulant)
• Diverticulitis: fever, WBC, CT at 72h if not improving on antibiotics; outpatient colonoscopy at 6-8 weeks after acute episode resolves (rule out malignancy)`,
    disposition: `• Admit: complicated diverticulitis, unable to tolerate PO, systemic sepsis
• Surgery: perforated diverticulitis, failed percutaneous drainage, recurrent diverticulitis (relative — elective sigmoidectomy after 2nd episode)
• GI consult: refractory constipation, IBS not responding to initial treatment, alarm features
• Outpatient: uncomplicated diverticulitis tolerating PO, chronic constipation management, IBS`
  },

  {
    id: "esophageal-disorders-celiac",
    system: "gi",
    title: "Esophageal Disorders / Celiac Disease",
    keywords: ["dysphagia","esophageal","achalasia","EoE","eosinophilic esophagitis","celiac disease","gluten-free diet","tTG","Plummer Vinson","esophageal spasm","odynophagia","manometry","Barrett","esophageal motility"],
    source: { chapter: "Gastroenterology", section: "Esophageal Disorders & Celiac", pages: "72", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "Dysphagia evaluation: solids only = structural (stricture/ring/web/cancer); solids + liquids = motility disorder (achalasia/spasm/scleroderma); transfer dysphagia (liquids more than solids) = oropharyngeal/neuromuscular",
        "Achalasia: failure of LES relaxation + absent esophageal peristalsis; barium swallow shows 'bird-beak' narrowing; manometry diagnostic; treatment: pneumatic dilation, Heller myotomy, or POEM",
        "EoE: dysphagia + food impaction + GERD symptoms unresponsive to PPI; EGD shows rings/strictures/furrows/white plaques; biopsy ≥15 eosinophils/HPF; treat with PPI + topical steroids + dietary elimination",
        "Celiac disease: immune response to gluten → villous atrophy → malabsorption; diagnose with serum tTG-IgA + total IgA (screen for IgA deficiency); confirm with EGD + small bowel biopsies (Marsh score)",
        "Celiac associations: type 1 DM, thyroid disease, IgA nephropathy, Sjogren's, osteoporosis — screen with unexplained IDA, elevated LFTs, dermatitis herpetiformis, first-degree relatives"
      ]
    },
    assessment: `#Esophageal / Celiac Disorder
DYSPHAGIA:
Type: solids only (structural) [ ] / solids + liquids (motility) [ ] / liquids worse than solids (oropharyngeal) [ ]
Transfer dysphagia: coughing/choking during swallowing [ ] / nasopharyngeal regurgitation [ ] — neuromuscular evaluation needed
Progressive: [ ] Yes (cancer/stricture concern → EGD)  [ ] No  |  Regurgitation of undigested food: [ ] Yes (achalasia)
Odynophagia (pain with swallowing): infection (Candida/CMV/HSV) [ ] / pill esophagitis [ ] / radiation [ ]
EoE: food impaction hx [ ] / atopic hx (eczema/asthma/allergies) [ ] / PPI trial failed [ ]
CELIAC: chronic diarrhea [ ] / weight loss [ ] / IDA [ ] / elevated LFTs [ ] / DH rash [ ] / T1DM [ ] / first-degree relative [ ]
tTG-IgA: ___ | Total IgA: ___ | EGD biopsy: *** (Marsh score)`,
    ddx: `ESOPHAGEAL DYSPHAGIA:
Motility (solids + liquids): Achalasia (regurgitation of undigested food, weight loss, bird-beak on barium), diffuse esophageal spasm (intermittent, severe chest pain, corkscrew esophagus), scleroderma (Raynaud's, systemic sclerosis), functional dysphagia
Structural/Intrinsic (solids > liquids): Schatzki ring (B-ring at GEJ — lower esophageal ring, episodic, food impaction), esophageal stricture (progressive, acid-related or EoE), EoE, cancer (progressive, weight loss, age >50), pill esophagitis (NSAIDs/tetracycline/bisphosphonates — odynophagia)
Structural/Extrinsic: vascular ring, mediastinal mass/LAD, thyroid/substernal goiter, aortic aneurysm
OROPHARYNGEAL DYSPHAGIA: stroke, Parkinson's, ALS, MG, polymyositis, Zenker's diverticulum (regurgitation of undigested food + gurgling noise + bad breath)
CELIAC DDx: tropical sprue, refractory sprue, SIBO, lactose intolerance, IBD, hypogammaglobulinemia, lymphoma (EATL — enteropathy-associated T-cell lymphoma, complication of refractory celiac)`,
    workup: `DYSPHAGIA:
• EGD with biopsy: first-line for most esophageal dysphagia; assess for stricture, ring, EoE (biopsy proximal + distal esophagus), cancer, Barrett's, infection
• Barium esophagram: motility assessment (bird-beak in achalasia, corkscrew in DES), Zenker's diverticulum, structural lesions
• High-resolution esophageal manometry: gold standard for achalasia and motility disorders (Chicago Classification)
  - Achalasia types: I (aperistalsis), II (panesophageal pressurization), III (premature/spastic — most common)
• CT chest: extrinsic compression, mediastinal mass, lymphadenopathy
• Swallowing study (modified barium): oropharyngeal dysphagia evaluation; SLP referral for aspiration assessment
EoE:
• EGD with biopsies of proximal and distal esophagus (both): ≥15 eos/HPF diagnostic
CELIAC:
• Serum tTG-IgA + total IgA (rule out IgA deficiency — 2-3% population): if IgA deficient → IgG deamidated gliadin peptides (DGP)
• EGD with small bowel biopsies (duodenum): villous atrophy, crypt hyperplasia, intraepithelial lymphocytes; Marsh score
• HLA-DQ2/DQ8: negative = celiac excluded; positive = not diagnostic (high prevalence in population)
• DEXA scan: bone density at diagnosis (osteoporosis common)
• CBC (IDA), ferritin, folate, B12, 25-OH vitamin D (malabsorption panel)`,
    management: `ACHALASIA:
• Pneumatic dilation (PD): endoscopic balloon dilation at GEJ; 50-90% effective; repeat treatments often needed; risk of perforation ~3%
• Laparoscopic Heller myotomy (LHM): surgical + partial fundoplication; durable, 85-90% effective; lower perforation risk than PD
• POEM (Per-Oral Endoscopic Myotomy): endoscopic; equivalent to LHM; no external incision; GERD more common post-POEM
• Botulinum toxin injection (Botox): temporary (6-12 months); elderly or poor surgical candidates
• Calcium channel blockers/nitrates: minimal benefit; prior to procedure as bridge
EoE:
• PPI 40mg PO BID x8 weeks: first-line (resolves EoE in 30-50%)
• Topical swallowed steroids: budesonide viscous slurry or fluticasone MDI (puff then swallow) x8-12 weeks
• Six-food elimination diet (dairy, wheat, soy, eggs, nuts, seafood): eliminates one at a time; most effective with dairy + wheat
• Dupilumab (IL-4/IL-13 inhibitor): FDA-approved for moderate-severe EoE
• Endoscopic dilation: symptomatic stricture not responding to medications
CELIAC:
• Strict gluten-free diet (GFD): lifelong; eliminate wheat, barley, rye; oats controversial (cross-contamination risk)
• Dietitian referral: essential for GFD education
• Vitamin supplementation: Fe, folate, B12, Ca, Vit D (correct deficiencies)
• Refractory celiac (symptoms persist on strict GFD): check for inadvertent gluten exposure; rule out SIBO, lymphoma, RCD type II (treat with immunosuppressants; enteroscopy + CT)`,
    monitoring: `• EoE: repeat EGD + biopsy at 8-12 weeks after treatment initiation — assess for histologic remission (<15 eos/HPF)
• Celiac: tTG-IgA at 6-12 months on GFD (should normalize); bone density yearly (osteoporosis treatment if T-score <−2.5)
• Achalasia: symptom reassessment at 3-6 months after dilation/myotomy; timed barium esophagram at 1 year`,
    disposition: `• GI/motility specialist: achalasia, EoE requiring biologic therapy, refractory celiac
• Surgery (thoracic): Heller myotomy, esophageal cancer
• Dietitian: celiac disease, EoE elimination diet
• SLP: oropharyngeal dysphagia, aspiration`
  },

  {
    id: "ibd",
    system: "gi",
    title: "Inflammatory Bowel Disease (UC / Crohn's)",
    keywords: ["IBD","inflammatory bowel disease","ulcerative colitis","Crohn disease","UC","infliximab","adalimumab","vedolizumab","ustekinumab","mesalamine","biologics IBD","steroid IBD","fecal calprotectin","colonoscopy IBD","toxic megacolon"],
    source: { chapter: "Gastroenterology", section: "Inflammatory Bowel Disease", pages: "73–74", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "UC: continuous inflammation from rectum proximally, mucosal only; bloody diarrhea + tenesmus; extra-intestinal (EIM): arthritis, pyoderma gangrenosum, EN, uveitis, PSC (unique to UC-related IBD)",
        "Crohn's: any GI tract, transmural, skip lesions, granulomas, fistulae/abscesses; RLQ pain + diarrhea +/- bloody; perianal disease common",
        "Acute severe UC (ASUC): admit, IV methylprednisolone 60mg/day; ciclosporin or infliximab if steroid-refractory by day 3-5; colectomy if no response",
        "Biologics first-line for moderate-severe IBD: infliximab + azathioprine (combination) > infliximab alone (SONIC trial); vedolizumab (gut-selective); ustekinumab (IL-12/23); ozanimod/etrasimod (S1P modulators)",
        "CRC surveillance: colonoscopy after 8 years of active disease, then q1-3 years with 4-quadrant biopsies every 10cm"
      ]
    },
    assessment: `#Inflammatory Bowel Disease (IBD) — Flare Assessment
Type: [ ] Ulcerative Colitis  [ ] Crohn's Disease  | Disease extent: ***
ACTIVITY SEVERITY:
UC: [ ] Mild (<4 BMs/day, no blood)  [ ] Moderate (4-6 bloody stools/day, mild systemic sx)  [ ] Severe (>6 bloody stools + systemic signs — ADMIT)
Crohn's: [ ] Mild (ambulatory, tolerating PO)  [ ] Moderate (failed mild treatment, systemic sx)  [ ] Severe (cachexia, obstruction, abscess, perianal)
Systemic signs: fever *** / HR *** / Hgb *** / ESR/CRP ***
Current medications: *** | Last biologic: *** | Last steroid course: ***
Complications: toxic megacolon [ ] / obstruction [ ] / abscess [ ] / fistula [ ] / perforation [ ]
Extra-intestinal: arthritis [ ] / EN/PG [ ] / uveitis [ ] / scleritis [ ] / PSC [ ]`,
    ddx: `UC vs CROHN'S vs OTHERS:
• UC: rectal involvement always present; continuous inflammation; bloody diarrhea + tenesmus; no skip lesions; no fistulae
• Crohn's: skip lesions, transmural, perianal disease, fistulae/abscesses, upper GI involvement; 50% have ileocolonic disease
• Indeterminate colitis: 5-10% cannot be classified → IBD-unclassified

ACUTE FLARE DDx:
• C. difficile superinfection: common in IBD; check toxin/PCR with any acute flare (especially recent antibiotics)
• CMV colitis: immunosuppressed IBD patients; steroid-refractory; colonoscopy + biopsies (intranuclear inclusions); ganciclovir
• Other infectious colitis: Salmonella, Campylobacter, E. coli O157:H7, Yersinia — can mimic IBD; stool cultures
• Ischemic colitis: older patients with vascular risk factors; distribution matches colonic watershed areas
• NSAID-induced colitis: medication history; circumferential ulcers; discontinue NSAIDs
• ICI (immune checkpoint inhibitor) colitis: recent immunotherapy; watery diarrhea; responds to steroids`,
    workup: `• CRP, ESR, CBC, BMP, albumin, LFTs (baseline and before biologics), procalcitonin
• Fecal calprotectin: marker of intestinal inflammation; guides scope timing; >250 mcg/g = active IBD likely
• C. diff toxin/PCR (ALL IBD flares — critical to exclude before escalating immunosuppression)
• CMV colitis testing: CMV quantitative PCR (blood) + endoscopic biopsies if steroid-refractory
• Stool cultures: if infectious etiology possible
• CT abdomen/pelvis with IV contrast: abscesses, fistulae, perforation, obstruction, toxic megacolon
• MRI pelvis (preferred for perianal Crohn's): soft tissue contrast, fistula anatomy
• Colonoscopy with biopsies: definitive diagnosis, assess extent, guide therapy; defer if toxic megacolon or fulminant
• TPMT/NUDT15 genotyping: before starting thiopurines (azathioprine/6-MP) — risk for myelosuppression
• TB testing (IGRA) + hepatitis B serology: before starting biologics (reactivation risk)
• Fecal calprotectin: >250 = active inflammation`,
    management: `MILD-MODERATE UC:
• Proctitis (E1): 5-ASA suppository (Canasa 1g PR QHS) + 5-ASA oral; rectal mesalamine > oral
• Left-sided (E2) or Extensive (E3): oral mesalamine (Lialda/Apriso 2.4-4.8g/day) ± topical; goal complete mucosal healing
• Steroid-sparing: azathioprine 2-2.5mg/kg/day or 6-MP 1-1.5mg/kg/day for maintenance; check TPMT first
MODERATE-SEVERE UC: BIOLOGICS (combination therapy preferred)
• Infliximab (anti-TNF): 5mg/kg IV at 0, 2, 6 weeks → q8 weeks maintenance; combination with azathioprine (superior to mono — SONIC trial; reduces immunogenicity)
• Vedolizumab (anti-α4β7 integrin — gut selective): 300mg IV at 0, 2, 6 weeks → q8 weeks; preferred if TB, heart failure, malignancy risk
• Ustekinumab (anti-IL-12/23): loading dose based on weight IV × 1, then 90mg SQ q8-12 weeks
• JAK inhibitors (tofacitinib/upadacitinib/filgotinib): oral; rapid onset; caution with cardiovascular risk
ACUTE SEVERE UC (>6 bloody stools + systemic signs):
• Admit; IV methylprednisolone 60mg/day (or 300mg hydrocortisone/day divided); stool cultures + C. diff; blood cultures if febrile
• Infliximab rescue (by day 3-5 if no response): 5mg/kg IV (accelerated dosing: 0, 1-3, 7 days); OR cyclosporine 4mg/kg/day IV (bridge to azathioprine)
• Colectomy: if no response after 4-7 days of rescue therapy; hemorrhage; toxic megacolon; perforation
CROHN'S DISEASE:
• Mild ileal/ileocolonic: budesonide 9mg/day PO x8-16 weeks (preferred to prednisone — less systemic SE)
• Moderate-severe: infliximab (IFX) + azathioprine combination (top-down approach); vedolizumab; ustekinumab
• Perianal Crohn's: metronidazole 500mg TID + ciprofloxacin 500mg BID; infliximab (closes fistulae); surgical drainage of abscesses
• Steroid induction: prednisolone 40-60mg/day (avoid long-term), taper once remission achieved
MAINTENANCE: azathioprine, 6-MP (thiopurines), biologic, or combination; aminosalicylates for UC maintenance
IBD SURGERY:
• UC: total proctocolectomy + ileal pouch-anal anastomosis (IPAA — J-pouch); curative
• Crohn's: limited resections, strictureplasty, drainage procedures (NOT curative)`,
    monitoring: `• CRP and fecal calprotectin every 3-6 months in remission; more frequent during flare
• Biologic drug levels (infliximab trough ≥5-10 mcg/mL; adalimumab ≥7.5 mcg/mL): check 4 weeks after last infusion if inadequate response
• CBC, LFTs, albumin every 3-6 months (thiopurine monitoring); CBC q6 months on biologics
• Colonoscopy: assess mucosal healing at 6-12 months after starting new therapy; CRC surveillance q1-3 years after 8 years of disease
• Anti-drug antibodies: if secondary loss of response to biologic; check with trough level`,
    disposition: `• Admit: acute severe UC, toxic megacolon, abscess, obstruction, perforation, inability to tolerate PO
• Surgery: perforated IBD, failed medical therapy for ASUC, dysplasia/cancer, severe perianal disease
• GI/IBD center: all moderate-severe IBD, biologic initiation, surgical planning`
  },

  {
    id: "intestinal-disorders",
    system: "gi",
    title: "Intestinal Disorders (SBO / Ileus / Mesenteric Ischemia)",
    keywords: ["SBO","small bowel obstruction","ileus","mesenteric ischemia","bowel obstruction","volvulus","adhesions","gastrografin","mesenteric infarct","acute mesenteric ischemia","colonic pseudo-obstruction","Ogilvie syndrome","CT abdomen obstruction"],
    source: { chapter: "Gastroenterology", section: "Intestinal Disorders", pages: "75", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "SBO vs ileus: ileus = no obstruction (dilated loops with air throughout colon, no transition point on CT); SBO = mechanical obstruction (transition point, decompressed colon distal to obstruction)",
        "Adhesive SBO (most common cause — prior surgery): gastrografin (water-soluble contrast) challenge per NGT reduces surgery rate by 74% (BJS 2010;97:470); appears in colon within 4-8h = partial, proceed with medical management",
        "Acute mesenteric ischemia: pain out of proportion to exam + vascular RFs; SMA occlusion most common; CTA abdomen/pelvis; immediate anticoagulation + surgery/IR; mortality 50-70% if delayed",
        "Ischemic colitis: post-cardiovascular event/surgery, watershed areas (splenic flexure, sigmoid); CT shows thumbprinting/wall thickening; colonoscopy confirms; conservative management in most",
        "Ogilvie syndrome (colonic pseudo-obstruction): massive colonic dilation without obstruction; ICU/post-operative; neostigmine 2mg IV if cecum >10cm (atropine at bedside for bradycardia); colonoscopic decompression if fails"
      ]
    },
    assessment: `#Intestinal Disorder — SBO / Ileus / Mesenteric Ischemia
Symptoms: N/V [ ] / obstipation (no BM or flatus) [ ] / abdominal distention [ ] / crampy pain [ ]
Bowel sounds: [ ] High-pitched  [ ] Absent  [ ] Normal
Peritoneal signs: rigidity [ ] / rebound [ ] / guarding [ ] → SURGERY NOW
MESENTERIC ISCHEMIA concern: pain out of proportion to exam [ ] + vascular RFs [ ] → CTA STAT
CT findings: dilated loops *** / transition point *** / decompressed colon *** / pneumatosis *** / free air [ ]
SBO type: [ ] Partial (gas in colon)  [ ] Complete (no gas in colon)  [ ] Closed loop (C or U shape — EMERGENCY)
Prior abdominal surgery (adhesions risk): [ ] Yes ***  [ ] No
Hernia: [ ] Identified on exam (*** location)  [ ] No`,
    ddx: `SBO CAUSES (by frequency): adhesions (most common — prior surgery), hernias (inguinal/umbilical/femoral/incisional), IBD (Crohn's strictures), malignancy (colon cancer/lymphoma/carcinomatosis), radiation strictures, volvulus, gallstone ileus, foreign body
ILEUS CAUSES: post-operative (most common), peritonitis/sepsis, electrolyte imbalance (hypoK, hypoMg), opioids/anticholinergics, metabolic (hypothyroidism, DKA), intra-abdominal inflammation
MESENTERIC ISCHEMIA:
• Acute arterial occlusion (50%): cardiac embolic (AFib, LV thrombus) or thrombosis; SMA > IMA; "pain out of proportion"
• Non-occlusive (5-15%): hypoperfusion/vasospasm; post-cardiac surgery, cocaine, vasopressors
• Mesenteric vein thrombosis (5-15%): hypercoagulable state, portal hypertension, inflammatory intra-abdominal process
• Ischemic colitis (25-40%): watershed areas (splenic flexure, sigmoid); lower acuity; rarely requires surgery
VOLVULUS: sigmoid (most common — elderly with chronic constipation) or cecal; "coffee bean" sign on KUB; proctoscopic decompression (sigmoid) vs surgery (cecal)
OGILVIE SYNDROME (colonic pseudo-obstruction): massive cecal dilation (>10cm) in ICU/post-op patient; risk of perforation if cecum >12cm`,
    workup: `• CT abdomen/pelvis with IV + oral contrast (preferred): identifies transition point, determines partial vs complete, assesses for ischemia, closed-loop obstruction, volvulus, hernias
• KUB: less sensitive than CT; may show air-fluid levels, dilation, free air (perforation)
• CTA abdomen/pelvis (with IV only, no oral contrast): for mesenteric ischemia (arterial phase) — assesses mesenteric vessels
• Labs: CBC (leukocytosis), BMP (lactate — elevated = ischemia/necrosis), LFTs, amylase, lipase, blood cultures
• NG tube aspiration: if obstruction confirmed; decompress + bilious vs non-bilious assessment`,
    management: `ILEUS: bowel rest, NPO; NGT if moderate/severe symptoms; correct electrolytes (↑K+, Mg); HOLD opioids and anticholinergics; ambulate; methylnaltrexone if opioid-induced
ADHESIVE SBO:
• Initial: NGT suction (decompress), IVF, NPO, correct electrolytes; serial abdominal exams
• Gastrografin challenge: 100mL water-soluble contrast per NGT → KUB or CT at 4-8h; contrast reaching colon = partial obstruction → proceed conservatively (74% avoid surgery); absent from colon = complete → surgery
• Indications for emergency surgery: peritoneal signs, complete SBO failing conservative treatment, ischemia on CT, closed-loop obstruction
STRANGULATION / ISCHEMIA SIGNS (OR STAT): fever, leukocytosis, peritoneal signs, metabolic acidosis, pneumatosis intestinalis, portal venous gas on CT → immediate surgery
ACUTE MESENTERIC ISCHEMIA:
• Immediate anticoagulation: heparin bolus → infusion (even before definitive imaging)
• CT angiography → IR (catheter-directed thrombolysis/embolectomy) or emergency laparotomy + revascularization
• Bowel rest; broad-spectrum antibiotics (anaerobic + GNR coverage) if ischemia/necrosis suspected
• Mortality 50-70% with necrosis — early diagnosis is critical
ISCHEMIC COLITIS: bowel rest + IVF; antibiotics if signs of transmural ischemia (fever + peritoneal signs); colonoscopy at 48-72h (confirm diagnosis + assess extent); surgery for full-thickness necrosis, perforation, or failure to improve
OGILVIE SYNDROME: correct electrolytes, stop anticholinergics/opioids; neostigmine 2mg IV over 5 min if cecum >10cm (colonoscopic decompression if neostigmine fails); have atropine ready (bradycardia risk)
SIGMOID VOLVULUS: proctoscopic decompression (rigid proctoscope + rectal tube) then elective sigmoid resection; CECAL volvulus → surgical resection (right hemicolectomy)`,
    monitoring: `• Serial abdominal exams every 4-6h; immediate escalation if peritoneal signs develop
• Lactate every 4-6h in mesenteric ischemia (rising lactate = worsening ischemia)
• NGT output every shift in SBO; KUB or CT after gastrografin challenge (4-8h)
• Ogilvie: cecal diameter measurement on daily KUB or CT; perforation risk >12cm`,
    disposition: `• OR STAT: free perforation, peritoneal signs, closed-loop obstruction, mesenteric ischemia with necrosis
• Surgery consult: all complete SBO, suspected mesenteric ischemia, volvulus
• GI consult: Ogilvie syndrome (colonoscopic decompression), ischemic colitis evaluation`
  },

  {
    id: "nutrition-feeding",
    system: "gi",
    title: "Nutrition & Feeding (Enteral / Parenteral / Refeeding)",
    keywords: ["nutrition","enteral nutrition","parenteral nutrition","TPN","PPN","NGT","NJ tube","PEG","nasogastric feeding","refeeding syndrome","malnutrition","tube feeds","albumin nutrition","nasojejunal","MUST score"],
    source: { chapter: "Gastroenterology", section: "Nutrition & Feeding", pages: "76", authors: "Reena Goswami",
      keyFacts: [
        "Nutrition route hierarchy: oral > enteral (EN) > parenteral (PN); always prefer enteral if GI tract functional — maintains gut integrity, reduces bacterial translocation, cheaper, safer",
        "Early EN: initiate within 24-48h of ICU admission; advance to goal within 48-72 hours; do NOT routinely check gastric residuals (NEJM 2014;370:1227)",
        "Refeeding syndrome: hypophosphatemia (hallmark) + hypokalemia + hypomagnesemia within 72h of refeeding after prolonged starvation; risk: 5+ days NPO, severe malnutrition, alcoholism, anorexia",
        "Malnutrition: weight loss >2% in 1 week, >5% in 1 month, >7.5% in 3 months, >10% in 6 months; albumin confounded by inflammation — not reliable nutritional marker in acute illness",
        "TPN caloric needs: 25-30 kcal/kg/day total; protein 1.2-1.5 g/kg/day (1.5-2 g/kg in critically ill); lipids 20-30% of total calories; ≤0.5 g/kg/h dextrose infusion"
      ]
    },
    assessment: `#Nutrition & Feeding Assessment
Nutritional status: wt loss *** lbs over *** weeks | BMI: *** | MUST score: ***
Enteral route feasible: [ ] Yes (oral/NGT/NJ/PEG)  [ ] No (GI tract non-functional → consider TPN)
Current nutrition: [ ] PO (tolerating ***)  [ ] NGT feeds ***  [ ] NJ/PEG-J feeds ***  [ ] TPN: ***
Caloric needs: *** kcal/day (goal 25-30 kcal/kg/day) | Protein: *** g/day (goal 1.2-1.5 g/kg/day)
Refeeding risk: >5 days NPO [ ] / severe malnutrition [ ] / alcoholism [ ] / anorexia [ ] / BMI <16 [ ]
Tube type/position: *** | Confirmed by: [ ] CXR  [ ] KUB  [ ] Gastric aspirate pH`,
    ddx: `INDICATIONS FOR ENTERAL NUTRITION (EN):
• Unable to maintain adequate oral intake for ≥5-7 days (or sooner in critically ill)
• Swallowing dysfunction (stroke/ALS/head-neck cancer/prolonged intubation)
• Bowel surgery with anticipated prolonged NPO period
• Critically ill (ICU) patients — start within 24-48h even if hemodynamically stable
ENTERAL ROUTE SELECTION:
• NGT (nasogastric): temporary (<4 weeks), first-line; 14-16 French; confirm with CXR before use
• NJ/NJT (nasojejunal): gastroparesis, gastric outlet obstruction, severe vomiting, high aspiration risk
• PEG (percutaneous gastrostomy): expected >4 weeks of feeding; ALS, stroke, head-neck cancer
• PEG-J (PEG with jejunal extension): gastroparesis or high aspiration risk requiring long-term EN
INDICATIONS FOR TPN:
• Non-functional GI tract (short bowel, GI fistula with high output, severe ileus, bowel obstruction)
• EN not tolerated or meeting <60% of caloric needs after 7-10 days
• Prior to major surgery in severely malnourished patient (preoperative TPN ≥7 days)
REFEEDING RISK FACTORS: >5-10 days fasting/minimal intake, severe malnutrition (BMI <16), alcoholism, anorexia nervosa, chemotherapy/cancer malnutrition, prolonged IV dextrose only`,
    workup: `• Daily weight (objective nutritional status marker in acute illness)
• BMP: K+, Mg2+, phosphate (refeeding monitoring), glucose (TPN management)
• Prealbumin (transthyretin): better short-term marker than albumin (half-life 2 days vs 21 days); still influenced by inflammation
• 24-hour calorie count or dietary assessment if PO feasible
• Tylenol absorption test (acetaminophen 975mg PO → serum level at 90 min): >4 mcg/mL = adequate enteral absorption (useful before starting EN in critically ill)
• LFTs: TPN-associated liver disease (cholestasis, steatosis); biliary sludge with prolonged TPN
• Triglycerides: if on lipid-containing PN (target <400 mg/dL)`,
    management: `ENTERAL NUTRITION:
• Start: NGT insertion (confirm position with CXR — tip in stomach beyond GEJ); start at 20-40 mL/h; advance 10-20 mL/h every 4-8h to goal rate
• Goal rate calculation: total kcal/day ÷ kcal/mL of formula = mL/day ÷ 24h = hourly rate
• Do NOT routinely check gastric residuals (NEJM 2014;370:1227; does not reduce aspiration pneumonia)
• HOB 30-45° at all times during feeds (reduces aspiration)
• For NJ placement: bedside (with metoclopramide 10mg IV x1 to stimulate motility) or fluoroscopic
• For PEG placement: endoscopic by GI; contraindicated if uncorrected coagulopathy, ascites (malpositioned), obesity (limited access)
TUBE FEED FORMULAS:
• Standard (Jevity 1.0/1.5, Osmolite): 1-1.5 kcal/mL; for most patients
• High protein (Promote, Replete): >20% protein; burns, wounds, critically ill
• Renal (Nepro): low K+/Phos/volume; ESRD
• Pulmonary (Pulmocare, Oxepa): high fat, low carbs; ARDS (↓CO2 production — controversial)
• DM (Glucerna): low glycemic index; DM patients
PARENTERAL NUTRITION (TPN):
• Consult "Nutrition Support Team" in PPD (p22445) at MGH — they manage TPN orders
• Central access required (TPN osmolarity >900 mOsm/L); PICC or CVC
• Components: dextrose, amino acids, lipids, electrolytes, vitamins, trace elements
• TPN cycling: 12-16h cycles (not continuous) reduces hepatic steatosis for long-term TPN
• PPN (peripheral PN): <900 mOsm/L; maximum 2-3 weeks; limited calories
REFEEDING SYNDROME PREVENTION:
• Identify high-risk patients before initiating nutrition
• Start feeding at 10-15 kcal/kg/day for first 48h; advance slowly over 4-7 days
• Pre-load electrolytes before starting: replete K+, Mg2+, PO4 before initiating feeds
• Monitor PO4, K+, Mg2+ every 6-12h for first 72h; replace aggressively
• Thiamine 100mg IV TID x3 days (B1 depletion → Wernicke's risk)`,
    monitoring: `• Weight daily; electrolytes (PO4, K+, Mg2+) every 6-12h first 72h of refeeding then daily
• Glucose every 4-6h (TPN — target 140-180 mg/dL; insulin drip if needed)
• LFTs and TG weekly on TPN (steatosis/cholestasis; reduce lipids if TG >400 mg/dL)
• Tube position: verify with CXR after any repositioning or if aspiration concern
• I&O: track tube feed volume given vs goal; ensure advancing to goal rate`,
    disposition: `• Nutrition consult: all patients at nutritional risk (MUST ≥2), TPN patients, complex refeeding, ALS/dementia/cancer patients
• GI consult: PEG/PEG-J placement, NJ tube placement with fluoroscopy
• Outpatient: home enteral nutrition (HEN) planning if anticipated >4 weeks; PICC for outpatient TPN`
  },

  {
    id: "liver-chemistry-tests",
    system: "gi",
    title: "Liver Chemistry Tests — Approach and Interpretation",
    keywords: ["liver chemistry","LFTs","liver function tests","ALT","AST","alkaline phosphatase","GGT","bilirubin","hepatocellular pattern","cholestatic pattern","R factor","transaminases","jaundice workup","liver disease workup","ischemic hepatitis"],
    source: { chapter: "Gastroenterology", section: "Liver Chemistry Tests", pages: "78", authors: "Daniel Restifo",
      keyFacts: [
        "R-factor = (ALT/ULN) ÷ (ALP/ULN): >5 = hepatocellular; 2-5 = mixed; <2 = cholestatic — guides differential diagnosis and workup",
        "ALT upper limits of normal: 33 U/L (males), 25 U/L (females); ALP: 115 (males), 100 (females)",
        "Ischemic hepatitis ('shock liver'): extreme ALT/AST elevation (>100x ULN, often 1000-10,000); rapid rise then fall within days; always has inciting hypotension/heart failure event",
        "AST/ALT ratio >2 suggests alcohol-related liver disease or injury; ratio >2.5 suggests non-hepatic source of AST (cardiac, skeletal muscle)",
        "Isolated ALP elevation + elevated GGT = hepatic origin (confirms biliary/cholestatic); isolated ALP elevation without elevated GGT = bone disease (Paget's, bone mets, healing fractures)"
      ]
    },
    assessment: `#Liver Chemistry Tests — Interpretation
ALT: ___ (ULN *** — M: 33 / F: 25) | AST: ___ | ALP: ___ (ULN *** — M: 115 / F: 100) | GGT: ___ | T-bili: ___ | D-bili: ___
Albumin: ___ | INR: ___ | Platelets: ___
R-factor = (ALT/ULN) ÷ (ALP/ULN) = ___ → Pattern: [ ] Hepatocellular (>5)  [ ] Mixed (2-5)  [ ] Cholestatic (<2)
Chronicity: [ ] Acute (<6 months)  [ ] Chronic (>6 months)
Magnitude: [ ] Extreme (>15x ULN = >1000 U/L — ischemic, APAP, acute viral)  [ ] Moderate (5-15x ULN)  [ ] Mild (<5x ULN)
AST/ALT ratio: ___ (>2 = alcohol-related; >2.5 = non-hepatic AST source)
Isolated ALP elevation: GGT elevated? [ ] Yes (hepatic origin)  [ ] No (bone disease likely)`,
    ddx: `HEPATOCELLULAR PATTERN (ALT>ALP, R-factor >5):
• Extreme elevation (>15x ULN/1000 U/L): Ischemic hepatitis (shock liver — always check for preceding hypotension/HF event), APAP toxicity, acute HAV/HBV/HEV, acute Budd-Chiari, Wilson's disease
• Moderate (5-15x ULN): Acute hepatitis A/B/C/E, DILI (drug-induced — amoxicillin-clavulanate #1 cause), autoimmune hepatitis (AIH — positive ANA/ASMA/IgG), ischemic (more gradual)
• Mild (<5x ULN): Chronic HBV/HCV, MASLD/MASH (AST:ALT <1), alcohol-related (AST:ALT >2, GGT elevated), medications/supplements, celiac, thyroid disease, hemochromatosis (Fe sat + ferritin), Wilson's (low ceruloplasmin in young)

CHOLESTATIC PATTERN (ALP>ALT, R-factor <2):
• Intrahepatic: PBC (anti-mitochondrial antibody — AMA), PSC (p-ANCA, IBD association, MRCP shows beads-on-string), DILI (cholestatic pattern), pregnancy (intrahepatic cholestasis), sepsis/TPN
• Extrahepatic obstruction: CBD stone (choledocholithiasis), biliary stricture, cholangiocarcinoma, pancreatic cancer, ampullary mass

ISOLATED ALP ELEVATION:
• Hepatic (GGT elevated): biliary obstruction, infiltrative disease (metastases, sarcoidosis, amyloid, lymphoma), PBC early, medications
• Bone (GGT normal): Paget's, bone metastases, healing fractures, hyperparathyroidism, osteomalacia, growing children

JAUNDICE WORKUP:
• Predominantly conjugated/direct hyperbilirubinemia: liver disease, biliary obstruction (most common inpatient — CBD stone/stricture)
• Predominantly unconjugated/indirect hyperbilirubinemia: hemolysis (LDH↑, haptoglobin↓, reticulocytosis), Gilbert syndrome (benign — elevated with fasting/illness), ineffective erythropoiesis`,
    workup: `STEP 1 — PATTERN AND CHRONICITY:
• Identify R-factor pattern (hepatocellular vs cholestatic vs mixed)
• Determine acute (<6 months) vs chronic (>6 months)
STEP 2 — DIRECTED WORKUP BASED ON PATTERN:
Hepatocellular, acute:
• Viral hepatitis panel: HBsAg, anti-HBc IgM, anti-HAV IgM, HCV Ab + RNA, HEV IgM (if travel/immunosuppressed)
• APAP level (always check in acute liver injury — even without history)
• Medications and supplements review (DILI — LiverTox database)
• ANA, ASMA, IgG levels (autoimmune hepatitis)
• RUQ ultrasound with Doppler (Budd-Chiari, portal vein thrombosis)
• Ceruloplasmin (Wilson's — young patients)
Hepatocellular, chronic:
• HBV (HBsAg + anti-HBc), HCV (HCV Ab + RNA), Iron studies + HFE gene (hemochromatosis), ceruloplasmin + urine copper (Wilson), A1AT level (alpha-1-antitrypsin), ANA/ASMA/IgG (AIH), TSH (thyroid), celiac serologies
• Abdominal US + liver elastography (FIB-4 score for fibrosis estimation: FIB-4 = age×AST/(PLT×√ALT))
Cholestatic:
• RUQ US: CBD dilation, gallstones, intrahepatic biliary dilation
• GGT: if elevated = confirms hepatic origin
• AMA (anti-mitochondrial antibody): PBC — positive in 95% of cases
• MRCP: biliary anatomy (PSC beads-on-string, CBD stone, stricture)
• p-ANCA + colonoscopy consideration: PSC (IBD associated)`,
    management: `ISCHEMIC HEPATITIS: restore perfusion (treat cardiogenic shock, hypotension, HF); ALT/AST peak within 24-72h then fall rapidly; supportive care; expect normalization within 7-14 days
DILI: identify and stop the offending drug/supplement; DILI rash/fever = stop immediately; corticosteroids for hypersensitivity-type DILI or AIH overlap; most improve in weeks-months
AIH: prednisone 40-60mg/day + azathioprine 1-2mg/kg/day; taper steroids over 6-12 months; goal ALT normalization + IgG normalization; biopsy to confirm remission before stopping
CHOLESTATIC (biliary obstruction): ERCP for CBD stone/malignant obstruction; ursodeoxycholic acid (UDCA) for PBC; steroids + MMF for IgG4 cholangiopathy
HCV/HBV: see Viral Hepatitis template`,
    monitoring: `• LFTs weekly during workup of acute liver injury; trend and pattern evolution
• INR: synthetic function marker — NOT for anticoagulation in chronic liver disease; use for acute injury severity
• Serial FIB-4: at baseline and every 1-2 years to track fibrosis progression (non-invasive)
• Hepatology referral: ALT persistently >2x ULN after 6 months workup, FIB-4 >2.67, or any uncertain diagnosis`,
    disposition: `• ICU: acute liver failure (see ALF template)
• Hepatology consult: unexplained chronic LFT elevation, suspected AIH, PSC, hemochromatosis, Wilson's, elevated FIB-4
• Outpatient: mild-moderate LFT elevation without acute illness — initiate systematic workup, follow-up in 4-6 weeks`
  },

  {
    id: "viral-hepatitis",
    system: "gi",
    title: "Viral Hepatitis (A/B/C/D/E)",
    keywords: ["viral hepatitis","hepatitis A","hepatitis B","hepatitis C","HBV","HCV","HAV","HBsAg","HCV RNA","anti-HCV","hepatitis serology","cirrhosis hepatitis","DAA","tenofovir","entecavir","sofosbuvir","hepatitis D","hepatitis E"],
    source: { chapter: "Gastroenterology", section: "Viral Hepatitis", pages: "81", authors: "Daniel Restifo",
      keyFacts: [
        "Hepatitis A: fecal-oral; self-limited; anti-HAV IgM diagnostic (positive 3-6 months); treatment supportive; vaccine = 2 doses; indications include MSM, PWID, travel, chronic liver disease, HIV, homeless",
        "Hepatitis B: 40% cirrhosis risk if chronic; HBsAg + anti-HBc IgM = acute; HBsAg >6 months = chronic; first-line treatment: tenofovir (TAF/TDF) or entecavir; screen all adults once + high-risk groups",
        "Hepatitis C: most common cause of liver transplantation in US; HCV Ab + HCV RNA confirmatory; cure rate >95% with 8-12 week DAA (direct-acting antiviral) regimens (sofosbuvir-based); screen all adults 18-79 years",
        "HBsAg reactivation: all patients on immunosuppression (rituximab, anti-TNF, steroids, chemo) — check HBsAg + anti-HBc total before treatment; entecavir prophylaxis if HBsAg+ or anti-HBc+",
        "HBV-HCC screening: all HBsAg+ with cirrhosis, HBsAg+ with high-risk demographics (Asian/Black males >40; Asian females >50) — liver US + AFP every 6 months"
      ]
    },
    assessment: `#Viral Hepatitis
Acute vs chronic: acute (jaundice/fever/RUQ pain/malaise — onset <6 months) [ ] / chronic (incidental LFT elevation/cirrhosis signs) [ ]
Serology results:
HBsAg: ___  Anti-HBs: ___  Anti-HBc total: ___  Anti-HBc IgM: ___ (acute)
HCV Ab: ___  HCV RNA: ___ (confirmatory for active infection if Ab positive)
Anti-HAV IgM: ___  |  HEV IgM/RNA: ***
Viral load (if chronic): HBV DNA *** / HCV RNA ***  |  HCV genotype: ***
Fibrosis assessment: FIB-4 *** / liver stiffness ***  |  Signs of cirrhosis: [ ] Yes  [ ] No
Immunosuppression planned: [ ] Yes → check HBsAg + anti-HBc total BEFORE starting`,
    ddx: `HEPATITIS A (HAV): acute self-limited hepatitis; fecal-oral; outbreaks common (MSM, food contamination); rarely fulminant (<1%); immunocompromised → prolonged/relapsing course
HEPATITIS B (HBV): vertical/perinatal (high endemicity regions), sexual, blood exposure; acute → chronic in <5% adults (vs 90% neonates); complications: cirrhosis, HCC, polyarteritis nodosa (extra-hepatic)
HEPATITIS C (HCV): blood exposure (PWID most common), sexual (lower risk), vertical, tattoo; 80% chronic; complications: cirrhosis, HCC, cryoglobulinemia, membranoproliferative GN, porphyria cutanea tarda, B-cell lymphoma
HEPATITIS D (HDV): requires HBV co-infection; coinfection = more severe acute hepatitis; superinfection = most severe → cirrhosis in 80% in 5-10 years
HEPATITIS E (HEV): fecal-oral or blood transfusion; self-limited in immunocompetent; severe in pregnancy (mortality up to 25%); chronic infection in immunocompromised (transplant recipients); ribavirin if chronic`,
    workup: `HBV SEROLOGY INTERPRETATION:
• HBsAg+ / anti-HBc IgM+ / anti-HBs−: ACUTE HBV
• HBsAg+ / anti-HBc total+ / anti-HBs− for >6 months: CHRONIC HBV (check HBeAg, HBV DNA, ALT)
• HBsAg− / anti-HBs+ / anti-HBc−: VACCINATED (immune)
• HBsAg− / anti-HBs+ / anti-HBc+: RECOVERED from past HBV (immune)
• HBsAg− / anti-HBs− / anti-HBc+: ISOLATED anti-HBc (window, remote infection, occult HBV) → check HBV DNA
CHRONIC HBV MONITORING: HBV DNA, ALT, HBeAg/Ab (defines replication activity); HBsAg quantification (if HBsAg loss = functional cure)
HCV: HCV Ab (ELISA — may be negative in early infection); HCV RNA (confirms active infection); if RNA negative + Ab positive = cleared infection; genotype before treatment (guides DAA choice and duration)
FIBROSIS: FIB-4 (age×AST)/(PLT×√ALT) — <1.45 = low fibrosis; >3.25 = advanced fibrosis; liver elastography (FibroScan) for F3/F4 staging; liver biopsy if inconclusive`,
    management: `HEPATITIS A: supportive care; avoid hepatotoxic drugs (APAP in excess); alcohol cessation; vaccination of household contacts; post-exposure prophylaxis (vaccine + HAV immunoglobulin within 2 weeks)
CHRONIC HBV:
Treatment indications: HBV DNA >2000 IU/mL + ALT elevated; HBV DNA >20,000 IU/mL (regardless of ALT); compensated cirrhosis; decompensated cirrhosis; HCC; immunosuppression
• First-line: tenofovir alafenamide (TAF) 25mg PO qday OR tenofovir disoproxil fumarate (TDF) 300mg PO qday OR entecavir 0.5mg PO qday (1mg if prior lamivudine resistance)
• Monitor: HBV DNA and ALT every 3-6 months; HBeAg seroconversion; goal HBV DNA undetectable
• HCC screening: US + AFP every 6 months if cirrhotic or high-risk demographics
• HBsAg REACTIVATION PROPHYLAXIS: all patients starting rituximab, anti-TNF, high-dose steroids, chemotherapy — check HBsAg + anti-HBc total; if HBsAg+ → start entecavir before immunosuppression; if anti-HBc+ only → monitor HBV DNA OR prophylactic entecavir
HEPATITIS C (HCV):
• Cure rate >95% with 8-12 week pangenotypic DAA regimen
• First-line: sofosbuvir/velpatasvir (Epclusa) 400/100mg PO qday x12 weeks (genotypes 1-6); OR glecaprevir/pibrentasvir (Mavyret) x8-12 weeks
• Simplified HCV treatment (2020 AASLD guidance): most treatment-naive non-cirrhotic patients can initiate with minimal pre-treatment labs — renal function, CBC, HCV genotype NOT required before pangenotypic regimens
• SVR (Sustained Virologic Response = cure): HCV RNA undetectable at 12 weeks post-treatment; check HCV RNA at end of treatment + 12 weeks after
• Post-SVR: HCC surveillance continues if cirrhosis or advanced fibrosis (US + AFP q6 months)
HEPATITIS D: no approved antiviral in US; pegylated interferon (off-label) for chronic HDV; bulevirtide approved in Europe
HEPATITIS E: supportive for immunocompetent acute cases; ribavirin 600-1000mg/day x3-6 months for chronic HEV (immunocompromised)`,
    monitoring: `HBV: HBV DNA + ALT every 3-6 months on treatment; HBeAg seroconversion (important milestone); HBsAg annually (loss = functional cure — rare but goal); kidney function on TDF (switch to TAF if CrCl declining)
HCV: HCV RNA at end of treatment + 12 weeks post-treatment (SVR12 = cure); no routine monitoring needed if SVR achieved (and no cirrhosis); HCC surveillance if advanced fibrosis/cirrhosis`,
    disposition: `• Hepatology consult: chronic HBV/HCV initiation of treatment, HCC screening, cirrhosis management, decompensated hepatitis
• Acute HAV/HEV: most discharged with supportive care; admit for ALF or unable to maintain hydration
• ID consult: HBV reactivation, HIV coinfection, complex drug interactions`
  },

  {
    id: "alcohol-related-liver-disease",
    system: "gi",
    title: "Alcohol-Related Liver Disease (ALD / Alcoholic Hepatitis)",
    keywords: ["alcoholic hepatitis","alcohol liver disease","ALD","AH","Maddrey discriminant function","MDF","Lille score","prednisolone AH","pentoxifylline","MELD AH","AUDIT C","alcoholic cirrhosis","steatohepatitis","EtOH liver","thiamine"],
    source: { chapter: "Gastroenterology", section: "Alcohol-Related Liver Disease", pages: "82", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "Alcohol-related hepatitis (AH) diagnosis: jaundice within 8 weeks, heavy alcohol use, AST 50-400 (with AST/ALT >1.5), total bili >3, <60 days abstinence before onset",
        "Maddrey Discriminant Function (MDF): 4.6×(PT−12) + total bilirubin — MDF ≥32 = severe AH → corticosteroids indicated (if no contraindications)",
        "Prednisolone 40mg/day x28 days: reduces 28-day mortality in severe AH (MDF ≥32); assess response with Lille score at day 4-7 (>0.45 = non-responder → stop steroids)",
        "Contraindications to steroids in AH: active/uncontrolled infection, uncontrolled GI bleeding, renal failure (Cr >2.5), severe acute pancreatitis, untreated HIV/HBV/HCV/TB",
        "Alcohol use disorder treatment: motivational interviewing + pharmacotherapy (baclofen, acamprosate, naltrexone); disulfiram contraindicated in liver disease"
      ]
    },
    assessment: `#Alcohol-Related Liver Disease
Drinking history: *** drinks/day for *** years; last drink ***; AUDIT-C score: ***
AH criteria: jaundice onset <8 weeks [ ] / AST 50-400 [ ] (AST/ALT ratio >1.5 [ ]) / T-bili >3 [ ] / <60d abstinence [ ]
Severity scoring:
Maddrey Discriminant Function (MDF): 4.6×(PT−12) + T-bili = *** (≥32 = severe → steroids)
MELD: *** (>21 = severe; >35 = very severe)
Lille score (if on steroids day 4-7): *** (>0.45 = non-responder → stop steroids)
Steroid contraindications: active infection [ ] / uncontrolled GIB [ ] / Cr >2.5 [ ] / severe pancreatitis [ ] / untreated HIV/HBV/TB [ ]
Signs of portal HTN: ascites [ ] / varices [ ] / HE [ ] | CTP class: *** | MELD-Na: ***`,
    ddx: `ALCOHOL-RELATED HEPATITIS DDx (must exclude other etiologies):
• HBV/HCV hepatitis: check serology (HBsAg, anti-HBc IgM, HCV Ab + RNA)
• APAP toxicity: AST often >10x ULN; APAP level even without clear history
• Autoimmune hepatitis: ANA, ASMA, IgG (may overlap with ALD)
• Ischemic hepatitis: preceding hypotension, rapid rise/fall pattern
• Budd-Chiari: RUQ pain + ascites + hepatomegaly → Doppler ultrasound
• DILI: medication/supplement review — LiverTox database
• Acute biliary obstruction: elevated ALP > AST/ALT; US/MRCP
ALD SPECTRUM:
• Steatosis: mild AST/ALT elevation, reversible with abstinence
• Alcohol-related hepatitis (AH): acute inflammatory syndrome; jaundice + systemic features
• Cirrhosis due to ALD: progressive fibrosis; CTP and MELD scoring for prognosis`,
    workup: `• LFTs: AST/ALT ratio >1.5 (often >2:1) + GGT markedly elevated — characteristic of ALD/AH
• CBC: leukocytosis (AH — not necessarily infection; steroids will worsen), thrombocytopenia (hypersplenism)
• BMP, Cr (Lille score, HRS risk), electrolytes
• Coagulation: INR/PT (MDF calculation), fibrinogen
• T-bili, direct bili (MDF calculation and prognosis)
• RUQ US with Doppler: liver echogenicity, ascites, Budd-Chiari exclusion, portal vein patency, HCC screen
• Blood cultures x2 (exclude bacteremia — fever in AH can be AH itself or infection)
• RUQUS + diagnostic paracentesis: if ascites present (SBP exclusion)
• Hepatitis A/B/C/E serology (exclude other hepatitis)
• APAP level (exclude acetaminophen toxicity even in ALD — common comorbid ingestion)
• Liver biopsy: rarely needed if clinical diagnosis clear; consider if uncertain diagnosis or to confirm MASH before experimental trial`,
    management: `ABSTINENCE: most important intervention for all stages of ALD; can result in rapid improvement
NUTRITIONAL SUPPORT:
• Goal 35 kcal/kg/day with 1.2-1.5 g/kg/day protein
• Thiamine 100mg IV TID before any glucose administration (Wernicke's prevention)
• Supplement: multivitamin, folate, B6, B12, zinc
• If <21 kcal/kg/day intake → consider NGT tube feeds
• Low caloric intake in severe AH associated with increased infection risk
SEVERE AH (MDF ≥32 or MELD >20 — no contraindications):
• Prednisolone 40mg PO qday x28 days (preferred over prednisone — better GI absorption in liver disease)
• Lille score at day 4-7: ≤0.45 = responder → complete 28 days then 2-4 week taper; >0.45 = non-responder → STOP steroids (no benefit, ↑infection risk)
• No mortality benefit at 90 days (STOPAH trial: NEJM 2015;372:1619)
SUPPORTIVE CARE:
• Hold non-selective beta-blockers if MDF ≥32 (↑AKI incidence)
• Pentoxifylline: no longer recommended as first-line (STOPAH trial)
• NAC (N-acetylcysteine): may add benefit; no clear harm; consider as adjunct (5g IV over first 30 min, then 4x 2.5g over next 6h, then 1g/h for 3 days — or adjusted protocol)
• Prophylactic norfloxacin or TMP-SMX: for AH with MELD >20 (infection prophylaxis)
ALCOHOL USE DISORDER TREATMENT:
• Baclofen: GABA-B agonist; 10-20mg TID; evidence in liver disease (unlike naltrexone); reduces craving
• Acamprosate 666mg TID: reduces craving; safe in liver disease; avoid if severe renal failure
• Naltrexone: avoid in liver disease (hepatotoxic potential)
• Gabapentin: emerging evidence for AUD; safe in liver disease
• Disulfiram: CONTRAINDICATED in liver disease
LIVER TRANSPLANTATION (AH):
• Severe AH (MELD >21) not responding to medical therapy
• Select centers in US and Europe offer early LT; requires multidisciplinary evaluation; no prior decompensation + strong psychosocial support + commitment to abstinence`,
    monitoring: `• LFTs, INR, bilirubin daily in severe AH (first week); then 2-3x/week
• Lille score on day 4-7: most important predictor of steroid response
• BMP and Cr daily (HRS risk): stop steroids if Cr >2.5 mg/dL (Lille score modified)
• Temperature and WBC twice daily: infection surveillance (steroids impair immunity)
• Nutrition tracking: daily caloric count; advance tube feeds if insufficient PO`,
    disposition: `• ICU: severe AH with MELD >35, hemodynamic instability, HRS, hepatic encephalopathy
• Hepatology consult: all severe AH, steroid management, liver transplant evaluation
• Addiction psychiatry/medicine: all ALD patients — AUD treatment initiation
• Social work: housing, rehabilitation, behavioral health support for sustained abstinence`
  },

  {
    id: "metabolic-liver-disease",
    system: "gi",
    title: "Metabolic Liver Disease (MASLD / MASH / Hemochromatosis / Wilson's / Alpha-1AT)",
    keywords: ["MASLD","MASH","NAFLD","NASH","metabolic liver disease","hepatic steatosis","fatty liver","hemochromatosis","Wilson disease","alpha-1-antitrypsin","resmetirom","semaglutide liver","FIB-4","CAP score","liver biopsy fibrosis","autoimmune hepatitis"],
    source: { chapter: "Gastroenterology", section: "Metabolic Liver Disease", pages: "83", authors: "Sophie Pan, Shawna Walsh",
      keyFacts: [
        "MASLD (renamed from NAFLD): hepatic steatosis + ≥1 metabolic risk factor (obesity, T2DM, dyslipidemia, HTN) without significant alcohol use; 10-46% prevalence in US",
        "FIB-4 score = age×AST/(platelets×√ALT): <1.45 = low fibrosis risk; 1.45-3.25 = indeterminate → elastography; >3.25 = advanced fibrosis; excellent non-invasive screening tool",
        "Resmetirom (Rezdiffra): first FDA-approved medication for MASH with fibrosis (F2-F3); thyroid hormone receptor-β agonist; approved March 2024 — reduces steatohepatitis and fibrosis",
        "Hemochromatosis (HFE C282Y): iron saturation >45% + elevated ferritin → HFE gene testing; treat with therapeutic phlebotomy (weekly until ferritin 50-100 ng/mL); avoid iron, Vitamin C supplements, raw shellfish",
        "Wilson's disease: young patient with liver disease + neuropsychiatric + Kayser-Fleischer rings + Coombs-negative hemolytic anemia; low ceruloplasmin + elevated 24h urine copper; treat with D-penicillamine or trientine"
      ]
    },
    assessment: `#Metabolic Liver Disease
MASLD risk factors: obesity (BMI *** ) [ ] / T2DM (HbA1c ***) [ ] / dyslipidemia [ ] / HTN [ ] / OSA [ ]
Alcohol use: *** (women: <14 drinks/week; men: <21 drinks/week = MASLD vs. ALD threshold)
LFTs: ALT *** / AST *** (AST:ALT ratio *** — <1 typical MASLD) | ALP *** | GGT ***
FIB-4 = age×AST/(PLT×√ALT) = *** (<1.45 = low; 1.45-3.25 = indeterminate → elastography; >3.25 = advanced fibrosis)
Imaging: US (echogenicity) [ ] / FibroScan (CAP score: *** steatosis; liver stiffness *** kPa) [ ]
Signs of cirrhosis/portal HTN: *** | MELD: ***
Other metabolic liver diseases:
Hemochromatosis: iron sat >45% [ ] / elevated ferritin [ ] / HFE gene: ***
Wilson's: ceruloplasmin <20 mg/dL [ ] / 24h urine copper *** / KF rings [ ]
Alpha-1AT: A1AT level *** / phenotype (Pi*ZZ) ***`,
    ddx: `MASLD/MASH DDx (exclude other causes of hepatic steatosis):
• Alcohol (ALD): >21 drinks/week men / >14 women; AST/ALT >2; GGT markedly elevated
• Drug-induced hepatic steatosis: methotrexate, amiodarone, tamoxifen, steroids, valproate, antiretrovirals
• Viral hepatitis (HCV — genotype 3 causes steatosis), HBV
• Total parenteral nutrition (TPN-associated steatohepatitis)
• Wilson's disease (young patient)
• Hypothyroidism, Cushing's, PCOS, lipodystrophy
GENETIC/METABOLIC LIVER DISEASES:
• Hemochromatosis (HFE C282Y/H63D): iron overload → cirrhosis + HCC + cardiomyopathy + diabetes + hypogonadism + bronze skin
• Wilson's disease: autosomal recessive copper accumulation; KF rings + hepatitis + neuropsychiatric + Coombs-negative hemolytic anemia; <40 years old; low ceruloplasmin
• Alpha-1 antitrypsin deficiency (Pi*ZZ phenotype): liver disease (cirrhosis/HCC) + emphysema; serum A1AT low; liver biopsy shows PAS+ globules
• Autoimmune hepatitis (AIH): female predominance, elevated IgG, ANA + ASMA positive; steroid-responsive; 2 subtypes (Type 1: ANA/ASMA; Type 2: LKM-1)`,
    workup: `MASLD/MASH:
• FIB-4 score: screening for fibrosis — if <1.45 = low risk (no further testing); 1.45-3.25 → liver elastography
• Vibration-controlled transient elastography (FibroScan): liver stiffness (kPa) for fibrosis; CAP score for steatosis; widely available, non-invasive
• Liver biopsy (MASLD Activity Score — NAS): if elastography indeterminate, clinical trial enrollment, or treatment decision-making
• Cardiometabolic workup: HbA1c, fasting lipids, blood pressure, weight
HEMOCHROMATOSIS:
• Iron saturation (transferrin sat) >45% + elevated ferritin → HFE C282Y mutation testing
• Liver biopsy: if HFE neg + iron overload; hepatic iron index; rule out other causes
• Ferritin >1000 ng/mL: advanced fibrosis likely; liver biopsy recommended before phlebotomy
• EKG + TTE (cardiomyopathy), glucose/HbA1c (diabetes), testosterone (hypogonadism)
WILSON'S DISEASE (age <40 with unexplained liver disease):
• Ceruloplasmin (low in 85%); 24h urine copper (>100 mcg/24h); slit-lamp ophthalmology (KF rings — in 50% of hepatic disease; 98% with neuropsychiatric)
• Serum copper (elevated in acute liver failure; otherwise low free copper)
• Liver biopsy + hepatic copper quantification (>250 mcg/g dry weight = diagnostic)
AUTOIMMUNE HEPATITIS (AIH):
• ANA, ASMA (anti-smooth muscle antibody), IgG levels; anti-LKM1 (Type 2 AIH)
• Liver biopsy: interface hepatitis, plasma cell infiltrate (classic histology); required for diagnosis`,
    management: `MASLD/MASH:
• Lifestyle modification (cornerstone): weight loss 7-10% body weight → significant histologic improvement (↓steatosis, ↓inflammation, ↓fibrosis); Mediterranean diet; exercise 150 min/week moderate activity
• Treat metabolic comorbidities: GLP-1 agonists (semaglutide reduces steatohepatitis; data for MASH); SGLT-2 inhibitors; statins safe in MASLD (reduce cardiovascular risk; no hepatotoxicity concern at normal transaminases)
• Resmetirom (Rezdiffra) 80-100mg PO qday: FDA-approved March 2024 for F2-F3 MASH (biopsy-confirmed); thyroid hormone receptor-β agonist; reduces steatohepatitis + fibrosis; check TSH before starting
• Vitamin E 800 IU/day: reduces steatohepatitis in non-diabetic adults (PIVENS trial — NEJM 2010;362:1675); controversy about long-term cardiovascular and cancer risk
• Avoid: hepatotoxic supplements; limit alcohol; avoid fructose-heavy foods
• Liver transplant referral: cirrhosis with MELD ≥15; HCC within Milan criteria
HEMOCHROMATOSIS:
• Therapeutic phlebotomy: 1 unit pRBC (450-500mL) weekly until ferritin 50-100 ng/mL + iron saturation <50%; then maintenance phlebotomy every 2-4 months
• Avoid: iron supplements, vitamin C (enhances iron absorption), raw shellfish (Vibrio vulnificus risk), excessive alcohol
• First-degree family screening: HFE gene testing
WILSON'S DISEASE:
• D-penicillamine 250-500mg PO QID (increasing dose): copper chelation; monitor urine copper and neurological status; start low and increase slowly to avoid neurological worsening
• Trientine (alternative): fewer side effects than D-penicillamine; preferred if neurological disease
• Zinc acetate 50mg TID: maintenance after decoppering; reduces intestinal copper absorption; mild side effects
• Liver transplant: acute liver failure from Wilson's (curative); cirrhosis
AUTOIMMUNE HEPATITIS:
• Prednisone 40-60mg/day → taper + azathioprine 1-2mg/kg/day: goal ALT normalization + IgG normalization; biopsy to confirm histologic remission before stopping (relapse common)
• Budesonide + azathioprine: alternative to prednisone for non-cirrhotic AIH (less systemic steroid SE)`,
    monitoring: `MASLD: LFTs every 3-6 months; FIB-4/elastography every 1-2 years to track fibrosis progression; HCC surveillance (US + AFP q6 months) if cirrhosis
HEMOCHROMATOSIS: ferritin + iron saturation every 3-6 months during phlebotomy; annually once stable; annual LFTs; DEXA scan (osteoporosis common)
WILSON'S: 24h urine copper + LFTs + CBC every 3-6 months on treatment; ceruloplasmin and slit-lamp exams annually
AIH: LFTs + IgG every 3-6 months; biopsy before stopping immunosuppression`,
    disposition: `• Hepatology consult: MASH with advanced fibrosis (FIB-4 >3.25), hemochromatosis with significant iron loading, Wilson's disease, AIH initiation and management
• Liver transplant center: any metabolic liver disease with MELD ≥15 or HCC
• Genetic counseling: hemochromatosis (family screening), Wilson's, A1AT deficiency`
  },

  {
    id: "liver-transplant",
    system: "gi",
    title: "Liver Transplant — Indications, Complications, and Inpatient Management",
    keywords: ["liver transplant","OLT","MELD score","Milan criteria","HCC transplant","post-liver-transplant","transplant rejection","tacrolimus","CNI","calcineurin inhibitor","post-transplant complications","biliary complication post liver","hepatic artery thrombosis","UNOS","transplant listing"],
    source: { chapter: "Gastroenterology", section: "Liver Transplant", pages: "89", authors: "Daniel Restifo",
      keyFacts: [
        "OLT indications: MELD ≥15, cirrhosis complications (ascites/HE/variceal bleed/HRS/gastropathy bleed), HCC within Milan criteria, acute liver failure, metabolic disorders, severe alcoholic hepatitis (select cases)",
        "Milan criteria for HCC: single lesion ≤5cm OR up to 3 lesions all ≤3cm + no extrahepatic involvement + no major vessel invasion — meets criteria = transplant listing eligible",
        "MELD score = 3.78×ln(bilirubin) + 11.2×ln(INR) + 9.57×ln(creatinine) + 6.43; MELD-Na = MELD + 1.32×(137-Na) − [0.033×MELD×(137-Na)] — determines organ allocation priority",
        "Post-transplant immunosuppression: tacrolimus (CNI) first-line + mycophenolate mofetil (MMF) ± prednisone taper; tacrolimus levels: 8-12 ng/mL first 3 months, 5-8 ng/mL long-term",
        "Acute cellular rejection: liver biopsy showing portal inflammation + bile duct damage + endotheliitis; treat with pulse methylprednisolone 500-1000mg IV x3 days; usually steroid-responsive"
      ]
    },
    assessment: `#Liver Transplant — Assessment
Pre-transplant listing evaluation:
MELD-Na: *** (listing priority; ≥15 = transplant benefit > risk)
Indication: [ ] ESLD/cirrhosis  [ ] ALF  [ ] HCC (Milan criteria: ***)  [ ] Metabolic disorder  [ ] Biliary disease  [ ] Severe AH
Absolute contraindications: severe cardiac/pulmonary disease [ ] / AIDS [ ] / HCC beyond Milan (metastatic) [ ] / active substance use within 6mo [ ] / uncontrolled sepsis [ ] / mPAP >35 or PVR >400 [ ]
Post-transplant (if admitted):
Days post-OLT: *** | Tacrolimus level: *** (goal: early 8-12 ng/mL; long-term 5-8 ng/mL)
Immunosuppression: Tacrolimus *** / MMF *** / Prednisone ***
Current concern: [ ] Rejection  [ ] Infection  [ ] Biliary complication  [ ] Vascular complication  [ ] Medication toxicity`,
    ddx: `PRE-TRANSPLANT — EXCLUSIONS AND TIMING:
• Absolute contraindications: extrahepatic malignancy (except non-melanoma skin), intrahepatic cholangiocarcinoma, uncontrolled systemic infection, severe cardiopulmonary disease (cardiac stress test required), active substance use, anatomic impossibility, mPAP >35 (portopulmonary HTN)
• Relative contraindications: age >70, BMI >40, prior malignancy, HIV (unless adequate immune function), severe psychiatric disease
POST-TRANSPLANT COMPLICATIONS (by timing):
EARLY (<1 month):
• Primary non-function (PNF): immediate graft failure; re-transplantation urgently required
• Hepatic artery thrombosis (HAT): most common vascular complication; Doppler US urgently; if early → IR thrombectomy or surgical revision; if late → biliary strictures ("cholangiopathy")
• Biliary leak: T-tube site or anastomotic; T-bili rising, bilious drain output; CT or ERCP for diagnosis + stenting
• Acute cellular rejection (ACR): day 7-21; elevated LFTs (↑ALT > ALP); liver biopsy; methylprednisolone pulse x3 days
INTERMEDIATE (1-12 months):
• Infections: CMV (most common viral — monitor CMV PCR; ganciclovir prophylaxis then valganciclovir), PCP (TMP-SMX prophylaxis), fungal, BK virus (if kidney comorbidity)
• Biliary anastomotic stricture: progressive cholestasis; ERCP with dilation + stenting
• Chronic rejection: progressive cholestasis, ductopenia on biopsy; difficult to treat
LATE (>1 year):
• Metabolic complications: hypertension, DM, hyperlipidemia, CKD (CNI nephrotoxicity), obesity, de novo malignancy
• Recurrent disease: recurrent HCV/HBV, recurrent MASLD, recurrent AIH, PSC de novo
• CNI (calcineurin inhibitor) nephrotoxicity: progressive CKD; minimize tacrolimus dose`,
    workup: `PRE-TRANSPLANT EVALUATION (standard workup):
• Cardiac: TTE with bubble study; dobutamine stress echo (if age >40 or CAD RFs); hepatopulmonary syndrome (SpO2 on room air; ABG if <96%)
• Pulmonary: PFTs; portopulmonary HTN workup (TTE → RHC if RVSP >50mmHg)
• Metabolic: HbA1c, lipids, BMI, renal function
• Cancer screening: colonoscopy, mammography, Pap smear, PSA (age-appropriate); skin exam
• ID: IGRA/PPD (latent TB); coccidioidomycosis/Strongyloides if endemic area; HIV, HBV/HCV (screen donor + recipient); dental clearance
POST-TRANSPLANT (abnormal LFTs or complication):
• RUQ Doppler US: hepatic artery patency (HAT), portal vein, hepatic vein, bile duct dilation
• Tacrolimus level (trough): subtherapeutic → rejection risk; supratherapeutic → nephrotoxicity/neurotoxicity
• Liver biopsy: rejection, recurrent disease, drug toxicity — required for diagnosis
• CMV PCR, EBV PCR, HCV RNA, HBV DNA (monitor for recurrence)
• BMP (tacrolimus → hyperkalemia, hypertension, CKD)`,
    management: `ACUTE CELLULAR REJECTION:
• Pulse methylprednisolone 500-1000mg IV qday x3 days — steroid-resistant: OKT3 or anti-thymocyte globulin (ATG)
• Do NOT reduce immunosuppression
• Hepatology/transplant surgery consult immediately
BILIARY COMPLICATIONS:
• Anastomotic stricture: ERCP with balloon dilation + stent placement (first-line); surgery if ERCP fails
• Biliary leak: ERCP with stent + sphincterotomy; biliary drainage; surgery if ERCP fails; percutaneous drainage if biloma
HEPATIC ARTERY THROMBOSIS:
• Early HAT: urgent surgical re-exploration + revascularization or re-transplantation
• Late HAT: manage ischemic biliary strictures (ERCP/PTC); re-transplant if needed
IMMUNOSUPPRESSION MANAGEMENT:
• Tacrolimus: target levels based on time post-transplant + rejection/toxicity balance; nephrotoxicity common (CKD — reduce dose and add MMF or switch to everolimus)
• MMF 1g BID: antiproliferative; myelosuppression common (↓dose if WBC <3000/mm³)
• Prednisone: wean over 3-12 months in low-rejection risk patients
• Infection prophylaxis (standard post-OLT): TMP-SMX (PCP), fluconazole (Candida — first 3 months), valganciclovir (CMV — 6-12 months, dose-adjusted for renal function)
HBV RECURRENCE PREVENTION: all HBsAg+ recipients → entecavir prophylaxis + HBV immunoglobulin (HBIG) post-OLT
HCV RECURRENCE: all recurrent HCV → DAA treatment (excellent SVR rates post-transplant); fibrosing cholestatic hepatitis (rapid recurrence) → urgent DAA therapy`,
    monitoring: `• Tacrolimus trough level: every 3-7 days first month; weekly for first 6 months; monthly once stable
• LFTs and CBC weekly first month; biweekly for 3 months; monthly then quarterly
• CMV PCR weekly for first 3 months (if high-risk donor+/recipient−); monthly if low-risk
• BMP (K+, Cr): tacrolimus nephrotoxicity and hyperkalemia monitoring
• Annual cancer screening: skin cancer (highest risk — annual dermatology), colorectal, cervical, breast
• Metabolic syndrome management: BP, lipids, glucose, BMI`,
    disposition: `• Inpatient transplant hepatology: all post-transplant complications; adjust immunosuppression
• Return to OR: hepatic artery thrombosis (early), PNF, refractory rejection
• Outpatient: stable post-transplant patients — tacrolimus monitoring, metabolic syndrome management, cancer screening
• Social work: medication costs, adherence support, substance use monitoring`
  },
];



// ─── SUMMARIZE SYSTEM PROMPT ───────────────────────────────────────────────
const SUMMARIZE_SYSTEM_PROMPT = `You are a senior Internal Medicine resident generating Epic EMR dot-phrase templates.

Your job: condense a clinical diagnosis into a clean, copy-pastable dot-phrase note template.

CRITICAL RULE — *** USAGE:
Use *** ONLY for patient-specific values the clinician must fill in at the bedside — things that are different for every patient encounter. These include:
- Specific vital signs or lab values (e.g., "SpO2 ***%", "HR *** bpm", "K+ *** mEq/L")
- Specific clinical findings on exam (e.g., "crackles at ***", "infiltrate in *** lobe")
- Specific dates, durations, or onset timing (e.g., "onset *** days ago")
- Specific medication doses that vary by weight or renal function (e.g., "vancomycin *** mg IV q***h")

Do NOT use *** for:
- Standard drug names, standard fixed doses, or fixed treatment protocols (write these out as-is)
- Diagnostic criteria or clinical decision rules (write these out)
- Generic phrases like "as tolerated" or "per protocol"
- Anything that is the same for every patient with this diagnosis

FORMAT RULES:
1. Return ONLY the dot-phrase text — no explanation, no preamble, no markdown, no backtick fences.
2. Start with #DiagnosisName on its own line.
3. Write ONE short assessment sentence. Use *** only for patient-specific findings/values.
4. Leave a blank line after the assessment.
5. Use bullet points (•) for all plan items. No sub-bullets.
6. Workup: 3-5 most critical tests only. Write them out — no *** unless dose/timing varies per patient.
7. Management: 4-7 highest-yield interventions. Write standard fixed doses out fully. Use *** only for weight-based or renally-adjusted doses.
8. Separate workup and management with a blank line.
9. No section headers — just the bullets.
10. Total: 12-18 lines max.

Example of CORRECT *** usage:
#Community Acquired Pneumonia
Suspected CAP due to *** infiltrate on CXR with fever ***, SpO2 ***% on room air.

• Blood cultures x2
• Sputum Gram stain and culture
• Procalcitonin, Legionella urine antigen
• MRSA nasal swab

• Ceftriaxone 1g IV q24h + azithromycin 500mg PO/IV q24h
• Supplemental O2, target SpO2 ≥92%
• DVT prophylaxis
• Advance diet as tolerated, mobilize early`;

// ─── COMPONENT ─────────────────────────────────────────────────────────────
export default function App() {
  const [query, setQuery] = useState("");
  const [activeSystem, setActiveSystem] = useState("all");
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState({});
  const [ddxOpen, setDdxOpen] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(true);
  const [summaryText, setSummaryText] = useState(null);
  const [summaryId, setSummaryId] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [chatInput, setChatInput] = useState("");

  const runSummarize = async (template) => {
    if (summaryLoading) return;
    setSummaryLoading(true);
    setSummaryText(null);
    setSummaryId(template.id);
    try {
      const prompt = [
        `Diagnosis: ${template.title}`,
        "",
        "ASSESSMENT:",
        template.assessment || "",
        "",
        "WORKUP:",
        template.workup || "",
        "",
        "MANAGEMENT:",
        template.management || "",
      ].join("\n");

      const res = await fetch("/api/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          system: SUMMARIZE_SYSTEM_PROMPT,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data?.error?.message || `API error ${res.status}`;
        throw new Error(msg);
      }

      const text = data.content?.find(b => b.type === "text")?.text?.trim() || "";
      if (!text) throw new Error("Empty response — please try again.");
      setSummaryText(text);
    } catch (err) {
      setSummaryText(`#${template.title} — Error\n${err?.message || "Could not generate summary. Please try again."}`);
    } finally {
      setSummaryLoading(false);
    }
  };

  // PDF page offset: White Book printed page N = PDF file page N+3
  const PDF_OFFSET = 3;

  // Toast state for PDF page fallback (cross-browser)
  const [pdfToast, setPdfToast] = useState(null);

  const openPdf = (pages) => {
    const firstPage = parseInt(String(pages).split(/[–\-]/)[0].trim(), 10);
    const filePage  = firstPage + PDF_OFFSET;
    const url = `/whitebook.pdf#page=${filePage}`;

    // Detect mobile — PDF inline viewing and #page= unreliable
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // Detect Safari — doesn't reliably honor the #page= fragment
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Attempt to open in new tab
    const newTab = window.open(url, "_blank", "noopener,noreferrer");

    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      // Popup was blocked — show a fallback direct link
      setPdfToast({ page: firstPage, url, blocked: true });
    } else if (isSafari || isMobile) {
      // Opened successfully but #page= may not auto-navigate — show page hint
      setPdfToast({ page: firstPage, url, blocked: false });
    }

    // Auto-dismiss after 7 seconds
    setTimeout(() => setPdfToast(null), 7000);
  };
  const [messages, setMessages] = useState([]);
  const [ddxLoading, setDdxLoading] = useState(false);
  const detailRef = useRef(null);
  const threadRef = useRef(null);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return TEMPLATES.filter(t => {
      const sysMatch = activeSystem === "all" || t.system === activeSystem;
      if (!sysMatch) return false;
      if (!q) return true;
      return (
        t.title.toLowerCase().includes(q) ||
        t.keywords.some(k => k.includes(q)) ||
        q.split(" ").some(word => word && t.title.toLowerCase().includes(word))
      );
    });
  }, [query, activeSystem]);

  const sysColor = id => SYSTEMS.find(s => s.id === id)?.color || "#8a8a85";
  const sysLabel = id => SYSTEMS.find(s => s.id === id)?.label || id;

  const buildFullText = t => [
    t.assessment, "",
    "DIFFERENTIAL DIAGNOSIS:", t.ddx, "",
    "WORKUP:", t.workup, "",
    "MANAGEMENT:", t.management, "",
    "MONITORING:", t.monitoring,
    t.disposition ? "" : null,
    t.disposition ? "DISPOSITION / CONSULTS:" : null,
    t.disposition || null,
  ].filter(x => x !== null).join("\n");

  const copyText = async (key, text) => {
    await navigator.clipboard.writeText(text);
    setCopied(p => ({ ...p, [key]: true }));
    setTimeout(() => setCopied(p => ({ ...p, [key]: false })), 2000);
  };

  const handleSelect = t => {
    setSelected(t);
    if (detailRef.current) detailRef.current.scrollTop = 0;
  };

  const scrollThread = () => setTimeout(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, 60);

  const loadTemplate = templateId => {
    const t = TEMPLATES.find(t => t.id === templateId);
    if (!t) return;
    setDdxOpen(false);
    setSelected(t);
    setActiveSystem("all");
    setTimeout(() => { if (detailRef.current) detailRef.current.scrollTop = 0; }, 300);
  };

  const runDdx = async (text) => {
    const prompt = (text || chatInput).trim();
    if (!prompt || ddxLoading) return;
    setChatInput("");
    setDdxLoading(true);
    setMessages(prev => [...prev, { role: "user", content: prompt }, { role: "loading" }]);
    scrollThread();
    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: DDX_SYSTEM_PROMPT,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const raw = data.content?.find(b => b.type === "text")?.text || "";
      const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
      setMessages(prev => [
        ...prev.filter(m => m.role !== "loading"),
        { role: "ai", result: parsed },
      ]);
    } catch {
      setMessages(prev => [
        ...prev.filter(m => m.role !== "loading"),
        { role: "error", content: "Couldn't generate differential. Try adding more clinical detail." },
      ]);
    } finally {
      setDdxLoading(false);
      scrollThread();
      inputRef.current?.focus();
    }
  };

  const handleChatKey = e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); runDdx(); }
  };

  const clearChat = () => { setMessages([]); setChatInput(""); inputRef.current?.focus(); };

  const urgencyClass = u => ({
    critical: "urgency-critical", high: "urgency-high",
    moderate: "urgency-moderate", low: "urgency-low",
  }[u] || "urgency-low");

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="app-shell">

        {/* HEADER */}
        <header className="header">
          <div className="header-logo">
            <div className="header-logo-icon">⚕</div>
            MGH SYNAPSE
          </div>
          <div className="header-sep" />
          <div className="header-specialty">
            <span className="specialty-dot" />
            Internal Medicine
          </div>
          <div className="header-spacer" />
          <span className="header-badge">MGH WHITE BOOK 2025–26</span>
        </header>

        {/* MAIN */}
        <main className="main">

          {/* TAB BAR */}
          <nav className="tab-bar">
            {SYSTEMS.map(s => (
              <button
                key={s.id}
                className={`tab-item ${activeSystem === s.id ? "active" : ""}`}
                onClick={() => { setActiveSystem(s.id); setSelected(null); }}
              >
                {s.id !== "all" && <span className="sys-dot" style={{ background: s.color }} />}
                {s.label}
              </button>
            ))}
          </nav>

          {/* SEARCH BAR */}
          <div className="search-bar">
            <input
              className="search-input"
              placeholder="Search by diagnosis, symptom, or keyword…"
              value={query}
              onChange={e => { setQuery(e.target.value); setSelected(null); }}
            />
            <span className="search-meta">{filtered.length} templates</span>
          </div>

          {/* CONTENT PANE */}
          <div className="content-pane">

            {/* RESULTS LIST */}
            <div className="results-list">
              {filtered.length === 0 && (
                <div className="no-results">No templates found.<br />Try a different search term.</div>
              )}
              {filtered.map(t => (
                <div
                  key={t.id}
                  className={`result-card ${selected?.id === t.id ? "selected" : ""}`}
                  onClick={() => handleSelect(t)}
                >
                  <div className="rc-sys-row">
                    <span className="sys-dot" style={{ background: sysColor(t.system) }} />
                    <span className="rc-sys-label">{sysLabel(t.system)}</span>
                  </div>
                  <div className="rc-title">{t.title}</div>
                  <div className="rc-keywords">{t.keywords.slice(0, 5).join(" · ")}</div>
                  {t.source && (
                    <div className="rc-page-badge">📖 MGH White Book p.{t.source.pages}</div>
                  )}
                </div>
              ))}
            </div>

            {/* DETAIL PANE */}
            <div className="detail-pane" ref={detailRef}>
              {!selected ? (
                <div className="empty-state">
                  <div className="empty-icon">⌕</div>
                  <div className="empty-text">
                    Select a template from the list<br />
                    or search by diagnosis / symptom / keyword
                  </div>
                </div>
              ) : (
                <>
                  <div className="detail-header">
                    <div>
                      <div className="detail-title">{selected.title}</div>
                      <div className="detail-sys-badge">
                        <span className="sys-dot" style={{ background: sysColor(selected.system), marginRight: 4 }} />
                        {sysLabel(selected.system)}
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                      <button
                        className={`copy-all-btn ${copied["all-" + selected.id] ? "copied" : ""}`}
                        onClick={() => copyText("all-" + selected.id, buildFullText(selected))}
                      >
                        {copied["all-" + selected.id] ? "✓ Copied" : "⎘ Copy All"}
                      </button>
                      <button
                        className={`summarize-btn ${summaryId === selected.id && (summaryText || summaryLoading) ? "active" : ""}`}
                        onClick={() => {
                          if (summaryId === selected.id && summaryText) {
                            setSummaryText(null); setSummaryId(null);
                          } else {
                            runSummarize(selected);
                          }
                        }}
                        disabled={summaryLoading && summaryId === selected.id}
                      >
                        {summaryLoading && summaryId === selected.id
                          ? "Generating…"
                          : summaryId === selected.id && summaryText
                          ? "✕ Close Summary"
                          : "⚡ Dot Phrase"}
                      </button>
                    </div>
                  </div>

                  <div className="tag-row">
                    {selected.keywords.map(k => <span key={k} className="tag-pill">{k}</span>)}
                  </div>

                  {/* SUMMARY BLOCK */}
                  {summaryId === selected.id && (summaryLoading || summaryText) && (
                    <div className="summary-block">
                      <div className="summary-block-header">
                        <div className="summary-block-title">
                          ⚡ Dot Phrase Summary
                        </div>
                        <div className="summary-block-actions">
                          {summaryText && (
                            <button
                              className={`summary-copy-btn ${copied["summary-" + selected.id] ? "copied" : ""}`}
                              onClick={() => copyText("summary-" + selected.id, summaryText)}
                            >
                              {copied["summary-" + selected.id] ? "✓ Copied" : "⎘ Copy"}
                            </button>
                          )}
                          <button
                            className="summary-dismiss-btn"
                            onClick={() => { setSummaryText(null); setSummaryId(null); }}
                          >✕</button>
                        </div>
                      </div>

                      {summaryLoading && summaryId === selected.id && !summaryText && (
                        <div className="summary-loading">
                          <div className="summary-loading-dots">
                            <span /><span /><span />
                          </div>
                          <span className="summary-loading-text">Condensing into dot phrase…</span>
                        </div>
                      )}

                      {summaryText && (
                        <>
                          <pre className="summary-content">{summaryText}</pre>
                          <div className="summary-hint">
                            Replace *** with patient-specific values before pasting into Epic.
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* WHITE BOOK SOURCE REFERENCE */}
                  {selected.source && (
                    <div className="source-block">
                      <div className="source-header">
                        <div
                          className="source-header-left"
                          onClick={() => setSourceOpen(o => !o)}
                          style={{ flex: 1, cursor: "pointer" }}
                        >
                          <span className="source-header-icon">📖</span>
                          <span className="source-header-title">MGH White Book Source</span>
                          <span className="source-page-badge">p. {selected.source.pages}</span>
                        </div>
                        <div className="source-header-actions">
                          <button
                            className="source-open-pdf-btn"
                            onClick={e => { e.stopPropagation(); openPdf(selected.source.pages); }}
                            title="Open PDF to this page"
                          >
                            ↗ Open in White Book
                          </button>
                          <span
                            className={`source-expand-icon ${sourceOpen ? "open" : ""}`}
                            onClick={() => setSourceOpen(o => !o)}
                          >▼</span>
                        </div>
                      </div>

                      {sourceOpen && (
                        <div className="source-body">
                          <div className="source-meta-row">
                            <div className="source-meta-item">
                              <span className="source-meta-label">Chapter</span>
                              <span className="source-meta-value">{selected.source.chapter}</span>
                            </div>
                            <div className="source-meta-item">
                              <span className="source-meta-label">Section</span>
                              <span className="source-meta-value">{selected.source.section}</span>
                            </div>
                            <div className="source-meta-item">
                              <span className="source-meta-label">Pages</span>
                              <span className="source-meta-value">{selected.source.pages}</span>
                            </div>
                            <div className="source-meta-item">
                              <span className="source-meta-label">Authors</span>
                              <span className="source-meta-value">{selected.source.authors}</span>
                            </div>
                          </div>

                          <div className="source-facts-label">Key Reference Points to Verify</div>
                          <div className="source-facts-list">
                            {selected.source.keyFacts.map((fact, i) => (
                              <div key={i} className="source-fact">
                                <span className="source-fact-bullet">{i + 1}</span>
                                <span className="source-fact-text">{fact}</span>
                              </div>
                            ))}
                          </div>

                          <div className="source-disclaimer">
                            ⚠️ Cross-reference content against <strong>MGH White Book 2025–26, p. {selected.source.pages}</strong> before clinical use. This tool is an educational aid — always verify against the primary source and exercise independent clinical judgment.
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {[
                    { label: "Assessment",           key: "assessment",  content: selected.assessment },
                    { label: "Differential Diagnosis",key: "ddx",        content: selected.ddx },
                    { label: "Workup",               key: "workup",      content: selected.workup },
                    { label: "Management",           key: "management",  content: selected.management },
                    { label: "Monitoring",           key: "monitoring",  content: selected.monitoring },
                    selected.disposition && { label: "Disposition / Consults", key: "disposition", content: selected.disposition },
                  ].filter(Boolean).map(section => (
                    <div key={section.key} className="ap-section">
                      <div className="ap-section-header">
                        <span className="ap-section-label">{section.label}</span>
                        <button
                          className={`copy-section-btn ${copied[selected.id + section.key] ? "copied" : ""}`}
                          onClick={() => copyText(selected.id + section.key, section.content)}
                        >
                          {copied[selected.id + section.key] ? "✓" : "⎘ Copy"}
                        </button>
                      </div>
                      <pre className="ap-content">{section.content}</pre>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

  
        {/* PDF PAGE TOAST */}
        {pdfToast && (
          <div className="pdf-toast">
            <span>
              {pdfToast.blocked ? (
                <>Popup blocked — <a href={pdfToast.url} target="_blank" rel="noopener noreferrer">open PDF (p.{pdfToast.page})</a></>
              ) : (
                <>Navigate to <strong>page {pdfToast.page}</strong> in the PDF if it didn&apos;t jump there automatically.</>
              )}
            </span>
            <button className="pdf-toast-dismiss" onClick={() => setPdfToast(null)}>✕</button>
          </div>
        )}

        {/* MGH SYNAPSE FLOATING BUTTON */}
          <button
            className={`ddx-fab ${ddxOpen ? "open" : ""}`}
            onClick={() => { setDdxOpen(o => !o); if (!ddxOpen) setTimeout(() => inputRef.current?.focus(), 300); }}
          >
            <span className="fab-icon">{ddxOpen ? "✕" : "⚕"}</span>
            {ddxOpen ? "Close" : "MGH Synapse"}
          </button>

          {/* MGH SYNAPSE POP-OUT */}
          <div className={`ddx-popout ${ddxOpen ? "visible" : ""}`}>
            <div className="ddx-panel-header">
              <div className="ddx-panel-avatar">⚕</div>
              <div style={{ flex: 1 }}>
                <div className="ddx-panel-title">MGH Synapse</div>
                <div className="ddx-panel-subtitle">Describe a presentation · Get ranked differential</div>
              </div>
              <div className="ddx-panel-actions">
                {messages.length > 0 && (
                  <button className="ddx-panel-btn" onClick={clearChat} title="New conversation">↺</button>
                )}
                <button className="ddx-panel-btn" onClick={() => setDdxOpen(false)} title="Close">✕</button>
              </div>
            </div>

            <div className="ddx-pane">
              {messages.length === 0 && (
                <div className="ddx-welcome">
                  <div className="ddx-welcome-title">What's the presentation?</div>
                  <div className="ddx-welcome-sub">
                    Type a chief complaint, vitals, exam, or labs. Get a ranked differential with links to A&P templates.
                  </div>
                  <div className="ddx-chips-label">Try an example</div>
                  <div className="ddx-chips-grid">
                    {EXAMPLE_PROMPTS.map((p, i) => (
                      <button key={i} className="ddx-chip" onClick={() => runDdx(p)}>{p}</button>
                    ))}
                  </div>
                </div>
              )}

              {messages.length > 0 && (
                <div className="ddx-thread" ref={threadRef}>
                  {messages.map((msg, i) => {
                    if (msg.role === "user") return <div key={i} className="msg-user">{msg.content}</div>;
                    if (msg.role === "loading") return (
                      <div key={i} className="msg-loading">
                        <div className="dot-pulse"><span /><span /><span /></div>
                        <span className="loading-label">Analyzing…</span>
                      </div>
                    );
                    if (msg.role === "error") return <div key={i} className="msg-error">{msg.content}</div>;
                    if (msg.role === "ai" && msg.result) {
                      const r = msg.result;
                      return (
                        <div key={i} className="msg-ai">
                          <div className="msg-ai-header">
                            <div className="ai-avatar">⚕</div>
                            MGH Synapse
                          </div>
                          <div className="ddx-summary-box">
                            <strong>Summary: </strong>{r.summary}
                          </div>
                          {r.diagnoses?.map(dx => (
                            <div key={dx.rank} className="ddx-item">
                              <div className="ddx-item-header">
                                <span className="ddx-rank">{dx.rank}</span>
                                <span className="ddx-item-title">{dx.title}</span>
                                <span className={`ddx-urgency ${urgencyClass(dx.urgency)}`}>
                                  {dx.urgency?.toUpperCase()}
                                </span>
                              </div>
                              <div className="ddx-item-body">
                                <div className="ddx-reasoning">{dx.reasoning}</div>
                                {dx.supporting_features?.length > 0 && (
                                  <div className="ddx-features">
                                    {dx.supporting_features.map((f, fi) => (
                                      <span key={fi} className="ddx-feature-tag">{f}</span>
                                    ))}
                                  </div>
                                )}
                                {dx.template_id ? (
                                  <button className="ddx-template-btn" onClick={() => loadTemplate(dx.template_id)}>
                                    ↗ Open A&P Template
                                  </button>
                                ) : (
                                  <span className="ddx-no-template">No matching template in library</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}

              <div className="ddx-input-bar">
                <div className="ddx-input-wrap">
                  <textarea
                    ref={inputRef}
                    className="ddx-chat-input"
                    rows={1}
                    placeholder="e.g. 68F, dyspnea, bilateral leg edema, BNP 2800…"
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    onKeyDown={handleChatKey}
                    onInput={e => {
                      e.target.style.height = "auto";
                      e.target.style.height = Math.min(e.target.scrollHeight, 90) + "px";
                    }}
                  />
                  <button
                    className="ddx-send-btn"
                    onClick={() => runDdx()}
                    disabled={ddxLoading || !chatInput.trim()}
                  >→</button>
                </div>
                <div className="ddx-input-hint">
                  <span>Enter to send · Shift+Enter for new line</span>
                  {messages.length > 0 && (
                    <button className="ddx-new-chat-btn" onClick={clearChat}>New chat</button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </>
  );
}
