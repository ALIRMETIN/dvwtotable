import React from 'react';
import { MatchResult } from '../types';

interface AttackingTableProps {
  matches: MatchResult[];
}

export const AttackingTable: React.FC<AttackingTableProps> = ({ matches }) => {
  const attackingData = matches.flatMap(match => {
    const players = [...match.homePlayers, ...match.awayPlayers];
    return players.map(player => ({
      player: `${player.lastName} ${player.firstName}`,
      team: player.team.name,
      role: player.role,
      total: player.attackPoints,
      efficiency: player.playedSets ? ((player.attackPoints / player.playedSets) * 100).toFixed(1) : '-',
      mistakes: 0, // Placeholder
      mistakesPercentage: '-', // Placeholder
      negative: 0, // Placeholder
      negativePercentage: '-', // Placeholder
      positive: 0, // Placeholder
      positivePercentage: '-', // Placeholder
      points: player.attackPoints,
      pointsPercentage: player.playedSets ? ((player.attackPoints / player.playedSets) * 100).toFixed(1) : '-'
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mistakes</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mistakes %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Negative</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Negative %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Positive</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Positive %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points %</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {attackingData.map((data, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.player}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.team}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.role}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.total}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.efficiency}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.mistakes}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.mistakesPercentage}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.negative}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.negativePercentage}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.positive}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.positivePercentage}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.points}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.pointsPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
