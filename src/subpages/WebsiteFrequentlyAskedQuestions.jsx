import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteFrequentlyAskedQuestions() {
  return (
    <>
      <form method="post" data-sf-nesting-track-id="1.1">
        <Header />
        <main>
          <section className="inner-page-hero faq-hero">
            <div className="container">
              <div className="inner-page-hero-content">
                <span className="inner-page-eyebrow">
                  ADMISSIONS
                </span>
                <h1>
                  Frequently Asked Questions
                </h1>
                <p>
                  Find answers to common questions about Linz College D.I.Khan, admissions and facilities.
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <a href="/admissions">
                    Admissions
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    Frequently Asked Questions
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="faq-main-section">
            <div className="container">
              <div className="faq-heading">
                <div className="section-eyebrow">
                  NEED HELP?
                </div>
                <h2>
                  Frequently Asked
                  {" "}
                  <span>
                    Questions
                  </span>
                </h2>
                <p>
                  Browse the categories below or search for a specific question to quickly find the information you need.
                </p>
              </div>
              <div className="faq-search-wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>
                {" "}
                <input type="text" id="faqSearch" placeholder="Search frequently asked questions..." autoComplete="off" defaultValue="" />
                {" "}
                <button type="button" id="faqClear" aria-label="Clear search">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="faq-tabs">
                <button type="button" className="faq-tab active" data-faq-category="general">
                  <i className="fa-solid fa-circle-info"></i>
                  {" "}
                  <span>
                    About the College
                  </span>
                </button>
                {" "}
                <button type="button" className="faq-tab" data-faq-category="admission">
                  <i className="fa-solid fa-file-pen"></i>
                  {" "}
                  <span>
                    Admissions
                  </span>
                </button>
                {" "}
                <button type="button" className="faq-tab" data-faq-category="programs">
                  <i className="fa-solid fa-award"></i>
                  {" "}
                  <span>
                    Programs &amp; Facilities
                  </span>
                </button>
              </div>
              <div className="faq-category active" id="faq-general" data-category="general">
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      01
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      What is the full name of the college?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Linz College D.I.Khan, also known as Linz School &amp; College, in Dera Ismail Khan.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      02
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Where is the college located?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Main Diyal Road, Dera Ismail Khan. You can see the map on the Contact page.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      03
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      When was the college established?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Linz College was established in April 2015 by Hameed Ramzan Qarni.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      04
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Which board is the college affiliated with?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      The college is affiliated with the Board of Intermediate and Secondary Education (BISE) D.I.Khan.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      05
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Is Linz College a residential institution?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes. Linz College is a residential institution. For hostel details, please contact us on WhatsApp or by email.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      06
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      How are the results of the college?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Our students have shown brilliant results in both SSC and HSSC.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      07
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Can I visit the campus?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, parents and students are welcome to visit. Please call 0966-852742 or message us on WhatsApp first so that we can arrange your visit.
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-category" id="faq-admission" data-category="admission">
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      01
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Are admissions open at the moment?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Admission announcements are shared in the News section of this website and on our TikTok and Instagram pages. Please message us on WhatsApp to confirm the current admission status.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      02
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      How can I apply for admission?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Download the admission form from the Admissions page, then contact us on WhatsApp or by phone for the submission process.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      03
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Where can I get the prospectus and admission form?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Both are available as PDF downloads on the Prospectus page and the Admissions page.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      04
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      What are the fees?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Fee details can change, so please contact us on WhatsApp (+92 342 4803706) or by email (hameedkerni@gmail.com) for the current fee information.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      05
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Which documents are required for admission?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Please check the prospectus and admission form, or contact us for the list of required documents.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      06
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Whom should I contact for admission enquiries?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Message us on WhatsApp at +92 342 4803706, call 0966-852742, or email hameedkerni@gmail.com.
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-category" id="faq-programs" data-category="programs">
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      01
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Which classes and programs does the college offer?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      We offer education from Playgroup to Matric, with Primary and Middle sections, and FSc Pre-Medical, FSc Pre-Engineering and ICS at the intermediate level.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      02
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Which FSc groups are available?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      FSc Pre-Medical and FSc Pre-Engineering are available, along with ICS (Intermediate in Computer Science).
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      03
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does the college have science labs?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes. The college has four labs: Physics, Chemistry, Biology and Computer.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      04
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does the college have a library?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes. The college has a library with books and study material for students.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      05
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Are there sports and a cafeteria?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, the college has sports activities and a campus cafeteria. Details can change, so please contact us for current information.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      06
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does the college provide transport?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Transport is not available at present.
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-no-results sf-hidden" id="faqNoResults">
                <h3>No results found</h3>
                <p>Try a different word, or message us on WhatsApp.</p>
              </div>
            </div>
          </section>
          ```
        </main>
        <Footer />
        <div id="Modalsearch" className="modal fade sf-hidden" role="dialog" data-sf-nesting-track-id="1.1.4">
          <div className="modal-dialog modal-lg sf-hidden" data-sf-nesting-track-id="1.1.4.1">
            <div className="modal-content sf-hidden" data-sf-nesting-track-id="1.1.4.1.1">
              <div className="modal-body sf-hidden" data-sf-nesting-track-id="1.1.4.1.1.2"></div>
            </div>
          </div>
        </div>
        <input type="hidden" />
      </form>
      <BackToTop />
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "left": "-1px", "position": "absolute" }}></table>
    </>
  );
}
