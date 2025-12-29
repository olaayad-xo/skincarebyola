import { User, Calendar, Settings, History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockUser, getConditionById, getProductById } from "@/data/skinCareData";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={mockUser.avatar} />
                  <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-2xl font-bold text-foreground">{mockUser.name}</h1>
                  <p className="text-muted-foreground">{mockUser.email}</p>
                  <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                    <Badge variant="secondary">Skin Type: {mockUser.skinType}</Badge>
                    {mockUser.concerns.map(c => {
                      const condition = getConditionById(c);
                      return condition && <Badge key={c} variant="outline">{condition.name}</Badge>;
                    })}
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  <Settings className="w-4 h-4" /> Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Saved Routines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" /> My Routines
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockUser.routines.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No saved routines yet</p>
              ) : (
                <div className="space-y-4">
                  {mockUser.routines.map(routine => {
                    const condition = getConditionById(routine.conditionId);
                    return (
                      <div key={routine.id} className="p-4 rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{routine.date}</span>
                          </div>
                          {condition && <Badge>{condition.name}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{routine.notes}</p>
                        <div className="flex flex-wrap gap-2">
                          {routine.products.map(pId => {
                            const product = getProductById(pId);
                            return product && (
                              <Badge key={pId} variant="secondary" className="text-xs">
                                {product.brand} - {product.name}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
