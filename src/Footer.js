
export default function Footer(){
    return(
        <div className="flex justify-center bg-black text-white relative bottom-16" id="footer">
        <div className="grid grid-flow-row gap-4 w-9/12">
            <div className="flex justify-center relative top-10">
                <p>Best Choice Wheels is India's leading used auto platform business
                     which is organizing the market by aggregating demand and supply. 
                     It has the largest pan-India used car retailing network,
                      large and fast-growing partnerships to procure used vehicles efficiently, 
                      the #2 auto-content portal in the country in carandbike.com,
                       as well as the dominant share of the enterprise solutions market for banks, NBFCs, 
                       insurance companies and OEMs.</p>
            </div>
           
            <div className="flex justify-between gap-10 text-blue-400 relative top-10">
                <div className="cursor-pointer">
                <p className="font-bold text-2xl">About MFC</p>

                <p>About Us</p>
                <p>Investor Relations</p>
                <p>Press</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>FAQs</p>
                <p>Contact Us</p>
                <p>Sitemap</p>
                <p>Privacy Policy</p>
                <p>Ethics Helpline</p>

                <p className="font-bold text-2xl">Browse By Category</p>
              </div>
               
                <div className="cursor-pointer">
                <p className="font-bold text-2xl">How It Works</p>

                <p>Certified by MFC</p>
                <p>Warranty</p>
                <p>Our Businesses</p>
                <p>Industry Insights</p>
                
                </div>
                
                <div className="cursor-pointer">
                <p className="font-bold text-2xl">Partner with MFC</p>
                <p>Partner with Us</p>
                <p>Dealer Login</p>
                <p>Surveyor Login</p>
                
                </div>
                
                <div className=" cursor-pointer">
                <p className="font-bold text-2xl">Contact Us</p>
                <address className="w-60">
                Mahindra First Choice Wheels

602, 6th Floor, Tower - B,

Embassy 247

Vikhroli (West), Mumbai

24x7 Helpline -

9930565555

help.mfcw@mahindra.com
                </address>
                </div>
            </div>
          </div>
        </div>
       

    )
}