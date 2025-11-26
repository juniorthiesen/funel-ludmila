import React from 'react';
import { motion } from 'framer-motion';

interface QuizOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const QuizOption: React.FC<QuizOptionProps> = ({ label, selected, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 mb-3 flex items-center justify-between group ${
        selected
          ? 'bg-premium-gold/20 border-premium-gold text-white'
          : 'bg-white/5 border-white/10 text-premium-muted hover:bg-white/10 hover:border-white/30 hover:text-white'
      }`}
    >
      <span className="font-medium">{label}</span>
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-4 h-4 bg-premium-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        />
      )}
    </motion.button>
  );
};

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-8">
      <motion.div
        className="h-full bg-gradient-to-r from-premium-gold to-yellow-300"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};
