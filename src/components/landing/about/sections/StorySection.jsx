import { useState } from 'react';
import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import Accordion from '../../Accordion';

import SeparatorBottom from '../../../../assets/images/landing/separator-bottom.svg';
import SeparatorTop from '../../../../assets/images/landing/separator-top.svg';

const ACCORDION_DATA = [
  {
    title: 'What is ChatenAI ? How does it work?',
    text: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!",
  },
  {
    title: 'What kind of questions can I ask ChatenAI?',
    text: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!",
  },
  {
    title: 'Can I get update regularly and For how long do I get updates?',
    text: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!",
  },
  {
    title: 'How can I get the customer support?',
    text: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!",
  },
  {
    title: 'HIs my data safe with ChatenAI?',
    text: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!",
  },
  {
    title: 'Is ChatenAI available in multiple languages?',
    text: "ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!",
  },
];

const StorySection = () => {
  const [activerIndex, setActiverIndex] = useState(null);

  return (
    <section className="pt-6">
      <img className="w-full" alt="" role="presentation" src={SeparatorTop} />

      <div className="px-4 pt-3 max-w-[1115px] mx-auto flex flex-col items-center max-1024:pt-6">
        <Subtitle title="Nasza historia" />

        <SectionTitle title="Story telling" className="mt-2.5" />

        <div className="mt-9 space-y-[22px] max-1024:space-y-4">
          {ACCORDION_DATA.map((data, index) => (
            <Accordion
              key={index}
              title={data.title}
              isOpen={index === activerIndex}
              setIsOpen={() =>
                setActiverIndex(index === activerIndex ? null : index)
              }
            >
              {data.text}
            </Accordion>
          ))}
        </div>
      </div>

      <img
        src={SeparatorBottom}
        className="w-full mt-11 max-1024:mt-10"
        role="presentation"
        alt=""
      />
    </section>
  );
};

export default StorySection;
