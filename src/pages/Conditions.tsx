import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { skinConditions, categories, bodyAreas } from "@/data/skinCareData";

const Conditions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const filteredConditions = skinConditions.filter(condition => {
    const matchesSearch = condition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || condition.category.toLowerCase() === selectedCategory;
    const matchesArea = !selectedArea || condition.affectedAreas.some(a => a.toLowerCase().includes(selectedArea));
    return matchesSearch && matchesCategory && matchesArea;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skin Conditions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive database of skin conditions to find information and treatment options
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="gap-1"
                >
                  {cat.icon} {cat.name}
                </Button>
              ))}
            </div>

            {/* Body Area Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {bodyAreas.slice(0, 8).map(area => (
                <Badge
                  key={area.id}
                  variant={selectedArea === area.id ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                >
                  {area.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Conditions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredConditions.map((condition) => (
              <Link key={condition.id} to={`/conditions/${condition.id}`}>
                <Card className="overflow-hidden hover-lift border-0 shadow-lg h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={condition.imageUrl} 
                      alt={condition.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                      condition.severity === 'mild' ? 'bg-success text-success-foreground' :
                      condition.severity === 'moderate' ? 'bg-warning text-warning-foreground' :
                      'bg-destructive text-destructive-foreground'
                    }`}>
                      {condition.severity}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{categories.find(c => c.id === condition.category.toLowerCase())?.icon}</span>
                      <span className="text-xs text-muted-foreground">{condition.category}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{condition.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{condition.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {condition.affectedAreas.slice(0, 3).map(area => (
                        <Badge key={area} variant="secondary" className="text-xs">{area}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredConditions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No conditions found matching your criteria</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Conditions;
