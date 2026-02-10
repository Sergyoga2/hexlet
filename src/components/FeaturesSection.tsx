import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import type { ReactNode } from 'react'
import {
  IconBox,
  IconCode,
  IconCircleDashed,
  IconFlame,
} from '@tabler/icons-react'
import classes from './FeaturesSection.module.css'

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon className={classes.featureIcon} size={44} radius="md">
        {icon}
      </ThemeIcon>
      <Text mt="sm" mb={7} className={classes.featureTitle}>
        {title}
      </Text>
      <Text size="sm" className={classes.featureDescription}>
        {description}
      </Text>
    </div>
  )
}

const features = [
  {
    icon: <IconBox size={22} stroke={1.8} />,
    title: '56 навыков в каталоге',
    description:
      'От frontend и backend до DevOps и алгоритмов — выбирайте трек под свою цель и уровень.',
  },
  {
    icon: <IconCode size={22} stroke={1.8} />,
    title: 'Доступ ко всему каталогу',
    description:
      'Одна подписка открывает весь каталог навыков Хекслета без ограничений по направлениям.',
  },
  {
    icon: <IconCircleDashed size={22} stroke={1.8} />,
    title: 'Стоимость от 2400 ₽/мес',
    description:
      'Прозрачные тарифы без скрытых платежей: выбирайте комфортный формат и учитесь в своём темпе.',
  },
  {
    icon: <IconFlame size={22} stroke={1.8} />,
    title: 'Практика и поддержка',
    description:
      'Закрепляйте знания на проектах, получайте обратную связь и системно прокачивайте навыки.',
  },
]

export function FeaturesSection() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <div className={classes.grid}>
        <div className={classes.leftColumn}>
          <Title className={classes.title}>
            Подписка поможет вам прокачать навыки!
          </Title>

          <Text className={classes.description}>
            Получите доступ ко всем 56 навыкам Хекслета по подписке от 2400 ₽ в месяц. Учитесь последовательно, закрепляйте знания на практике и растите в профессии без пауз.
          </Text>

          <Group mt={30}>
            <Button className={classes.control} radius="md" size="md">
              Выбрать подписку
            </Button>
          </Group>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 'xl', md: 30 }}>
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
