import { Briefcase, GraduationCap, Rocket } from "lucide-react";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="bg-indigo-600 text-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Mamta Kumari</h1>
            <p className="text-sm">Tech SEO & Meta Ads Specialist • Valid Job Seeker Visa (Germany)</p>
          </div>
          <div className="text-right text-sm">
            <p>📞 +49 1634375906</p>
            <p>✉️ mamtayadave2811@gmail.com</p>
            <p>📍 Schlangenkoppel 4A, Germany</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero / Summary */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">About Me</h2>
              <p className="mt-3 text-gray-700">I am a Digital Marketing Specialist focused on <strong>Technical SEO</strong>, <strong>Meta Ads</strong>, and <strong>data-driven growth</strong>. I have led campaigns across international markets and scaled organic and paid channels to deliver measurable results.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="/mnt/data/Mamta Kumari Resume - Germany.docx" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">Download Resume</a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Specialties</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>Technical SEO & Site Audits</li>
                <li>Meta Ads (Facebook & Instagram)</li>
                <li>Lead Generation & CRO</li>
                <li>Analytics (GA4) & Reporting</li>
                <li>Content Optimization & Link Building</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Tools</h4>
              <p className="mt-2 text-sm text-gray-600">Semrush · Google Analytics (GA4) · Search Console · Screaming Frog · Power BI · Excel · Ubersuggest</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Certifications</h4>
              <p className="mt-2 text-sm text-gray-600">HubSpot SEO (2024) · HubSpot Certified Digital Marketer (2024) · WebHitters SEO Training</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Experience</h3>
          <div className="space-y-4">
            <article className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Meta Ads & SEO Specialist</h4>
                  <p className="text-sm text-gray-500">Canam Consultant Pvt. Ltd. • Chandigarh, India</p>
                </div>
                <span className="text-sm text-gray-400">Jun 2023 – Mar 2024</span>
              </div>

              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Increased organic traffic by 20–25% via strategic keyword research and technical fixes.</li>
                <li>Ranked 500+ keywords on Google first page and scaled organic traffic from 35k → 150k/month.</li>
                <li>Managed Meta Ads with a budget of ₹2,000,000; generated 50,000+ leads with 2x ROI (CPL as low as ₹40).</li>
              </ul>
            </article>

            <article className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Digital Marketing Executive</h4>
                  <p className="text-sm text-gray-500">Ticketgateway • Remote (Canada)</p>
                </div>
                <span className="text-sm text-gray-400">Dec 2021 – May 2023</span>
              </div>

              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Boosted organic traffic from 50k → 200k/month and raised domain authority to 46.</li>
                <li>Improved conversion rate from 5% → 7% on Meta Ads and delivered comprehensive SEO solutions.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Case Studies with embedded images */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Case Studies & Results</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* GA Report image */}
            <div className="bg-white rounded-xl shadow p-4">
              <h4 className="font-semibold mb-2">Traffic Growth — Ticketgateway (GA4)</h4>
              <p className="text-sm text-gray-600 mb-3">Year-on-year comparison (Feb–May 2023 vs Feb–May 2024) showing uplifts in sessions, organic social and referral traffic, and engagement metrics.</p>

              <img src="/images/ga-report.png" alt="GA4 Report showing growth" className="rounded-lg border" />

              <div className="mt-3 text-xs text-gray-500">
                Key highlights: Sessions +42.87%, Organic Social +114.81%, Referral +105.56%, Engagement rate +56.87%.
              </div>
            </div>

            {/* Site Audit image */}
            <div className="bg-white rounded-xl shadow p-4">
              <h4 className="font-semibold mb-2">Technical SEO Audit — Ticketgateway (Semrush)</h4>
              <p className="text-sm text-gray-600 mb-3">Comprehensive site audit (586 pages) identifying sitemap issues, H1 missing tags, and page speed opportunities.</p>

              <img src="/images/site-audit.png" alt="Site Audit Report" className="rounded-lg border" />

              <div className="mt-3 text-xs text-gray-500">Top findings: 539 incorrect sitemap URLs, H1 improvements, 80% site health (Semrush).</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-5 rounded-xl shadow text-sm text-gray-700 italic">
              “Mamta’s SEO strategies significantly improved our rankings. We saw a remarkable increase in organic leads within three months.”
              <footer className="mt-2 not-italic text-gray-500">— Manager, Canam Consultants</footer>
            </blockquote>

            <blockquote className="bg-white p-5 rounded-xl shadow text-sm text-gray-700 italic">
              “Her Meta Ads optimization reduced our CPL and doubled ROI. A detail-oriented marketer who understands data.”
              <footer className="mt-2 not-italic text-gray-500">— Client, Ticketgateway</footer>
            </blockquote>
          </div>
        </section>

        {/* Downloadable Case Study */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Downloadable Case Study</h3>
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-sm text-gray-600 mb-3">For an in-depth view of campaign strategies, challenges, and results, you can download my detailed case study document.</p>
            <a href="/mnt/data/GA Report feb to may 2023 compare to Feb to May 2024.pdf" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Download Case Study (PDF)</a>
          </div>
        </section>

        {/* Visual Project Timeline */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-6">Project Timeline</h3>
          <div className="relative border-l border-gray-300 ml-4">
            {/* 2019–2020 */}
            <div className="mb-8 ml-6">
              <div className="absolute -left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <GraduationCap size={16} />
              </div>
              <h4 className="font-semibold">2019–2020</h4>
              <p className="text-sm text-gray-600">SEO Training at WebHitters</p>
            </div>

            {/* 2021–2023 */}
            <div className="mb-8 ml-6">
              <div className="absolute -left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <Briefcase size={16} />
              </div>
              <h4 className="font-semibold">Dec 2021 – May 2023</h4>
              <p className="text-sm text-gray-600">Digital Marketing Executive at Ticketgateway (Remote, Canada)</p>
            </div>

            {/* 2023–2024 */}
            <div className="mb-8 ml-6">
              <div className="absolute -left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <Briefcase size={16} />
              </div>
              <h4 className="font-semibold">Jun 2023 – Mar 2024</h4>
              <p className="text-sm text-gray-600">Meta Ads & SEO Specialist at Canam Consultants (India)</p>
            </div>

            {/* 2024–Now */}
            <div className="mb-8 ml-6">
              <div className="absolute -left-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <Rocket size={16} />
              </div>
              <h4 className="font-semibold">2024 – Present</h4>
              <p className="text-sm text-gray-600">Expanding expertise in Germany, pursuing certifications and new projects</p>
            </div>
          </div>
        </section>

        {/* Contact & Call to Action */}
        <section className="bg-indigo-600 text-white p-6 rounded-2xl shadow mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Want to collaborate?</h3>
              <p className="text-sm mt-2">I’m available for roles in SEO, Paid Media, and Growth Marketing. I hold a valid Job Seeker Visa in Germany and can start interviews immediately.</p>
            </div>

            <div className="mt-4 md:mt-0 text-right">
              <a href="mailto:mamtayadave2811@gmail.com" className="inline-block px-4 py-2 bg-white text-indigo-700 font-medium rounded-lg shadow hover:bg-gray-100">Contact Me</a>
            </div>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-400 py-6">© Mamta Kumari • Digital Marketing Portfolio</footer>
      </main>
    </div>
  );
}

export default App;
