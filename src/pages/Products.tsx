
import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Parallax } from 'react-scroll-parallax';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell,
  TableCaption
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, Phone, Mail } from 'lucide-react';
import { PriceItem, getPrices } from '@/services/priceService';

const Products = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [priceListData, setPriceListData] = useState<PriceItem[]>([]);
  
  // Load price data on component mount
  useEffect(() => {
    setPriceListData(getPrices());
  }, []);

  const sortedData = [...priceListData];
  
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      if (sortConfig.key === 'size') {
        const sizeA = parseInt(a[sortConfig.key].split(' ')[0]);
        const sizeB = parseInt(b[sortConfig.key].split(' ')[0]);
        
        if (sortConfig.direction === 'asc') {
          return sizeA - sizeB;
        } else {
          return sizeB - sizeA;
        }
      } else {
        if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      }
    });
  }

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (name: string) => {
    if (!sortConfig || sortConfig.key !== name) {
      return null;
    }
    return sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/lovable-uploads/21a40637-d7fb-47c4-9f5c-147467ef18cc.png" 
            alt="TMT steel manufacturing rolling process" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom py-20 md:py-24 relative z-10">
          <Parallax translateY={[0, -15]} opacity={[1, 0.8]}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(0,51,102,0.80)',
                    padding: '1px 4px 2px 1px',
                    borderRadius: '16px',
                    boxShadow: '0 1px 8px rgba(0,0,0,0.10)'
                  }}
                >
                  PSKTMT 
                  </span>{' '}
                <span>Price List</span>
              </h1>
              <p className="text-xl text-neutral-200">
                Current prices for our high-quality TMT bars.
                <span className="block mt-3 text-sm font-semibold">Prices updated on April 23, 2025</span>
              </p>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Price List Section */}
      <section>
        <div className="container-custom">
          <SectionHeader 
            title="TMT Bar Price List"
            subtitle="Current prices for PSKTMT reinforcement steel bars (TMT600+ SD Grade)"
            centered={true}
            className="mb-8"
          />
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-card overflow-x-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold" style={{ color: "#003366" }}>Steel Price List</h3>
              <p className="text-neutral-600">Effective from April 23, 2025</p>
            </div>
            
            <Table>
              <TableCaption>Note: Prices are subject to change without prior notice. Contact for bulk orders.</TableCaption>
              <TableHeader>
                <TableRow className="bg-[#f2f7fc]">
                  <TableHead 
                    onClick={() => requestSort('size')} 
                    className="cursor-pointer hover:bg-[#e5eff8] transition-colors"
                  >
                    <div className="flex items-center" style={{ color: "#003366" }}>
                      TMT BAR SIZE {getSortIcon('size')}
                    </div>
                  </TableHead>
                  <TableHead 
                    onClick={() => requestSort('price')}
                    className="cursor-pointer hover:bg-[#e5eff8] transition-colors"
                  >
                    <div className="flex items-center" style={{ color: "#003366" }}>
                      RCP PER PIECE {getSortIcon('price')}
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedData.map((item) => (
                  <TableRow key={item.id} className="hover:bg-[#f8fafc]">
                    <TableCell className="font-medium">{item.size}</TableCell>
                    <TableCell className="text-[#003366] font-semibold">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Additional Information */}
          <div className="mt-10 bg-[#f2f7fc] p-6 rounded-lg border border-[#d1e2f2]">
            <h3 className="text-xl font-bold" style={{ color: "#003366" }}>Important Information</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Prices shown are inclusive of GST and applicable taxes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Minimum order quantity may apply for certain sizes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Delivery charges are extra and depend on location and quantity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>Special discounts available for bulk orders above 5 tons.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#003366] font-bold">•</span>
                <span>All our products comply with IS:1786 standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-pskaccent">
        <div className="container-custom">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Common questions about our pricing, delivery, and products"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="text-lg font-bold text-[#003366] mb-3">What does TMT600+ SD mean?</h4>
              <p className="text-neutral-600">TMT600+ SD indicates the yield strength of steel in N/mm². The SD designation offers additional ductility properties, making it ideal for earthquake-prone areas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="text-lg font-bold text-[#003366] mb-3">Do you offer any discounts for bulk orders?</h4>
              <p className="text-neutral-600">Yes, we provide special pricing for bulk orders above 5 tons. Please contact our sales team for customized quotations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="text-lg font-bold text-[#003366] mb-3">What is the standard length of TMT bars?</h4>
              <p className="text-neutral-600">Our TMT bars come in standard 12-meter lengths. Custom lengths can be arranged for specific requirements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h4 className="text-lg font-bold text-[#003366] mb-3">How often do prices change?</h4>
              <p className="text-neutral-600">Steel prices are influenced by market conditions and may change weekly. The prices listed here are updated regularly, but please confirm the latest rates before placing your order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003366] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Quote?</h2>
              <p className="text-xl mb-8">
                Our team is ready to provide personalized assistance and competitive pricing for your specific requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-white" />
                  <span>+91 91333 83303</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-white" />
                  <span>connect@thepskgroup.com</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button variant="secondary" size="lg" className="text-[#003366] bg-white hover:bg-neutral-100">
                Request Quotation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
