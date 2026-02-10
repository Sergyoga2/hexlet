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
    <div className={classes.feature}>
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
    title: 'Быстрый запуск',
    description:
      'Подключайте команду за один день: готовые сценарии, шаблоны процессов и быстрая адаптация.',
  },
  {
    icon: <IconLock size={26} stroke={1.5} />,
    title: 'Надежность и безопасность',
    description:
      'Контроль доступа, журнал действий и резервные копии защищают рабочие данные на каждом этапе.',
  },
  {
    icon: <IconSparkles size={26} stroke={1.5} />,
    title: 'Удобный опыт',
    description:
      'Интуитивный интерфейс и автоматизация рутины помогают команде фокусироваться на результате.',
  },
]

export function FeaturesSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.content}>
        <Badge size="lg" variant="filled" radius="sm">
          Возможности платформы
        </Badge>

          <Title className={classes.title} mt="sm">
            Все ключевые инструменты в{' '}
            <span className={classes.highlight}>одном окне</span>
          </Title>

        <Text c="dimmed" className={classes.description}>
          Блок после Hero в стиле FeaturesTitle: выразительный заголовок, короткое
          пояснение и список преимуществ с иконками.
        </Text>

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
