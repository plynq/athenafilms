import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck, ArrowRight, BarChart2, CheckCircle, Users, Layers, Clock, Send, Smile } from "lucide-react";

export default function AthenaSlides() {
  return (
    <div className="grid gap-8 p-6">

      {/* Slide 1: Cover Slide */}
      <Card className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <CardContent>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cold Outreach Support for Athena Films</h1>
          <p className="text-lg text-gray-600">Presented by Jurre Groot & Max Münstermann<br/>Plynq</p>
        </CardContent>
      </Card>

      {/* Slide 2: Shared Philosophy */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Great Stories Deserve to Be Seen</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><Sparkles className="text-indigo-500 mt-1" /> <span><strong>Athena Films</strong> creates culturally resonant storytelling for modern audiences.</span></li>
            <li className="flex items-start gap-2"><Sparkles className="text-indigo-500 mt-1" /> <span><strong>We connect those stories</strong> with decision-makers at the brands who need them most.</span></li>
            <li className="flex items-start gap-2"><Sparkles className="text-indigo-500 mt-1" /> <span>It’s not just about outreach—it’s about <strong>amplifying creativity with precision.</strong></span></li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 3: Our Role in Your Ecosystem */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Where We Fit</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><ShieldCheck className="text-green-500 mt-1" /> <span><strong>Extend your team</strong> with managed cold outreach that aligns with your brand.</span></li>
            <li className="flex items-start gap-2"><ShieldCheck className="text-green-500 mt-1" /> <span><strong>Campaign execution</strong> with safe, high-deliverability setup (warmup, copy, reply handling).</span></li>
            <li className="flex items-start gap-2"><ShieldCheck className="text-green-500 mt-1" /> <span><strong>Insight-driven optimization</strong> to refine targeting, messaging, and conversion based on real feedback.</span></li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 4: What We Do */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What We Actually Do</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><ArrowRight className="text-blue-500 mt-1" /> Lead sourcing (yours or enriched lists)</li>
            <li className="flex items-start gap-2"><ArrowRight className="text-blue-500 mt-1" /> Writing high-performing email copy</li>
            <li className="flex items-start gap-2"><ArrowRight className="text-blue-500 mt-1" /> Reply handling & inbox management</li>
            <li className="flex items-start gap-2"><ArrowRight className="text-blue-500 mt-1" /> Weekly updates & optional calls</li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 5: Our Process */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Simple, Clean Workflow</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><BarChart2 className="text-purple-500 mt-1" /> Lead Sourcing via Apollo + filters</li>
            <li className="flex items-start gap-2"><BarChart2 className="text-purple-500 mt-1" /> Cold Copy + Setup in Instantly</li>
            <li className="flex items-start gap-2"><BarChart2 className="text-purple-500 mt-1" /> Inbox Management & Warmup</li>
            <li className="flex items-start gap-2"><BarChart2 className="text-purple-500 mt-1" /> Performance-Based Optimization</li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 6: Why We're Different */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">You're In Safe Hands</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" /> No salesy spam — just thoughtful, effective outreach</li>
            <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" /> Expertise with branded content, creative studios, agencies</li>
            <li className="flex items-start gap-2"><CheckCircle className="text-green-600 mt-1" /> Solid deliverability setup, reply handling, and tracking</li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 7: The TikTok Question */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">TikTok Shop Leads?</h2>
          <p className="text-gray-700 mb-2">We can scrape TikTok Shop brands, but here’s our view:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><Users className="text-red-500 mt-1" /> These brands are often low-ticket, product-focused</li>
            <li className="flex items-start gap-2"><Users className="text-red-500 mt-1" /> Content budgets may not align with Athena’s high-end offering</li>
            <li className="flex items-start gap-2"><Users className="text-green-500 mt-1" /> Better: target brand/creative leads at mid-size consumer brands</li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 8: How We Collaborate */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How We Work Together</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><Layers className="text-cyan-500 mt-1" /> We operate as an extension of your team</li>
            <li className="flex items-start gap-2"><Clock className="text-cyan-500 mt-1" /> 3–5 day turnaround from approval to live campaigns</li>
            <li className="flex items-start gap-2"><Send className="text-cyan-500 mt-1" /> You get qualified replies in your inbox</li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 9: Next Steps */}
      <Card className="bg-white shadow-lg rounded-2xl p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">If It Feels Like a Fit</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2"><Smile className="text-yellow-500 mt-1" /> Align on copy + direction</li>
            <li className="flex items-start gap-2"><Smile className="text-yellow-500 mt-1" /> Setup Instantly campaign</li>
            <li className="flex items-start gap-2"><Smile className="text-yellow-500 mt-1" /> Go live & monitor together</li>
          </ul>
        </CardContent>
      </Card>

      {/* Slide 10: Thank You */}
      <Card className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <CardContent>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You</h2>
          <p className="text-gray-700">Let’s make storytelling your growth engine.<br/>Jurre Groot & Max Münstermann – Plynq</p>
        </CardContent>
      </Card>

    </div>
  );
}
