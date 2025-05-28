"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  Dice6,
  Users,
  Zap,
  Shield,
  Play,
  Heart,
  Mail,
  ArrowRight,
  Star,
  Globe,
  Sparkles,
} from "lucide-react";

interface FormData {
  email: string;
  name: string;
}

interface DonationData {
  amount: number;
  email: string;
  name: string;
  message?: string;
}

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isDonating, setIsDonating] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(10);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const {
    register: registerDonation,
    handleSubmit: handleDonationSubmit,
    formState: { errors: donationErrors },
    reset: resetDonation,
  } = useForm<DonationData>();

  const onRegisterSubmit = async (data: FormData) => {
    setIsRegistering(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      `Welcome aboard, ${data.name}! Check your email for early access.`
    );
    reset();
    setIsRegistering(false);
  };

  const onDonationSubmit = async (data: DonationData) => {
    setIsDonating(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(
      `Thank you for your ${data.amount}$ donation! Your support means everything.`
    );
    resetDonation();
    setIsDonating(false);
  };

  const donationAmounts = [5, 10, 20, 50, 100];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Dice6 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dice Verse
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#register"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Early Access
              </a>
              <a
                href="#donate"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Dice6 className="h-20 w-20 text-blue-500 animate-glow" />
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Epic Adventures
            <br />
            <span className="text-4xl md:text-6xl">Await Online</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create immersive RPG campaigns with friends. Roll dice, make
            choices, and forge legendary stories together with uniqe
            illustrations and voiceovers.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#register"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Join Early Access</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#features"
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>Learn More</span>
            </a>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Multiplayer</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Real-time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Cross-platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create unforgettable RPG experiences,
              designed for both beginners and veterans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dice6 className="h-8 w-8 text-blue-500" />,
                title: "Smart Dice Rolling",
                description:
                  "Advanced dice mechanics with modifiers, advantage/disadvantage, and custom formulas. Never lose track of your rolls again.",
              },
              {
                icon: <Users className="h-8 w-8 text-green-500" />,
                title: "Seamless Multiplayer",
                description:
                  "Connect with friends instantly. No complex setup required. Jump into adventures within seconds.",
              },
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "Turn-Based Combat",
                description:
                  "Tactical combat system with initiative tracking, spell management, and dynamic battlefields.",
              },
              {
                icon: <Shield className="h-8 w-8 text-red-500" />,
                title: "Character Management",
                description:
                  "Deep and easy to use character sheets with automatic calculations, spell tracking, and inventory management.",
              },
              {
                icon: <Play className="h-8 w-8 text-purple-500" />,
                title: "Interactive Scenarios",
                description:
                  "Choose-your-own-adventure style scenarios with branching narratives and consequences.",
              },
              {
                icon: <Globe className="h-8 w-8 text-indigo-500" />,
                title: "Cross-Platform",
                description:
                  "Play on desktop, tablet, or mobile. Your adventures sync across all devices seamlessly.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card hover:scale-105 transform transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section
        id="register"
        className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join the Adventure
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Be among the first to experience the future of online RPG gaming.
              Early access members get exclusive features and lifetime benefits.
            </p>
          </div>

          <div className="card max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="input-field"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="input-field"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isRegistering}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRegistering ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    <span>Get Early Access</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Exclusive Beta Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>No Spam Promise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-400" />
                  <span>Lifetime Benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Support Our Mission
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Help us build the ultimate RPG platform. Your contribution
              directly funds development, servers, and new features for the
              community.
            </p>
          </div>

          <div className="card max-w-2xl mx-auto">
            <form
              onSubmit={handleDonationSubmit(onDonationSubmit)}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Choose Donation Amount
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        selectedAmount === amount
                          ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  {...registerDonation("amount", {
                    required: "Amount is required",
                    min: { value: 3, message: "Minimum donation is $3" },
                  })}
                  type="number"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  className="input-field"
                  placeholder="Custom amount"
                  min="3"
                />
                {donationErrors.amount && (
                  <p className="mt-2 text-sm text-red-400">
                    {donationErrors.amount.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="donationName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  {...registerDonation("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  className="input-field"
                  placeholder="Enter your name"
                />
                {donationErrors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {donationErrors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="donationEmail"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  {...registerDonation("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="input-field"
                  placeholder="Enter your email"
                />
                {donationErrors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {donationErrors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  {...registerDonation("message")}
                  rows={3}
                  className="input-field resize-none"
                  placeholder="Leave a message for the team..."
                />
              </div>

              <button
                type="submit"
                disabled={isDonating}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isDonating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Heart className="h-5 w-5" />
                    <span>Donate ${selectedAmount}</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-gray-400">
                <div>
                  <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <p>Secure Payment</p>
                </div>
                <div>
                  <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <p>Contributor Recognition</p>
                </div>
                <div>
                  <Heart className="h-6 w-6 text-red-400 mx-auto mb-2" />
                  <p>Community Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Dice6 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dice Verse
              </span>
            </div>

            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; 2025 Dice Verse. All rights reserved. Built with ❤️ for the
              RPG community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
