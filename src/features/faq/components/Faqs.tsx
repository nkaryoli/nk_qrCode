import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';

const Faqs = () => {
    return (
        <div className='w-[500px]'>
            <Accordion type="single" collapsible className="space-y-1">
                {faqs.map((faq, index) => (
                    <AccordionItem value={faq.question} key={index}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Faqs;
