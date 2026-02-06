// Exercise utility functions

export const getSourceBadgeColor = (source: string): string => {
  const colors = {
    'stretch-affect': 'bg-purple-100 text-purple-700',
    'central-athlete': 'bg-blue-100 text-blue-700',
    'custom': 'bg-green-100 text-green-700'
  };
  return colors[source as keyof typeof colors] || 'bg-gray-100 text-gray-700';
};

export const getSourceName = (source: string): string => {
  const names = {
    'stretch-affect': 'Stretch Affect',
    'central-athlete': 'Central Athlete',
    'custom': 'Custom Exercise'
  };
  return names[source as keyof typeof names] || source;
};
