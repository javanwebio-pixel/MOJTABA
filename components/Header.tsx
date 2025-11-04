
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';
import SearchIcon from './icons/SearchIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import MenuIcon from './icons/MenuIcon';
import GlobeIcon from './icons/GlobeIcon';
import CloseIcon from './icons/CloseIcon';

// --- Desktop Navigation Components ---

const DesktopNavItem: React.FC<{ children: React.ReactNode; href?: string }> = ({ children, href = '#' }) => (
    <a href={href} className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors text-sm font-medium">
        {children}
    </a>
);

const DesktopDropdown: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="relative group">
        <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors text-sm font-medium">
            <span>{title}</span>
            <ChevronDownIcon />
        </button>
        <div className="absolute top-full right-0 mt-4 w-60 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
            {children}
        </div>
    </div>
);

const DesktopDropdownItem: React.FC<{ children: React.ReactNode, href?: string }> = ({ children, href = '#' }) => (
    <a href={href} className="block w-full text-right px-4 py-2.5 text-sm text-white rounded-lg hover:bg-white/20 transition-colors">
        {children}
    </a>
);

// --- Mobile Navigation Components ---

const MobileNavItem: React.FC<{ title: string; children?: React.ReactNode; href?: string }> = ({ title, children, href="#" }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) {
    return (
      <a href={href} className="block py-3 text-lg text-white font-semibold border-b border-white/10">
        {title}
      </a>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-3 text-lg text-white font-semibold">
        <span>{title}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
        </div>
      </button>
      {isOpen && (
        <div className="pr-4 py-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

const MobileDropdownItem: React.FC<{ children: React.ReactNode; href?: string }> = ({ children, href="#" }) => (
    <a href={href} className="block py-2 text-base text-gray-300 hover:text-white transition-colors">
        {children}
    </a>
)

// --- Main Header Component ---

const Header: React.FC<{ onNavigateToDashboard: () => void }> = ({ onNavigateToDashboard }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const openMobileMenu = () => {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
    };

    const companyLinks = [
        { title: 'درباره ما', href: '#' },
        { title: 'اهداف ما', href: '#' },
        { title: 'مقالات', href: '#' },
    ];
    const productLinks = [
        { title: 'لوله تک لایه', href: '#' },
        { title: 'لوله رولی تک لایه', href: '#' },
        { title: 'لوله سه لایه فایبر گلاس', href: '#' },
        { title: 'لوله رولی سه لایه فایبر گلاس', href: '#' },
        { title: 'اتصالات پلیمری', href: '#' },
    ];
    const contactLinks = [
        { title: 'تماس با ما', href: '#' },
        { title: 'سوالات متداول', href: '#' },
        { title: 'نظرسنجی', href: '#' },
        { title: 'درخواست نمایندگی', href: '#' },
        { title: 'انتقاد و پیشنهادات', href: '#' },
    ];
    const languages = [
        { code: 'ar', name: 'العربية' },
        { code: 'tr', name: 'Türkçe' },
    ];

  return (
    <>
    <header className="absolute top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-screen-xl z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 flex items-center justify-between">
        
        {/* Left side: Logo & Desktop Nav */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="text-white">
              <span className="font-bold text-lg tracking-wider">FPI</span>
              <p className="text-xs opacity-80 tracking-widest">صنایع لوله آینده</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <DesktopNavItem>صفحه اصلی</DesktopNavItem>
            <DesktopDropdown title="شرکت">
                {companyLinks.map(link => <DesktopDropdownItem key={link.title} href={link.href}>{link.title}</DesktopDropdownItem>)}
            </DesktopDropdown>
            <DesktopDropdown title="محصولات">
                {productLinks.map(link => <DesktopDropdownItem key={link.title} href={link.href}>{link.title}</DesktopDropdownItem>)}
            </DesktopDropdown>
            <DesktopDropdown title="ارتباط با ما">
                {contactLinks.map(link => <DesktopDropdownItem key={link.title} href={link.href}>{link.title}</DesktopDropdownItem>)}
            </DesktopDropdown>
            <DesktopNavItem>فرم استخدام</DesktopNavItem>
            <a href="#" className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors text-base font-semibold">پنل مجریان</a>
          </nav>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
                <DesktopDropdown title="FA">
                    {languages.map(lang => <DesktopDropdownItem key={lang.code}>{lang.name}</DesktopDropdownItem>)}
                </DesktopDropdown>
                <div className="relative">
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2.5 rounded-full hover:bg-white/20 transition-colors">
                        <SearchIcon />
                    </button>
                    {isSearchOpen && (
                        <div className="absolute top-full right-0 mt-3 w-64 p-2 z-50">
                            <form>
                                <input
                                    type="search"
                                    placeholder="جستجو..."
                                    className="w-full bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                    autoFocus
                                />
                            </form>
                        </div>
                    )}
                </div>
            </div>
             <button onClick={onNavigateToDashboard} className="hidden sm:flex items-center gap-2 bg-transparent text-white border border-white/50 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
                داشبورد مشتریان
            </button>
            <a href="#" className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
                درخواست نمایندگی
                <ArrowRightIcon />
            </a>
            <button className="lg:hidden p-2.5 rounded-full hover:bg-white/20 transition-colors" onClick={openMobileMenu}>
                <MenuIcon />
            </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[100] p-6 flex flex-col">
            <div className="flex items-center justify-end">
                <button onClick={closeMobileMenu} className="text-white">
                    <CloseIcon />
                </button>
            </div>
            <nav className="mt-8 flex-grow overflow-y-auto">
                <MobileNavItem title="صفحه اصلی" />
                <MobileNavItem title="شرکت">
                    {companyLinks.map(link => <MobileDropdownItem key={link.title} href={link.href}>{link.title}</MobileDropdownItem>)}
                </MobileNavItem>
                <MobileNavItem title="محصولات">
                    {productLinks.map(link => <MobileDropdownItem key={link.title} href={link.href}>{link.title}</MobileDropdownItem>)}
                </MobileNavItem>
                <MobileNavItem title="ارتباط با ما">
                    {contactLinks.map(link => <MobileDropdownItem key={link.title} href={link.href}>{link.title}</MobileDropdownItem>)}
                </MobileNavItem>
                <MobileNavItem title="فرم استخدام" />
                <MobileNavItem title="پنل مجریان" />
            </nav>

             {isSearchOpen && (
                <div className="px-1 py-4">
                     <form>
                         <input
                            type="search"
                            placeholder="جستجو..."
                            className="w-full bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                            autoFocus
                        />
                    </form>
                </div>
            )}
            
            {isMobileLangOpen && (
                <div className="py-2">
                    {languages.map(lang => (
                        <a href="#" key={lang.code} className="block w-full text-right px-4 py-2.5 text-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                           {lang.name}
                        </a>
                    ))}
                </div>
            )}

            <div className='flex items-center justify-between py-4 border-t border-white/10'>
                <button className='flex items-center gap-2 text-white' onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}>
                    <GlobeIcon />
                    <span>فارسی</span>
                    <div className={`transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180' : ''}`}>
                      <ChevronDownIcon />
                    </div>
                </button>
                <button className="p-2.5 rounded-full bg-white/10" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    )}
    </>
  );
};

export default Header;
