import React from 'react';

const Blogs = () => {
    return (
        <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-12 py-2">
                <div className="card p-5 bg-light">
                    <h2>1. Context API কি?</h2>
                    <p className="py-3 fs-5">কন্টেক্সট এপিআই রিয়েক্টের এমন একটা সিস্টেম যার মাধ্যমে কম্পোনেন্ট ট্রি তে ডাটা স্থানান্তর করা যায় প্রপ ড্রিলিং এর সাহায্য ছাড়া। যখন কোন ডাটা প্যারেন্ট কম্পনেন্ট থেকে একাধিক চাইল্ড কম্পনেন্ট এ পাঠানোর প্রয়োজন হয় প্রপ ড্রিলিং এর মাধ্যমে এটা সমস্যাজনক হয়। কন্টেক্সট এপিআই ব্যবহার করে এই কাজটি খুব সহজে করা যায়। উদাহরণ স্বরূপ বলা যায় থিম সেটিং ট্রান্সফার, কারেন্ট ইউজার অথেন্টিকেশন । এই ধরনের তথ্যগুলো ওয়েবসাইটে থাকা অনেকগুলো কম্পোনেন্টে প্রয়োজন হয় যেগুলা কন্টেক্সট এপিআই ব্যবহার করে খুব সহজেই কম্পোনেন্ট ট্রিতে স্থানান্তর করা যায়।</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 py-2">
                <div className="card p-4 bg-light">
                    <h2>inline,block, inline block difference কি?</h2>
                    <p className="py-3 fs-5">a) inline, inline-block এলিমেন্ট গুলো পূর্ববর্তী এলিমেন্ট যেখানে শেষ হয় সেখান থেকে শুরু হয় কিন্তু block এলিমেন্ট সর্বদা নতুন লাইনে শুরু হয়। <br />
                        b) inline, inline-block এলিমেন্ট ঠিক ততটুকু জায়গা অধিগ্রহণ করে যতোটুকু এর ভিতরে থাকা কনটেন্ট এর প্রয়োজন হয় কিন্তু block এলিমেন্ট সম্পূর্ণ একটি লাইন এর জায়গা অধিগ্রহণ করে। <br />
                        c) inline এলিমেন্ট এর কোন দৈর্ঘ্য প্রস্থ নির্ধারণ করা যায় না কিন্তু inline-block, block এলিমেন্ট এর ক্ষেত্রে দৈর্ঘ্য এবং প্রস্থ নির্ধারণ করা যায়। <br />
                        d) ইনলাইন এলিমেন্টের margin-top এবং margin-botom সেট করা যায় না কিন্তু inline-block এবং block এলিমেন্ট এর ক্ষেত্রে margin-top, margin-bottom সেট করা যায়।</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;