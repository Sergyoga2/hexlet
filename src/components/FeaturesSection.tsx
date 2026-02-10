import {
  Badge,
  Container,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import type { ReactNode } from 'react'
import { IconGauge, IconLock, IconSparkles } from '@tabler/icons-react'
import classes from './FeaturesSection.module.css'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={44} radius="md">
        {icon}
      </ThemeIcon>
      <Text mt="sm" mb={7} fw={600}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  )
}

const features = [
  {
    icon: <IconGauge size={26} stroke={1.5} />,
    title: 'Скорость внедрения',
    description:
      'Готовые сценарии и шаблоны помогают запустить продукт в работу уже в первый день.',
  },
  {
    icon: <IconLock size={26} stroke={1.5} />,
    title: 'Надёжная защита',
    description:
      'Контроль доступа, аудит действий и резервное копирование для безопасной работы команды.',
  },
  {
    icon: <IconSparkles size={26} stroke={1.5} />,
    title: 'Удобство для команды',
    description:
      'Интуитивный интерфейс и автоматизация рутины, чтобы фокусироваться на результате.',
  },
]

export function FeaturesSection() {
  return (
    <Container size="lg" py={80}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Badge size="lg" variant="filled" radius="sm">
            Возможности платформы
          </Badge>

          <Title className={classes.title} mt="sm">
            Все ключевые инструменты в{' '}
            <span className={classes.highlight}>одном окне</span>
          </Title>

          <Text c="dimmed" className={classes.description}>
            Блок оформлен в стиле FeaturesTitle: выразительный заголовок, короткое
            пояснение и преимущества, которые быстро показывают ценность продукта.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={{ base: 'xl', md: 50 }} mt={50}>
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </SimpleGrid>
      </div>
    </Container>
  )
}
