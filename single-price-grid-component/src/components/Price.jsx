import React from 'react'
import SignUp from './SignUp';

const Price = () => {
  return (
    <section className="max-w-3xl min-h-full fc container mx-auto bg-white rounded-md overflow-hidden">
      <div className="fc gap-(--space-s) p-(--space-s) lg:p-(--space-l)">
        <h3 className="text-(color:--teal-dark)">Join our community</h3>
        <p className="green-text">30-day, hassle-free money back guarantee</p>
        <p className="text-(--gray)">
          Gain access to our full library of tutorials along with expert code
          reviews.
          <br className="hidden lg:block" />
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full  bg-(--teal-dark) text-(color:--teal-light) p-(--space-s) lg:p-(--space-l) space-y-(--space-3xs)">
          <h3>Monthly Subscription</h3>
          <p className="flex items-center gap-3">
            <span className="text-(length:--fs-3) font-bold">$29</span>{" "}
            <span className='font-extralight'>per month</span>
          </p>
          <p>Full access for less than $1 a day</p>
          <SignUp />
        </div>
        <div className="fc bg-(--light-teal) p-(--space-s) lg:p-(--space-l) gap-(--space-s)">
          <h3 className="text-(color:--teal-light)">Why Us</h3>
          <div className="fc text-(color:--teal-light)">
            <small>Tutorials by Industry experts</small>
            <small>Peer & expert code review</small>
            <small>Coding exercises</small>
            <small>Access to our GitHub repos</small>
            <small>Community forum</small>
            <small>Flashcard decks</small>
            <small>New videos every week</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price