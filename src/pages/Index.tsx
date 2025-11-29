import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialist: 'designer',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      specialist: 'designer',
      message: ''
    });
  };

  const services = [
    {
      icon: 'Sofa',
      title: 'Изготовление мебели',
      description: 'Создаем уникальную мебель под ваши размеры и пожелания',
      features: ['Кухни на заказ', 'Шкафы-купе', 'Гостиные', 'Детские']
    },
    {
      icon: 'PenTool',
      title: 'Дизайн-проект',
      description: 'Разрабатываем 3D-визуализацию будущей мебели',
      features: ['3D визуализация', 'Чертежи', 'Подбор материалов', 'Эскизы']
    },
    {
      icon: 'Hammer',
      title: 'Реставрация',
      description: 'Восстанавливаем и обновляем старую мебель',
      features: ['Ремонт фасадов', 'Замена фурнитуры', 'Обивка', 'Покраска']
    },
    {
      icon: 'Truck',
      title: 'Доставка и монтаж',
      description: 'Привозим и собираем мебель под ключ',
      features: ['Бесплатный замер', 'Доставка по городу', 'Профессиональная сборка', 'Гарантия']
    }
  ];

  const portfolio = [
    {
      title: 'Современная кухня',
      description: 'Минималистичный дизайн с островом',
      image: 'https://cdn.poehali.dev/projects/bb2451bf-8295-4293-acfa-05d081220837/files/a568ffc9-e967-4dce-ba98-a2cf2b177c3e.jpg'
    },
    {
      title: 'Гардеробная комната',
      description: 'Функциональное пространство для хранения',
      image: 'https://cdn.poehali.dev/projects/bb2451bf-8295-4293-acfa-05d081220837/files/ae65b0e2-1ef7-40c8-94cb-9f3635425370.jpg'
    },
    {
      title: 'Детская мебель',
      description: 'Яркая и безопасная мебель для детей',
      image: 'https://cdn.poehali.dev/projects/bb2451bf-8295-4293-acfa-05d081220837/files/bb9efa3e-4f68-4adb-9259-84b95d44e5bf.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Hammer" size={28} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МебельМастер
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:flex">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Создаём мебель
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  вашей мечты
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Индивидуальный дизайн, качественные материалы и профессиональное исполнение.
                Воплотим любую идею в реальность!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')} className="text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="Image" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/bb2451bf-8295-4293-acfa-05d081220837/files/2975a05d-faad-4647-a04f-5acb1cd81f44.jpg" 
                alt="Мебель на заказ" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по созданию и обслуживанию мебели
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши последние проекты — от идеи до воплощения
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Записаться на консультацию</CardTitle>
              <CardDescription className="text-base">
                Выберите специалиста и удобное время для встречи
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Выберите специалиста *</Label>
                  <RadioGroup 
                    value={formData.specialist}
                    onValueChange={(value) => setFormData({...formData, specialist: value})}
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="designer" id="designer" />
                      <Label htmlFor="designer" className="flex-1 cursor-pointer">
                        <div className="font-semibold flex items-center gap-2">
                          <Icon name="PenTool" size={18} className="text-secondary" />
                          Дизайнер
                        </div>
                        <div className="text-sm text-muted-foreground">Помощь в создании дизайн-проекта</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="master" id="master" />
                      <Label htmlFor="master" className="flex-1 cursor-pointer">
                        <div className="font-semibold flex items-center gap-2">
                          <Icon name="Hammer" size={18} className="text-primary" />
                          Мастер-мебельщик
                        </div>
                        <div className="text-sm text-muted-foreground">Консультация по изготовлению</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите вашу задачу или пожелания..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@mebelmaster.ru</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Москва</p>
                <p className="text-sm text-muted-foreground mt-2">ул. Мебельная, 12</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Hammer" size={24} className="text-primary" />
                <span className="text-xl font-bold">МебельМастер</span>
              </div>
              <p className="text-sm opacity-80">
                Создаём качественную мебель на заказ с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Изготовление мебели</li>
                <li>Дизайн-проект</li>
                <li>Реставрация</li>
                <li>Доставка и монтаж</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>info@mebelmaster.ru</li>
                <li>г. Москва, ул. Мебельная, 12</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2024 МебельМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;