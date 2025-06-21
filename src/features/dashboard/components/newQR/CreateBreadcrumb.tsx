import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface CreateBreadcrumbProps {
	isActive: 'content' | 'customize' | 'download';
}

const CreateBreadcrumb:React.FC<CreateBreadcrumbProps> = ({ isActive }) => {
    return (
        <Breadcrumb className="col-span-3 border w-fit px-6 rounded-full">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <button
                            className={`flex items-center gap-2 text-sm  ${
                                isActive === 'content'
                                    ? 'text-primary font-bold'
                                    : 'text-muted-foreground font-medium'
                            }`}
                        >
                            1. <span className='hidden md:block'>Content</span>
                        </button>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <button
                            className={`flex items-center gap-2 text-sm ${
                                isActive === 'customize'
                                    ? 'text-primary font-bold'
                                    : 'text-muted-foreground font-medium'
                            }`}
                        >
                            2. <span className='hidden md:block'>Customize</span>
                        </button>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <button
                            className={`flex items-center gap-2 text-sm ${
                                isActive === 'download'
                                    ? 'text-primary font-bold'
                                    : 'text-muted-foreground font-medium'
                            }`}
                        >
                            3. <span className='hidden md:block'>Download</span>
                        </button>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default CreateBreadcrumb;
