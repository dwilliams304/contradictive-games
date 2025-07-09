type StatType = "Player Kills" | "Uses" | "Occurences" | "PlayerNameStat"

interface ILeaderboardEntry {
    rank: number,
    player: string,
    score: number,
}

interface ILeaderboard {
    id: string,
    title: string,
    entries: ILeaderboardEntry[]
}

interface IStat {
    statName: string,
    value: string,
    statType: StatType
}

interface INumberStat extends IStat {
    count: number
}

interface IPlayerStat extends IStat {
    playerName: string
}

interface IGameStat {
    gameId: string,
    stats: (INumberStat | IPlayerStat)[],
    leaderboards: ILeaderboard[]
}

export const GameStats: IGameStat[] = [
    {
        gameId: 'neon-divide',
        stats: [
            { statName: "Most Deadly Enemy", value: "ORD-001", count: 50345, statType: "Player Kills" },
            { statName: "Most Common Item", value: "Health Potion", count: 5603456, statType: "Uses" },
            { statName: "Longest Alive", value: "56:34", playerName: "Generic Name", statType: "PlayerNameStat" }
        ],
        leaderboards: [
            {
                id: 'score',
                title: 'Top Score',
                entries: [
                    { rank: 1, player: "Player 1", score: 4052 },
                    { rank: 2, player: "Player 2", score: 3456 },
                    { rank: 3, player: "Player 456", score: 3455 },
                    { rank: 4, player: "Jul", score: 2584 },
                    { rank: 5, player: "Player 44", score: 2501 },
                    { rank: 6, player: "The Best", score: 2450 },
                    { rank: 7, player: "Player 6", score: 2400 },
                    { rank: 8, player: "samsepi0l", score: 2200 },
                    { rank: 9, player: "Eddard Stark", score: 2189 },
                    { rank: 10, player: "David Haller", score: 1890 },
                ]
            },
            {
                id: 'kills',
                title: 'Highest Kills',
                entries: [
                    { rank: 1, player: "KillMaster", score: 892 },
                    { rank: 2, player: "DeathDealer", score: 856 },
                    { rank: 3, player: "Jul", score: 834 },
                    { rank: 4, player: "Player 1", score: 789 },
                    { rank: 5, player: "samsepi0l", score: 756 },
                    { rank: 6, player: "The Best", score: 723 },
                    { rank: 7, player: "Player 456", score: 689 },
                    { rank: 8, player: "Player 2", score: 645 },
                    { rank: 9, player: "Eddard Stark", score: 598 },
                    { rank: 10, player: "David Haller", score: 567 },
                ]
            },
            {
                id: 'survival',
                title: 'Longest Time Alive',
                entries: [
                    { rank: 1, player: "Survivor", score: 3456 }, 
                    { rank: 2, player: "Generic Name", score: 3234 }, 
                    { rank: 3, player: "The Best", score: 2987 },
                    { rank: 4, player: "David Haller", score: 2756 }, 
                    { rank: 5, player: "Jul", score: 2689 }, 
                    { rank: 6, player: "Player 1", score: 2456 }, 
                    { rank: 7, player: "samsepi0l", score: 2234 }, 
                    { rank: 8, player: "Player 456", score: 2123 }, 
                    { rank: 9, player: "Eddard Stark", score: 1987 }, 
                    { rank: 10, player: "Player 2", score: 1834 }, 
                ]
            }
        ]
    }
]

// Export the interfaces for use in other components
export type { IGameStat, ILeaderboard, ILeaderboardEntry, INumberStat, IPlayerStat, StatType };