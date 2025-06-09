import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Search,
  Calendar,
  MapPin,
  Star,
  Shield,
  CreditCard,
  Users,
  Clock,
  Music,
  Trophy,
  Drama,
  Sparkles,
  ArrowRight,
  Menu,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  // Auto-play configuration for seamless infinite scroll
  const autoplay = useRef(
    Autoplay({
      delay: 3000, // 3 seconds between slides
      stopOnInteraction: false, // Continue auto-play even after user interaction
      stopOnMouseEnter: true, // Pause on hover
      playOnInit: true, // Start auto-play immediately
    })
  );

  // Carousel functionality with auto-play
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Infinite loop
      align: "start",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [autoplay.current] // Add auto-play plugin
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                EventFlow
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/dashboard"
                className="text-foreground hover:text-primary font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/demo"
                className="text-foreground hover:text-primary font-medium"
              >
                Demo
              </Link>
              <Link
                href="#"
                className="text-foreground hover:text-primary font-medium"
              >
                Sports
              </Link>
              <Link
                href="#"
                className="text-foreground hover:text-primary font-medium"
              >
                Theatre
              </Link>
              <Link
                href="#"
                className="text-foreground hover:text-primary font-medium"
              >
                Local Events
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Get Started
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Discover Amazing Events.
              <br />
              <span className="text-primary">Book in Seconds.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              From sold-out concerts to local theater shows, find and secure
              your perfect experience with just a few clicks.
            </p>

            {/* Search Bar */}
            <div className="bg-card rounded-2xl shadow-2xl p-6 mb-12 max-w-4xl mx-auto border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search events, artists, venues..."
                    className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="City or venue"
                    className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Any date"
                    className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white"
                  />
                </div>
                <Button className="h-12 bg-primary hover:bg-primary/90 text-lg font-semibold">
                  Find Events
                </Button>
              </div>
            </div>

            {/* Quick Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge
                variant="secondary"
                className="px-6 py-3 text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200 cursor-pointer"
              >
                <Music className="w-4 h-4 mr-2" />
                Concerts
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Sports
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 text-sm font-medium bg-teal-100 text-teal-700 hover:bg-teal-200 cursor-pointer"
              >
                <Drama className="w-4 h-4 mr-2" />
                Theatre
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 text-sm font-medium bg-orange-100 text-orange-700 hover:bg-orange-200 cursor-pointer"
              >
                <Users className="w-4 h-4 mr-2" />
                Local Events
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Events Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Trending Now
              </h2>
              <p className="text-gray-600 text-lg">
                Don&apos;t miss these popular events
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="h-10 w-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="h-10 w-10 p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {(() => {
                // Events data for seamless infinite scroll
                const events = [
                  {
                    title: "Taylor Swift | The Eras Tour",
                    venue: "Madison Square Garden",
                    date: "Dec 15, 2024",
                    price: "From $89",
                    image:
                      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
                    category: "Concert",
                    rating: 4.9,
                    urgency: "Only 12 tickets left!",
                  },
                  {
                    title: "Lakers vs Warriors",
                    venue: "Crypto.com Arena",
                    date: "Dec 20, 2024",
                    price: "From $125",
                    image:
                      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&crop=center",
                    category: "Sports",
                    rating: 4.8,
                    urgency: "Selling fast",
                  },
                  {
                    title: "Hamilton",
                    venue: "Richard Rodgers Theatre",
                    date: "Dec 22, 2024",
                    price: "From $79",
                    image:
                      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop&crop=center",
                    category: "Theatre",
                    rating: 4.9,
                    urgency: "Limited availability",
                  },
                  {
                    title: "Ed Sheeran World Tour",
                    venue: "Wembley Stadium",
                    date: "Jan 5, 2025",
                    price: "From $65",
                    image:
                      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop&crop=center",
                    category: "Concert",
                    rating: 4.7,
                    urgency: "Hot seller",
                  },
                  {
                    title: "Super Bowl LVIII",
                    venue: "Allegiant Stadium",
                    date: "Feb 11, 2025",
                    price: "From $2,500",
                    image:
                      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=300&fit=crop&crop=center",
                    category: "Sports",
                    rating: 5.0,
                    urgency: "Premium event",
                  },
                  {
                    title: "The Lion King",
                    venue: "Minskoff Theatre",
                    date: "Dec 28, 2024",
                    price: "From $95",
                    image:
                      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop&crop=center",
                    category: "Theatre",
                    rating: 4.8,
                    urgency: "Family favorite",
                  },
                ];

                // Duplicate events for seamless infinite scroll
                return [...events, ...events].map((event, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden flex-none w-80"
                  >
                    <CardHeader className="p-0 relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900 hover:bg-white">
                        {event.category}
                      </Badge>
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.urgency}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">
                            {event.rating}
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-purple-600">
                          {event.price}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Get Tickets
                      </Button>
                    </CardFooter>
                  </Card>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            ⚡ Flash Sale - 48 Hours Only!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Save up to 30% on premium events this weekend
          </p>

          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">23</div>
              <div className="text-sm opacity-75">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">45</div>
              <div className="text-sm opacity-75">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm opacity-75">Seconds</div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
          >
            <Clock className="w-5 h-5 mr-2" />
            Shop Flash Sale
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              ✨ Three simple steps to amazing events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discover",
                emoji: "🔍",
                icon: Search,
                color: "from-pink-500 to-purple-600",
                bgColor: "bg-pink-50",
              },
              {
                step: "02",
                title: "Choose",
                emoji: "🎯",
                icon: MapPin,
                color: "from-purple-500 to-blue-600",
                bgColor: "bg-purple-50",
              },
              {
                step: "03",
                title: "Enjoy",
                emoji: "🎉",
                icon: CreditCard,
                color: "from-blue-500 to-cyan-600",
                bgColor: "bg-blue-50",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}

                <div
                  className={`${item.bgColor} rounded-3xl p-8 text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50`}
                >
                  {/* Large emoji */}
                  <div className="text-6xl mb-4 animate-bounce">
                    {item.emoji}
                  </div>

                  {/* Step number */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl text-white font-bold text-lg mb-4 shadow-lg`}
                  >
                    {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto opacity-80`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold text-gray-700">
                Ready in seconds!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Millions
            </h2>
            <p className="text-gray-600 text-lg">
              Your security and satisfaction are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Checkout",
                description: "256-bit SSL encryption protects your data",
              },
              {
                icon: Star,
                title: "Verified Reviews",
                description: "Real reviews from verified ticket buyers",
              },
              {
                icon: CreditCard,
                title: "Safe Payments",
                description: "Multiple secure payment options available",
              },
              {
                icon: Users,
                title: "24/7 Support",
                description: "Customer service team ready to help",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-bold text-gray-900">4.8/5</span>
                <span className="ml-1">from 50K+ reviews</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div>
                <span className="font-bold text-gray-900">2M+</span>
                <span className="ml-1">tickets sold monthly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unforgettable Experience?
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of event-goers who trust EventFlow to discover and
            book amazing live experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg"
            >
              Start Exploring Events
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EventFlow</span>
              </div>
              <p className="text-gray-400 mb-4">
                Discover and book amazing live experiences with ease.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Events</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Concerts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Theatre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Local Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Safety
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EventFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
