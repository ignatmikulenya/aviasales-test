/**
 * Получить окончание слова в зависимости от количества
 * @param amout Количество
 * @param endings Окончания слова для: 1, 2-4, > 4
 */
const getWordEnding = (
  amout: number,
  endings: [string, string, string]
): string => {
  const mod100 = amout % 100;
  if (mod100 > 4 && mod100 < 20) {
    return endings[2];
  }

  const mod10 = amout % 10;
  if (mod10 > 1 && mod10 <= 4) {
    return endings[1];
  }

  if (mod10 === 1) {
    return endings[0];
  }

  return endings[2];
};

export { getWordEnding };
