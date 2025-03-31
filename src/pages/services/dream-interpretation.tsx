const DreamInterpretation = () => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex w-full bg-[#344245] justify-center py-64 sm:py-[120px] border-b-2">
          <div className="flex flex-col items-center w-full max-w-[550px] px-4 md:px-16">
            <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light text-center">
            Dream Interpretation
            </h1>
            <p className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light">
                Unlock the Hidden Wisdom of Your Dreams
            </p>
          </div>
        </div>
        
        {/* Main Content Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-main-text text-lg space-y-[24px] mt-64 w-full max-w-[700px] mx-auto px-[16px]">
            {/* <h2 className="text-3xl font-light mb-8">Section Title</h2> */}
            <p>
            Dreams are powerful, sacred messages from the subconscious, often offering profound insight, guidance, and healing. I offer Dream Interpretation services to help you decode the messages hidden within your dreams. Whether vivid or fleeting, dreams hold valuable clues about your inner world, spiritual journey, and emotional state. They serve as a bridge between your waking life and the deeper realms of your subconscious, often revealing wisdom, fears, desires, and messages from the spirit world.</p>
            <p>
            Through Dream Interpretation, I will guide you in understanding the symbolism, emotions, and themes present in your dreams, helping you uncover their deeper meaning. This process often reveals aspects of your life that may need attention, healing, or transformation. By interpreting these messages, you can gain clarity, release emotional blockages, and align more deeply with your true path.
            </p>
            {/* Add more content sections as needed */}
          </div>
        </section>
      </div>
    );
  };
  
  export default DreamInterpretation;