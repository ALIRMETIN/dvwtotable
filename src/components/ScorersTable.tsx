import React from 'react';
import { MatchResult } from '../types';

interface ScorersTableProps {
  matches: MatchResult[];
}

export const ScorersTable: React.FC<ScorersTableProps> = ({ matches }) => {
  const scorers = matches.flatMap(match => {
    const players = [...match.homePlayers, ...match.awayPlayers];
    return players.map(player => ({
      player: `${player.lastName} ${player.firstName}`,
      team: player.team.name,
      role: player.role,
      playedSets: player.playedSets,
      totalPoints: player.servePoints + player.attackPoints + player.blockPoints,
      pointsPerSet: player.playedSets ? ((player.servePoints + player.attackPoints + player.blockPoints) / player.playedSets).toFixed(2) : '-',
      servePoints: player.servePoints,
      servePointsPerSet: player.playedSets ? (player.servePoints / player.playedSets).toFixed(2) : '-',
      attackPoints: player.attackPoints,
      attackPointsPerSet: player.playedSets ? (player.attackPoints / player.playedSets).toFixed(2) : '-',
      blockPoints: player.blockPoints,
      blockPointsPerSet: player.playedSets ? (player.blockPoints / player.playedSets).toFixed(2) : '-'
    }));
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Played Sets</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points per Set</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serve Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serve Points per Set</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attack Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attack Points per Set</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block Points per Set</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {scorers.map((scorer, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{scorer.player}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.team}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.role}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.playedSets}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.totalPoints}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.pointsPerSet}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.servePoints}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.servePointsPerSet}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.attackPoints}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.attackPointsPerSet}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.blockPoints}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{scorer.blockPointsPerSet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
