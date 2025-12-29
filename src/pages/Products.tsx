import { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/skinCareData";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [originFilter, setOriginFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("effectiveness");

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesOrigin = originFilter === "all" || product.origin === originFilter;
      return matchesSearch && matchesOrigin;
    })
    .sort((a, b) => {
      if (sortBy === "effectiveness") return b.effectiveness - a.effectiveness;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Products</h1>
            <p className="text-muted-foreground">Find skincare products available in Egypt</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
            <Select value={originFilter} onValueChange={setOriginFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Origin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="egyptian">🇪🇬 Egyptian</SelectItem>
                <SelectItem value="imported">🌍 Imported</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="effectiveness">Most Effective</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover-lift border-0 shadow-lg">
                <div className="aspect-square bg-muted relative">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                  {product.origin === 'egyptian' && (
                    <Badge className="absolute top-2 left-2 bg-accent">🇪🇬 Egyptian</Badge>
                  )}
                  {product.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium mb-1">{product.brand}</p>
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < product.effectiveness ? 'text-warning fill-warning' : 'text-muted'}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">Effectiveness</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">{product.price} EGP</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
