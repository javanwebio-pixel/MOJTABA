
export const initialCustomers = [
    { id: 1, name: 'آقای محمدی', company: 'شرکت ساختمانی آرمان', email: 'info@arman-co.ir', phone: '۰۹۱۲۳۴۵۶۷۸۹', status: 'فعال', statusColor: 'green' },
    { id: 2, name: 'خانم رضایی', company: 'پروژه ساختمانی امید', email: 'rezaei@omidsazeh.com', phone: '۰۹۱۲۹۸۷۶۵۴۳', status: 'فعال', statusColor: 'green' },
    { id: 3, name: 'آقای کریمی', company: 'تاسیسات مرکزی', email: 'karimi.tasisat@gmail.com', phone: '۰۹۳۵۱۱۱২২۳۳', status: 'غیرفعال', statusColor: 'red' },
    { id: 4, name: 'آقای احمدی', company: 'گروه مهندسی پایا', email: 'ahmadi@paya-eng.ir', phone: '۰۹۱۵۰۰۰۱۱۱۱', status: 'در انتظار تایید', statusColor: 'amber' },
    { id: 5, name: 'خانم حسینی', company: 'لوله کشی نوین', email: 'hosseini.n@outlook.com', phone: '۰۹۱۰۹۹۹۸۸۷۷', status: 'فعال', statusColor: 'green' },
];

export const initialOrderRequests = [
    { id: 1, customerName: 'آقای محمدی', company: 'شرکت ساختمانی آرمان', date: '۱۴۰۳/۰۵/۰۱', total: '۱۲,۵۰۰,۰۰۰ تومان', status: 'در انتظار تایید' },
    { id: 2, customerName: 'خانم حسینی', company: 'لوله کشی نوین', date: '۱۴۰۳/۰۴/۳۰', total: '۶,۷۰۰,۰۰۰ تومان', status: 'در انتظار تایید' },
];

export const initialTickets = [
    { 
        id: 'T-78901', 
        customerId: 3,
        customerName: 'آقای کریمی',
        subject: 'مشکل در محاسبه متراژ لوله پنج لایه', 
        department: 'فنی', 
        date: '۱۴۰۳/۰۴/۱۵', 
        status: 'بسته شده',
        messages: [
            { sender: 'customer', text: 'سلام، برای محاسبه متراژ لوله پنج لایه در یک پروژه با متراژ بالا نیاز به راهنمایی دارم.', timestamp: '۱۴۰۳/۰۴/۱۵ - ۱۰:۳۰' },
            { sender: 'admin', text: 'سلام آقای کریمی، لطفا نقشه پروژه را ارسال کنید تا بررسی شود.', timestamp: '۱۴۰۳/۰۴/۱۵ - ۱۱:۰۰' },
            { sender: 'customer', text: 'نقشه ارسال شد. ممنون.', timestamp: '۱۴۰۳/۰۴/۱۵ - ۱۱:۱۵' },
            { sender: 'admin', text: 'بررسی شد. محاسبات لازم انجام و برایتان ایمیل گردید. تیکت بسته می‌شود.', timestamp: '۱۴۰۳/۰۴/۱۵ - ۱۴:۰۰' },
        ]
    },
    { 
        id: 'T-78905', 
        customerId: 1,
        customerName: 'آقای محمدی',
        subject: 'سوال در مورد زمان تحویل سفارش KB-95780', 
        department: 'فروش', 
        date: '۱۴۰۳/۰۴/۲۲', 
        status: 'پاسخ داده شده',
        messages: [
            { sender: 'customer', text: 'سلام، میخواستم زمان دقیق تحویل سفارش KB-95780 رو بدونم. ممنون.', timestamp: '۱۴۰۳/۰۴/۲۲ - ۰۹:۰۰' },
            { sender: 'admin', text: 'سلام. سفارش شما امروز ارسال شده و فردا به دست شما خواهد رسید.', timestamp: '۱۴۰۳/۰۴/۲۲ - ۰۹:۱۵' },
        ] 
    },
    { 
        id: 'T-78910', 
        customerId: 2,
        customerName: 'خانم رضایی',
        subject: 'درخواست پیش فاکتور برای پروژه جدید', 
        department: 'مالی', 
        date: '۱۴۰۳/۰۴/۲۸', 
        status: 'در انتظار پاسخ',
        messages: [
            { sender: 'customer', text: 'سلام، لطفا یک پیش فاکتور برای لیست محصولات پیوست شده صادر بفرمایید.', timestamp: '۱۴۰۳/۰۴/۲۸ - ۱۶:۰۰' },
        ]
    },
];


export const allProducts = [
    { name: 'لوله تک لایه PPR سایز ۲۰', category: 'تک لایه', code: 'KB-101-20', price: '۴۵,۰۰۰', stock: 'موجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/02/taklayeh.jpg' },
    { name: 'لوله تک لایه PPR سایز ۲۵', category: 'تک لایه', code: 'KB-101-25', price: '۵۵,۰۰۰', stock: 'موجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/02/taklayeh.jpg' },
    { name: 'لوله سه لایه فایبرگلاس ۲۵', category: 'سه لایه', code: 'KB-301-25', price: '۷۲,۰۰۰', stock: 'موجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/02/3layeh.jpg' },
    { name: 'لوله سه لایه فایبرگلاس ۳۲', category: 'سه لایه', code: 'KB-301-32', price: '۹۵,۰۰۰', stock: 'ناموجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/02/3layeh.jpg' },
    { name: 'زانویی ۹۰ درجه', category: 'اتصالات', code: 'KB-A201', price: '۱۲,۰۰۰', stock: 'موجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%B2%D8%A7%D9%86%D9%88-90-%D8%AF%D8%B1%D8%AC%D9%87-1-1.jpg' },
    { name: 'بوشن', category: 'اتصالات', code: 'KB-A205', price: '۸,۰۰۰', stock: 'موجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%A8%D9%88%D8%B4%D9%86-1.jpg' },
    { name: 'سه راهی', category: 'اتصالات', code: 'KB-A203', price: '۱۵,۰۰۰', stock: 'موجود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%B3%D9%87-%D8%B1%D8%A7%D9%87%DB%8C-1-1.jpg' },
    { name: 'شیر فلکه', category: 'شیرآلات', code: 'KB-V401', price: '۱۵۰,۰۰۰', stock: 'تعداد محدود', imageUrl: 'https://kavirbaspar.com/wp-content/uploads/2022/03/%D8%B4%DB%8C%D8%B1-%D9%81%D9%84%DA%A9%D9%87-1-1.jpg' },
    { name: 'شیر توپی دسته‌فلزی', category: 'شیرآلات', code: 'KB-V405', price: '۱۸۰,۰۰۰', stock: 'موجود', imageUrl: '' },
    { name: 'لوله پنج لایه PEX', category: 'پنج لایه', code: 'KB-501', price: '۱۱۰,۰۰۰', stock: 'ناموجود', imageUrl: '' },
];
