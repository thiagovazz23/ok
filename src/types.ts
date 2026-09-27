export interface RecipeItem {
  id: string;
  name: string;
  category: 'classicos' | 'recheados' | 'especiais' | 'funcionais';
  tag: string;
  description: string;
  costEstimate: string;
  suggestedPrice: string;
  profitMargin: string;
  image: string;
  highlights: string[];
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  badge?: string;
  lessons: string[];
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  result: string;
  monthlyRevenue: string;
  quote: string;
  avatarText: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
