const CleansingAndProtection = () => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
          <div className="flex flex-col items-center w-full max-w-[550px] px-4 md:px-16">
            <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light text-center">
            Smudging -House Cleansing and Protection
            </h1>
            <p className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">
              {/* Your actual content here */}
              Subtitle...
            </p>
          </div>
        </div>
        
        {/* Main Content Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-main-text text-lg space-y-8">
            <h2 className="text-3xl font-light mb-8">Section Title</h2>
            <p>content...</p>
            {/* Add more content sections as needed */}
          </div>
        </section>
      </div>
    );
  };
  
  export default CleansingAndProtection;