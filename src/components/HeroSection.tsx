import { IconCheck } from '@tabler/icons-react'
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import classes from './HeroSection.module.css'

export function HeroSection() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text className={classes.label}>Лучшее решение для вашей команды</Text>

          <Title className={classes.title}>
            Создавайте продукты{' '}
            <span className={classes.highlight}>быстрее</span> с удобной платформой
          </Title>

          <Text c="dimmed" mt="md">
            Единое пространство для задач, аналитики и командной работы. Подключите
            сервис за несколько минут и масштабируйте процессы без боли.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" className={classes.listIcon}>
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Мгновенный запуск</b> — готовые шаблоны и простая настройка
            </List.Item>
            <List.Item>
              <b>Прозрачная аналитика</b> — ключевые метрики и отчёты в реальном
              времени
            </List.Item>
            <List.Item>
              <b>Безопасность уровня enterprise</b> — защита данных и ежедневные
              бэкапы
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Начать бесплатно
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Посмотреть демо
            </Button>
          </Group>
        </div>

        <div className={classes.imageWrapper}>
          <Image
            src="https://ui.mantine.dev/_next/static/media/image.35935aae.svg"
            alt="Hero illustration"
            className={classes.image}
          />
        </div>
      </div>
    </Container>
  )
}
