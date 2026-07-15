import { useState } from 'react';
import type { Tariff } from './types';

const tariffsFixture: Tariff[] = [
  {
    id: 1, name: 'Free', label: undefined, description: 'Для тех, кто начинает изучать Telegram-аналитику',
    price: '0 ₽/мес',
    features: [
      { id: 1, text: 'Базовая статистика каналов' },
      { id: 2, text: 'До 3 каналов в избранном' },
      { id: 3, text: 'Еженедельный отчёт по email' },
    ],
    button: { label: 'Начать бесплатно', variant: 'default' },
  },
  {
    id: 2, name: 'Pro', label: 'Популярный', description: 'Для авторов и рекламодателей, которым важны данные',
    price: '990 ₽/мес',
    features: [
      { id: 1, text: 'Полная аналитика по каналам' },
      { id: 2, text: 'AI-рекомендации и инсайты' },
      { id: 3, text: 'Сравнение с конкурентами' },
      { id: 4, text: 'До 20 каналов' },
      { id: 5, text: 'Приоритетная поддержка' },
    ],
    button: { label: 'Выбрать Pro', variant: 'primary' },
    isHighlighted: true,
  },
  {
    id: 3, name: 'Business', label: 'Для команд', description: 'Для агентств и команд, работающих с множеством каналов',
    price: '2990 ₽/мес',
    features: [
      { id: 1, text: 'Всё из Pro' },
      { id: 2, text: 'Безлимит каналов' },
      { id: 3, text: 'API доступ' },
      { id: 4, text: 'Мультипользователь' },
      { id: 5, text: 'Персональный менеджер' },
    ],
    button: { label: 'Связаться с нами', variant: 'default' },
  },
];

export const useTariffsBlock = (): {
  tariffs: Tariff[];
  activeTariffId: number | null;
  setActiveTariffId: (id: number) => void;
} => {
  const tariffs = tariffsFixture;

  const [activeTariffId, setActiveTariffId] = useState<number | null>(
    tariffs.find(t => t.isHighlighted)?.id ?? null
  );

  return { tariffs, activeTariffId, setActiveTariffId };
};
