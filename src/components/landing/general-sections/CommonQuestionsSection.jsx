import Subtitle from '../Subtitle';
import SectionTitle from '../SectionTitle';
import Accordion from '../Accordion';

import SeparatorBottom from '../../../assets/images/landing/separator-bottom.svg';

const ACCORDION_DATA = [
  {
    title: 'What is ChatenAI ? How does it work?',
    text: 'ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you\'d typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!'
  },
  {
    title: 'What kind of questions can I ask ChatenAI?',
    text: 'ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you\'d typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!'
  },
  {
    title: 'Can I get update regularly and For how long do I get updates?',
    text: 'ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you\'d typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!'
  },
  {
    title: 'How can I get the customer support?',
    text: 'ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you\'d typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!'
  },
  {
    title: 'HIs my data safe with ChatenAI?',
    text: 'ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you\'d typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!'
  },
  {
    title: 'Is ChatenAI available in multiple languages?',
    text: 'ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you\'d typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!'
  },
]

const CommonQuestionsSection = () => {
  return (
    <section className='pt-11 px-4 max-1024:pt-10'>
      <div className='max-w-[1082px] mx-auto flex flex-col items-center'>
        <Subtitle title="Pomoc" />

        <SectionTitle title='Często Zadawane Pytania' className='mt-2.5' />

        <div className='mt-9 space-y-[22px] max-1024:space-y-4'>
          {ACCORDION_DATA.map((data, index) => (
            <Accordion key={index} title={data.title}>{data.text}</Accordion>
          ))}
        </div>
      </div>

      <img src={SeparatorBottom} className='w-full mt-11 max-1024:mt-10' role='presentation' alt="" />
    </section>
  );
};

export default CommonQuestionsSection;
