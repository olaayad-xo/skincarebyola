import { Link } from "react-router-dom";
import { ArrowRight, Camera, Search, Sparkles, ShoppingBag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { skinConditions, products, categories } from "@/data/skinCareData";

const Index = () => {
  const featuredConditions = skinConditions.slice(0, 4);
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-pattern">
        <div className="container-custom py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-light text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Your Skin Health Companion
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-primary">Skin Care Solution</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Identify skin conditions, discover effective treatments, and find products available in Egypt tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/conditions">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90">
                  <Search className="w-5 h-5" />
                  Browse Conditions
                </Button>
              </Link>
              <Link to="/conditions">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <Camera className="w-5 h-5" />
                  Upload Photo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* How It Works */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Simple steps to find the right treatment for your skin</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Identify Your Condition", desc: "Browse our database or upload a photo of your skin concern" },
              { icon: Sparkles, title: "Get Recommendations", desc: "Discover active ingredients and treatment timelines" },
              { icon: ShoppingBag, title: "Find Products", desc: "Shop from products available in Egypt with filters and reviews" },
            ].map((step, i) => (
              <Card key={i} className="relative hover-lift border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-gradient flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Browse by Category</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/conditions?category=${cat.id}`}>
                <Card className="hover-lift cursor-pointer border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-4 text-center">
                    <span className="text-3xl mb-2 block">{cat.icon}</span>
                    <h3 className="font-medium text-foreground text-sm">{cat.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Conditions */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Common Skin Conditions</h2>
            <Link to="/conditions" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredConditions.map((condition) => (
              <Link key={condition.id} to={`/conditions/${condition.id}`}>
                <Card className="overflow-hidden hover-lift border-0 shadow-lg h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={condition.imageUrl} 
                      alt={condition.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-card/90 text-xs font-medium">
                      {condition.severity}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{condition.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{condition.description}</p>
                    <div className="mt-3 flex items-center text-primary text-sm font-medium">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Products</h2>
            <Link to="/products" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-lift border-0 shadow-lg">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.origin === 'egyptian' && (
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      🇪🇬 Egyptian
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium mb-1">{product.brand}</p>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">{product.price} EGP</span>
                    <div className="flex items-center gap-1">
                      {"★".repeat(product.effectiveness)}
                      <span className="text-xs text-muted-foreground">({product.effectiveness}/5)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-gradient text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Skin Care Journey</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Create a profile to save your routines and track your progress
          </p>
          <Link to="/profile">
            <Button size="lg" variant="secondary" className="gap-2">
              Create Your Profile <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
