import { IconCheck } from '@tabler/icons-react'
import {
  Button,
  Container,
  Group,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import classes from './HeroSection.module.css'

export function HeroSection() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Ваш продукт —{' '}
            <span className={classes.highlight}>быстрее</span>, проще, лучше
          </Title>
          <Text c="dimmed" mt="md">
            Мы помогаем бизнесу расти с помощью современных технологий.
            Автоматизация, аналитика и удобные инструменты — всё в одном месте.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Быстрый старт</b> — начните работу за считанные минуты,
              без сложной настройки
            </List.Item>
            <List.Item>
              <b>Надёжность</b> — 99.9% uptime и автоматическое
              резервное копирование
            </List.Item>
            <List.Item>
              <b>50+ интеграций</b> — подключайте любимые сервисы
              и работайте в единой среде
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Начать бесплатно
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Узнать больше
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  )
}
