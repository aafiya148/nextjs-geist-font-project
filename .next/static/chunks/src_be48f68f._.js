(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Minesweeper/MinesweeperGame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const difficulties = {
    beginner: {
        rows: 9,
        cols: 9,
        mines: 10
    },
    intermediate: {
        rows: 16,
        cols: 16,
        mines: 40
    },
    expert: {
        rows: 16,
        cols: 30,
        mines: 99
    }
};
const MinesweeperGame = ()=>{
    _s();
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(difficulties.beginner);
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [win, setWin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timer, setTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timerActive, setTimerActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize board
    const initBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MinesweeperGame.useCallback[initBoard]": ()=>{
            const { rows, cols, mines } = difficulty;
            // Create empty board
            let newBoard = [];
            for(let r = 0; r < rows; r++){
                const row = [];
                for(let c = 0; c < cols; c++){
                    row.push({
                        isMine: false,
                        isRevealed: false,
                        isFlagged: false,
                        adjacentMines: 0,
                        row: r,
                        col: c
                    });
                }
                newBoard.push(row);
            }
            // Place mines randomly
            let minesPlaced = 0;
            while(minesPlaced < mines){
                const randRow = Math.floor(Math.random() * rows);
                const randCol = Math.floor(Math.random() * cols);
                if (!newBoard[randRow][randCol].isMine) {
                    newBoard[randRow][randCol].isMine = true;
                    minesPlaced++;
                }
            }
            // Calculate adjacent mines
            for(let r = 0; r < rows; r++){
                for(let c = 0; c < cols; c++){
                    if (!newBoard[r][c].isMine) {
                        let count = 0;
                        for(let dr = -1; dr <= 1; dr++){
                            for(let dc = -1; dc <= 1; dc++){
                                const nr = r + dr;
                                const nc = c + dc;
                                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && newBoard[nr][nc].isMine) {
                                    count++;
                                }
                            }
                        }
                        newBoard[r][c].adjacentMines = count;
                    }
                }
            }
            setBoard(newBoard);
            setGameOver(false);
            setWin(false);
            setTimer(0);
            setTimerActive(false);
        }
    }["MinesweeperGame.useCallback[initBoard]"], [
        difficulty
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinesweeperGame.useEffect": ()=>{
            initBoard();
        }
    }["MinesweeperGame.useEffect"], [
        initBoard
    ]);
    // Timer effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinesweeperGame.useEffect": ()=>{
            let interval;
            if (timerActive && !gameOver && !win) {
                interval = setInterval({
                    "MinesweeperGame.useEffect": ()=>{
                        setTimer({
                            "MinesweeperGame.useEffect": (t)=>t + 1
                        }["MinesweeperGame.useEffect"]);
                    }
                }["MinesweeperGame.useEffect"], 1000);
            }
            return ({
                "MinesweeperGame.useEffect": ()=>clearInterval(interval)
            })["MinesweeperGame.useEffect"];
        }
    }["MinesweeperGame.useEffect"], [
        timerActive,
        gameOver,
        win
    ]);
    // Reveal cell logic
    const revealCell = (row, col)=>{
        if (gameOver || win) return;
        const newBoard = board.map((r)=>r.map((c)=>({
                    ...c
                })));
        const cell = newBoard[row][col];
        if (cell.isRevealed || cell.isFlagged) return;
        cell.isRevealed = true;
        if (cell.isMine) {
            setGameOver(true);
            setTimerActive(false);
            // Reveal all mines
            for(let r = 0; r < difficulty.rows; r++){
                for(let c = 0; c < difficulty.cols; c++){
                    if (newBoard[r][c].isMine) {
                        newBoard[r][c].isRevealed = true;
                    }
                }
            }
            setBoard(newBoard);
            return;
        }
        // Flood fill reveal for empty cells
        if (cell.adjacentMines === 0) {
            const floodFill = (r, c)=>{
                for(let dr = -1; dr <= 1; dr++){
                    for(let dc = -1; dc <= 1; dc++){
                        const nr = r + dr;
                        const nc = c + dc;
                        if (nr >= 0 && nr < difficulty.rows && nc >= 0 && nc < difficulty.cols && !newBoard[nr][nc].isRevealed && !newBoard[nr][nc].isFlagged) {
                            newBoard[nr][nc].isRevealed = true;
                            if (newBoard[nr][nc].adjacentMines === 0) {
                                floodFill(nr, nc);
                            }
                        }
                    }
                }
            };
            floodFill(row, col);
        }
        setBoard(newBoard);
        // Check win condition
        let revealedCount = 0;
        for(let r = 0; r < difficulty.rows; r++){
            for(let c = 0; c < difficulty.cols; c++){
                if (newBoard[r][c].isRevealed) revealedCount++;
            }
        }
        if (revealedCount === difficulty.rows * difficulty.cols - difficulty.mines) {
            setWin(true);
            setTimerActive(false);
        }
        if (!timerActive) setTimerActive(true);
    };
    // Flag cell logic
    const flagCell = (e, row, col)=>{
        e.preventDefault();
        if (gameOver || win) return;
        const newBoard = board.map((r)=>r.map((c)=>({
                    ...c
                })));
        const cell = newBoard[row][col];
        if (cell.isRevealed) return;
        cell.isFlagged = !cell.isFlagged;
        setBoard(newBoard);
    };
    // Handle difficulty change
    const handleDifficultyChange = (e)=>{
        const selected = e.target.value;
        setDifficulty(difficulties[selected]);
    };
    // Restart game
    const restartGame = ()=>{
        initBoard();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center p-4 max-w-screen-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Minesweeper"
            }, void 0, false, {
                fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "difficulty",
                        className: "font-semibold",
                        children: "Difficulty:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "difficulty",
                        value: Object.keys(difficulties).find((key)=>difficulties[key] === difficulty),
                        onChange: handleDifficultyChange,
                        className: "border rounded px-2 py-1",
                        disabled: timerActive,
                        children: Object.entries(difficulties).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: key,
                                children: key.charAt(0).toUpperCase() + key.slice(1)
                            }, key, false, {
                                fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: restartGame,
                        className: "bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition",
                        children: "Restart"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto font-mono text-lg",
                        children: [
                            "Time: ",
                            timer,
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-0.5", `grid-cols-[repeat(${difficulty.cols},_2rem)]`, `grid-rows-[repeat(${difficulty.rows},_2rem)]`),
                children: board.flat().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>revealCell(cell.row, cell.col),
                        onContextMenu: (e)=>flagCell(e, cell.row, cell.col),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 flex items-center justify-center border border-gray-400 select-none", cell.isRevealed ? cell.isMine ? "bg-red-600 text-white" : "bg-gray-200" : "bg-gray-400 hover:bg-gray-300", cell.isFlagged && !cell.isRevealed ? "bg-yellow-400" : ""),
                        disabled: gameOver || win,
                        "aria-label": cell.isFlagged ? "Flagged cell" : cell.isRevealed ? cell.isMine ? "Mine" : `${cell.adjacentMines} adjacent mines` : "Hidden cell",
                        children: cell.isRevealed && !cell.isMine && cell.adjacentMines > 0 ? cell.adjacentMines : cell.isFlagged ? "🚩" : ""
                    }, `${cell.row}-${cell.col}`, false, {
                        fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-red-700 font-bold text-xl",
                children: "Game Over!"
            }, void 0, false, {
                fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this),
            win && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-green-700 font-bold text-xl",
                children: "You Win!"
            }, void 0, false, {
                fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Minesweeper/MinesweeperGame.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
};
_s(MinesweeperGame, "XTukSjGh2ts0YwkJu4X2quB9zpg=");
_c = MinesweeperGame;
const __TURBOPACK__default__export__ = MinesweeperGame;
var _c;
__turbopack_context__.k.register(_c, "MinesweeperGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_be48f68f._.js.map