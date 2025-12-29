import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, AlertTriangle, Check, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getConditionById, getIngredientsForCondition, getProductsForCondition } from "@/data/skinCareData";

const ConditionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const condition = getConditionById(id || "");
  const ingredients = getIngredientsForCondition(id || "");
  const products = getProductsForCondition(id || "");

  if (!condition) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Condition Not Found</h1>
          <Link to="/conditions">
            <Button>Back to Conditions</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom">
          {/* Back Button */}
          <Link to="/conditions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Conditions
          </Link>

          {/* Condition Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img src={condition.imageUrl} alt={condition.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <Badge className="mb-3">{condition.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{condition.name}</h1>
              <p className="text-muted-foreground mb-1">{condition.nameAr}</p>
              <p className="text-muted-foreground mb-6">{condition.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">{condition.treatmentDuration}</span>
                </div>
                <Badge variant={condition.severity === 'mild' ? 'secondary' : condition.severity === 'moderate' ? 'outline' : 'destructive'}>
                  {condition.severity} severity
                </Badge>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Affected Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {condition.affectedAreas.map(area => (
                    <Badge key={area} variant="outline">{area}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" /> Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {condition.symptoms.map(symptom => (
                  <div key={symptom} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Ingredients */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recommended Active Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ingredients.map(ingredient => (
                  <div key={ingredient.id} className="p-4 rounded-xl bg-muted/50">
                    <h4 className="font-semibold text-foreground">{ingredient.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{ingredient.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {ingredient.benefits.slice(0, 3).map(b => (
                        <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Products */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Recommended Products in Egypt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.slice(0, 6).map(product => (
                  <div key={product.id} className="p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <img src={product.imageUrl} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <p className="text-xs text-primary font-medium">{product.brand}</p>
                        <h4 className="font-medium text-foreground text-sm">{product.name}</h4>
                        <p className="text-lg font-bold text-foreground">{product.price} EGP</p>
                        {product.origin === 'egyptian' && (
                          <Badge variant="outline" className="text-xs mt-1">🇪🇬 Egyptian</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/products">
                  <Button>View All Products</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionDetail;
