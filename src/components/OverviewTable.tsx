import React from 'react';
import { TeamStats } from '../types';

interface OverviewTableProps {
  stats: TeamStats[];
}

export const OverviewTable: React.FC<OverviewTableProps> = ({ stats }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matches</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Won Matches</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lost Matches</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Won Sets</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lost Sets</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Won Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lost Points</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points in Sideout %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points in Breakpoint %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opponent Errors %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serve Points %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reception #,+ %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attack Points %</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block Points %</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stats.map((team, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.team.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.matches}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.wins}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.matches - team.wins}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.wonSets}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.sets - team.wonSets}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.wonPoints}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.lostPoints}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.sideoutPercentage.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.breakPercentage.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.oppKillPercentage.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.acePercentage.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.receptionPercentage.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.killPercentage.toFixed(1)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.blockPercentage.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
