import React from 'react';
import {
  Paper,
  SegmentedControl,
  Title,
} from '@mantine/core';
import { Text } from '@/components/ui/Text';
import { PageShell } from '@/components/ui/PageShell';

const LegalPage: React.FC = () => {
  const [tab, setTab] = React.useState('privacy');

  return (
    <PageShell size="md">
        <Title order={1} mb="lg">
          Правовая информация
        </Title>
        <SegmentedControl
          data={[
            { label: 'Конфиденциальность', value: 'privacy' },
            { label: 'Соглашение', value: 'terms' },
            { label: 'Оферта', value: 'offer' },
          ]}
          value={tab}
          onChange={(v) => setTab(v as string)}
          mb="lg"
          fullWidth
        />
        <Paper withBorder p="lg" radius="md">
          {tab === 'privacy' && (
            <>
              <Title order={3} mb="md">Политика конфиденциальности</Title>
              <Text size="sm" variant="dimmed">
                Мы собираем и обрабатываем персональные данные пользователей
                исключительно для целей предоставления сервиса аналитики
                Telegram-каналов. Мы не передаём данные третьим лицам без
                явного согласия пользователя.
              </Text>
            </>
          )}
          {tab === 'terms' && (
            <>
              <Title order={3} mb="md">Пользовательское соглашение</Title>
              <Text size="sm" variant="dimmed">
                Используя сервис TG Pulse, вы соглашаетесь с данными условиями.
                Сервис предоставляет инструменты аналитики Telegram-каналов
                «как есть» без гарантий точности данных.
              </Text>
            </>
          )}
          {tab === 'offer' && (
            <>
              <Title order={3} mb="md">Публичная оферта</Title>
              <Text size="sm" variant="dimmed">
                Настоящая оферта адресована физическим и юридическим лицам
                и определяет условия предоставления платных услуг сервиса
                TG Pulse на условиях подписки.
              </Text>
            </>
          )}
        </Paper>
      </PageShell>
  );
};

export default LegalPage;
