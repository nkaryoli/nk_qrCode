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
                        <AccordionTrigger><h1 className='text-[18px] font-normal'>{faq.question}</h1></AccordionTrigger>
                        <AccordionContent><p className='pl-2'>{faq.answer}</p></AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Faqs;
