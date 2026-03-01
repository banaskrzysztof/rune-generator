export const SEGMENTS = {
  V_CENTER: { x1: 30, y1: 0, x2: 30, y2: 90 },

  TR_TOP: { x1: 30, y1: 0, x2: 60, y2: 0 },
  TR_BOT: { x1: 30, y1: 30, x2: 60, y2: 30 },
  TR_VERT: { x1: 60, y1: 0, x2: 60, y2: 30 },
  TR_DIAG1: { x1: 30, y1: 0, x2: 60, y2: 30 }, // \
  TR_DIAG2: { x1: 30, y1: 30, x2: 60, y2: 0 }, // /

  TL_TOP: { x1: 0, y1: 0, x2: 30, y2: 0 },
  TL_BOT: { x1: 0, y1: 30, x2: 30, y2: 30 },
  TL_VERT: { x1: 0, y1: 0, x2: 0, y2: 30 },
  TL_DIAG1: { x1: 0, y1: 0, x2: 30, y2: 30 },
  TL_DIAG2: { x1: 0, y1: 30, x2: 30, y2: 0 },

  BR_TOP: { x1: 30, y1: 60, x2: 60, y2: 60 },
  BR_BOT: { x1: 30, y1: 90, x2: 60, y2: 90 },
  BR_VERT: { x1: 60, y1: 60, x2: 60, y2: 90 },
  BR_DIAG1: { x1: 30, y1: 60, x2: 60, y2: 90 },
  BR_DIAG2: { x1: 30, y1: 90, x2: 60, y2: 60 },

  BL_TOP: { x1: 0, y1: 60, x2: 30, y2: 60 },
  BL_BOT: { x1: 0, y1: 90, x2: 30, y2: 90 },
  BL_VERT: { x1: 0, y1: 60, x2: 0, y2: 90 },
  BL_DIAG1: { x1: 0, y1: 60, x2: 30, y2: 90 },
  BL_DIAG2: { x1: 0, y1: 90, x2: 30, y2: 60 },
} as const;
