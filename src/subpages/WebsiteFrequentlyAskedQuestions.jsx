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
                  Find answers to commonly asked questions about admissions, academics and scholarships.
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
                    General Information
                  </span>
                </button>
                {" "}
                <button type="button" className="faq-tab" data-faq-category="admission">
                  <i className="fa-solid fa-file-pen"></i>
                  {" "}
                  <span>
                    Admission Related Information
                  </span>
                </button>
                {" "}
                <button type="button" className="faq-tab" data-faq-category="scholarships">
                  <i className="fa-solid fa-award"></i>
                  {" "}
                  <span>
                    Scholarships
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
                      What is the full name of University?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      COMSATS University Islamabad (CUI).
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
                      What is an abbreviation of COMSATS?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Commission on Science and Technology for Sustainable Development in the South (COMSATS).
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
                      Is CUI a private or Public Sector University?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      It’s a Federally Chartered, Public sector University.
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
                      Is University recognized by Higher Education Commission (HEC) of Pakistan?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, University is recognized by the Higher Education Commission (HEC) of Pakistan.
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
                      How many campuses does university have?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      There are seven campuses of CUI.
                      <br />
                      <br />
                      Islamabad campus, Lahore campus, Abbottabad Campus, Sahiwal Campus, Vehari Campus, Wah Campus, Attock Campus.
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
                      What is system of education being followed at CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      CUI follows semester system. There are two semesters in a year i.e Spring (February – June) and Fall (September – January).
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
                      Is there any age limit for applying for admission in Undergraduate degree programs?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      There is no age limit. CUI provides equal opportunity to all the applicant purely on merit bases.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      08
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      How Frequently Admissions are offered at CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      CUI Offers admissions in Undergraduate and Graduate degree programs twice in a year i-e Fall and Spring session.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      09
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does Pakistan Engineering Council (PEC) recognize engineering programs of CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, all the engineering programs offer by CUI are recognized by Pakistan Engineering council.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      10
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does COMSATS University has highly qualified faculty in various disciplines?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, COMSATS has highly qualified and experienced faculty in various disciplines in accordance with the guidelines provided by HEC.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      11
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does NCEAC and NBEAC recognize computer science and Management Science programs of CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, all degree programs at all campuses of CUI are recognized by HEC and their relevant accreditation bodies.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      12
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does COMSATS University have lab facilities?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, COMSATS have latest and well-equipped relevant laboratories to support programs being offered at Undergraduate and Graduate level.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      13
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does COMSATS has computer lab facilities?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, COMSATS has modern classrooms and well-equipped updated computer labs as well as high speed internet facility.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      14
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does COMSATS has library facility?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, all the campuses of COMSATS have state-of-the-art modern library facilities, having access to specialized digital resources and databases. Sufficient subject-wise books and journals are also available.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      15
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Do the applicants with DAE qualification eligible to apply for admission in Engineering Programs?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, a 2% quota is reserved for DAE applicants who can apply for the Engineering Programs in line with the policy guidelines provided by the Pakistan Engineering Council (PEC).
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      16
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Is there is any self-finance / quota system in COMSATS?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      No, admissions are offered on open merit basis.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      17
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does COMSATS provide Hostel Facility.
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Mostly all the campuses has hostel facility/hostel facilitation center, but it is better to contact respective Admission Office of that campus for further confirmation.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      18
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does COMSATS provides a transport Facility for the students?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Yes, CUI provides transport facility to their students.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      19
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      When do the classes commence?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Fall semester commence in 1st week of September, whereas the Spring semester commence in 1st week of February.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      20
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does CUI entertain transfer/migration cases?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      CUI does not have credit hours transfer policy from any National or International Institute/university. However, a student of CUI can transfer his/her credit hours to other university either national or international.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      21
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      What is a duration of undergraduate and graduate (MS/P.hD) degree programs?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      <div className="faq-program-table">
                        <div className="faq-program-row faq-program-header">
                          <strong>
                            Program
                          </strong>
                          {" "}
                          <strong>
                            Years
                          </strong>
                          {" "}
                          <strong>
                            Minimum Semesters
                          </strong>
                          {" "}
                          <strong>
                            Maximum Semesters
                          </strong>
                        </div>
                        <div className="faq-program-row">
                          <strong>
                            Bachelor
                          </strong>
                          {" "}
                          <span>
                            04
                          </span>
                          {" "}
                          <span>
                            08
                          </span>
                          {" "}
                          <span>
                            12
                          </span>
                        </div>
                        <div className="faq-program-row">
                          <strong>
                            MS
                          </strong>
                          {" "}
                          <span>
                            02
                          </span>
                          {" "}
                          <span>
                            04
                          </span>
                          {" "}
                          <span>
                            08
                          </span>
                        </div>
                        <div className="faq-program-row">
                          <strong>
                            Ph.D
                          </strong>
                          {" "}
                          <span>
                            03
                          </span>
                          {" "}
                          <span>
                            06
                          </span>
                          {" "}
                          <span>
                            14
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      22
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      What is a medium of instruction in CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      English is a medium of instruction in CUI
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      23
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      If my name on CNIC / Passport is different which is mentioned on my academic documents. How can I get the same name on my degree/transcript issued by CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      At the time of admission, the applicant is required to enter his/her personal data (name, father name, Date of Birth (DOB)) in accordance to his/her Secondary School Certificate (SSC) / O-Levels certificate.
                      <br />
                      <br />
                      However, in case of any change in student name, you will be first required to get the SSC/O-Level DMC / Certificate revised and submit the revised SSC/O-Level certificate to CUI for change in name.
                      <br />
                      <br />
                      Please note that, you need to apply for the change in name or father name or DOB well before the printing of final transcript.
                      <br />
                      <br />
                      In case of applying after printing of transcript / Degree, you will be required to pay the prescribed fee.
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      24
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Is there any part time degree programs or short course(s) / diploma offered by CUI?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      CUI offers full time degree programs
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-question" type="button">
                    <span className="faq-number">
                      25
                    </span>
                    {" "}
                    <span className="faq-question-text">
                      Does CUI Islamabad Campus offer any weekend programs?
                    </span>
                    {" "}
                    <span className="faq-toggle">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      Currently, no weekend programs are being offered by CUI.
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-category sf-hidden" id="faq-admission" data-category="admission"></div>
              <div className="faq-category sf-hidden" id="faq-scholarships" data-category="scholarships"></div>
              <div id="faqNoResults" className="faq-no-results sf-hidden"></div>
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
