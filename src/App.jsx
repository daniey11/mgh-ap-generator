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
`;


// ─── SYSTEM CONFIG ──────────────────────────────────────────────────────────
const SYSTEMS = [
  { id: "all",  label: "All Topics",  color: "#94a3b8" },
  { id: "cv",   label: "Cardiology",  color: "#ef4444" },
  { id: "pulm", label: "Pulm / Critical Care", color: "#3b82f6" },
  { id: "gi",   label: "Gastroenterology", color: "#f59e0b" },
  { id: "neph", label: "Nephrology",  color: "#8b5cf6" },
  { id: "id",   label: "Infectious Disease", color: "#10b981" },
  { id: "endo", label: "Endocrinology", color: "#f97316" },
  { id: "neuro","label": "Neurology / Psych", color: "#06b6d4" },
  { id: "heme", label: "Hematology",  color: "#ec4899" },
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

  const openPdf = (pages) => {
    const firstPage = parseInt(String(pages).split(/[–\-]/)[0].trim(), 10);
    const filePage  = firstPage + PDF_OFFSET;
    window.open(`/whitebook.pdf#page=${filePage}`, "_blank");
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
            UCI SYNAPSE
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

          {/* UCI SYNAPSE FLOATING BUTTON */}
          <button
            className={`ddx-fab ${ddxOpen ? "open" : ""}`}
            onClick={() => { setDdxOpen(o => !o); if (!ddxOpen) setTimeout(() => inputRef.current?.focus(), 300); }}
          >
            <span className="fab-icon">{ddxOpen ? "✕" : "⚕"}</span>
            {ddxOpen ? "Close" : "UCI Synapse"}
          </button>

          {/* UCI SYNAPSE POP-OUT */}
          <div className={`ddx-popout ${ddxOpen ? "visible" : ""}`}>
            <div className="ddx-panel-header">
              <div className="ddx-panel-avatar">⚕</div>
              <div style={{ flex: 1 }}>
                <div className="ddx-panel-title">UCI Synapse</div>
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
                            UCI Synapse
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
