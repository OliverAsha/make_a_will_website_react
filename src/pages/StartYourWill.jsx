import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const QUESTIONS = [
  {
    text: 'Are you making a will for yourself of your own free will?',
    flagOn: false,
    info: (
      <>
        <p>Is there anyone pressuring you to make your will or telling you what to put in your will? In particular:</p>
        <ol type="a">
          <li>is anyone doing or saying anything that makes you feel uncomfortable; or</li>
          <li>is there anyone who is a beneficiary or connected to a beneficiary encouraging you to put that beneficiary's interest before others.</li>
        </ol>
        <p><strong>If you are in any way in doubt, say "no".</strong></p>
      </>
    ),
  },
  {
    text: 'Do you or anyone close to you have any concerns about your mental capacity or your ability to make decisions?',
    flagOn: true,
    info: (
      <>
        <p>
          To make your will you need to have <a href="/testator" target="_blank" rel="noopener noreferrer">"testamentary capacity"</a>, i.e.:
        </p>
        <ol type="i">
          <li>you know what a will does;</li>
          <li>you know what you own and the rough value;</li>
          <li>you know who would expect to inherit, and you've reasons for any wish to exclude someone; and</li>
          <li>no crisis, physical or mental illness is affecting the decisions relating to your will.</li>
        </ol>
        <p>Your will can be challenged if someone close to you has any evidence that you may not have capacity when making your will.</p>
        <p><strong>If you are in any way in doubt, say "yes".</strong></p>
      </>
    ),
  },
  {
    text: 'Is there anyone who would expect to inherit from you who you will not leave anything to?',
    flagOn: true,
    info: (
      <>
        <p>This can be known as "disinheriting" or "writing someone out of your will". Commonly: providing less (or nothing) to a spouse, partner or child than they wanted or expected. This can also include removing gifts to people who were mentioned in any previous wills, or providing less to someone because of gifts you gave during your lifetime.</p>
        <p><strong>If you are in any way in doubt, say "yes".</strong></p>
      </>
    ),
  },
  {
    text: 'Are you in a long-term cohabiting relationship but not married or in a civil partnership?',
    flagOn: true,
    info: (
      <>
        <p>More people than ever are living together but choosing not to get married or enter into a civil partnership. This is often called "Common-Law Husband/Wife", but the arrangement lacks some of the "benefits" of being legally married or in a civil partnership. In particular there are inheritance tax allowances that benefit legally recognised relationships.</p>
        <p><strong>If you are, and in particular if you think that you and your cohabitee may have a combined estate worth more than the inheritance tax threshold, say "yes".</strong></p>
      </>
    ),
  },
  {
    text: 'Do you have any beneficiaries who are vulnerable and may be entitled to higher PIP benefits?',
    flagOn: true,
    info: (
      <>
        <p>If your will leaves money or property to someone who currently, or may in the future, receive higher benefits payments (e.g. due to a disability), then receipt of a significant gift could cause concerns for them. If they have more money and assets than the benefits rules allow, their benefits could be stopped.</p>
        <p>To avoid this you can consider creating a Vulnerable Person's Trust. You should speak with an estate planning specialist to understand the benefits and costs.</p>
      </>
    ),
  },
  {
    text: 'Do you own a business and/or do you think your estate may be above the inheritance tax threshold?',
    flagOn: true,
    info: (
      <>
        <p>The simple will does not include any advice around inheritance tax mitigation. You should consult an estate planning specialist if you wish to take advice on this.</p>
        <p>If you own a business (either sole trader, partnership or limited company) you should take additional advice on business continuity, tax treatment, and to ensure your beneficiaries are protected in the event of your death. You must ensure your will does not contradict any partnership agreement, shareholders' agreement or other commercial agreement.</p>
      </>
    ),
  },
  {
    text: 'Is there anyone who you think may want to challenge the wishes in your will?',
    flagOn: true,
    info: (
      <>
        <p>If there is someone who may wish to challenge the wishes in your will, there are proactive steps you can take. A simple wills service does not include advice or bespoke clauses to mitigate the risk of this happening. A well-crafted strategy can reduce the chance of a legal challenge, which can cause delays and cost tens of thousands of pounds.</p>
        <p><strong>If you are in any way in doubt, say "yes".</strong></p>
      </>
    ),
  },
];

const MAKE_WILL_URL = 'https://makeawillonline.co.uk/my-will';
const BOOK_CALL_URL = 'https://www.makeawillonline.co.uk/book-a-call/';

function StartYourWill() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const totalSteps = QUESTIONS.length + 1;
  const currentStep = Math.min(index + 1, totalSteps);
  const progressPct = (currentStep / totalSteps) * 100;
  const isFinal = index >= QUESTIONS.length;

  const scrollTop = () => window.scrollTo(0, 0);

  const answer = (yes) => {
    setAnswers((prev) => [...prev, yes]);
    setIndex((i) => i + 1);
    scrollTop();
  };

  const back = () => {
    if (index === 0) return;
    setAnswers((prev) => prev.slice(0, -1));
    setIndex((i) => i - 1);
    scrollTop();
  };

  const restart = () => {
    setAnswers([]);
    setIndex(0);
    scrollTop();
  };

  const flagged = answers
    .map((a, i) => ({ answer: a, q: QUESTIONS[i] }))
    .filter(({ answer, q }) => answer === q.flagOn);
  const anyFlagged = flagged.length > 0;
  const flaggedList = flagged
    .map(({ answer, q }) => `"${answer ? 'yes' : 'no'}" to "${q.text}"`)
    .join(', ');

  return (
    <>
      <Helmet>
        <title>Get Started with Your Will | Make a Will</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="questionnaire">
        <div className="progress-bar" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>

        <div className="questionnaire-inner">
          {!isFinal && (
            <div className="question-card">
              <p className="question-step">Question {index + 1} of {QUESTIONS.length}</p>
              <h2 className="question-text">{QUESTIONS[index].text}</h2>
              <details className="more-info" key={index}>
                <summary>More info</summary>
                <div className="more-info-body">{QUESTIONS[index].info}</div>
              </details>
              <div className="question-actions">
                <button type="button" onClick={() => answer(true)} className="btn btn-primary">Yes</button>
                <button type="button" onClick={() => answer(false)} className="btn btn-secondary">No</button>
              </div>
              {index > 0 && (
                <button type="button" onClick={back} className="question-back">← Back</button>
              )}
            </div>
          )}

          {isFinal && !anyFlagged && (
            <div className="question-card">
              <h2>Thank you</h2>
              <p>
                Please click "continue" to proceed to make your will online, or click "book a call" if you would rather speak with an advisor to make your will.
              </p>
              <div className="question-actions">
                <a href={MAKE_WILL_URL} className="btn btn-primary">Continue</a>
                <a href={BOOK_CALL_URL} className="btn btn-secondary">Book a Call</a>
              </div>
              <button type="button" onClick={restart} className="question-back">← Start again</button>
            </div>
          )}

          {isFinal && anyFlagged && (
            <div className="question-card">
              <h2>Thank you</h2>
              <p>
                You answered {flaggedList}. We advise you to speak with an advisor to help make your will.
              </p>
              <div className="question-actions">
                <a href={MAKE_WILL_URL} className="btn btn-secondary">Make a Will Online</a>
                <a href={BOOK_CALL_URL} className="btn btn-primary">Book a Call</a>
              </div>
              <button type="button" onClick={restart} className="question-back">← Start again</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StartYourWill;
