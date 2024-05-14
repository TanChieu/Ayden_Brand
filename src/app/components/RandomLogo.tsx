import React from 'react';
import brands from "../config/brand.json";
import Image from 'next/image';
import RLogo from "../css/RandomLogo.module.css";
import Link from 'next/link';

const Ran = () => {
    const getRandomIndexes = () => {
        const randomBrand: number[] = [];
        while (randomBrand.length < 5) {
            const randomIndex = Math.floor(Math.random() * brands.length);
            if (!randomBrand.includes(randomIndex)) {
                randomBrand.push(randomIndex);
            }
        }
        return randomBrand;
    };
    const randomIndexes = getRandomIndexes();
    const randomData = randomIndexes.map(index => brands[index]);

    return (
        <div className={RLogo.container}>
            <div>
                <div className={RLogo.title}>Brand suggestions<br />_________</div>
                <div className={RLogo.brandsLogo}>
                    {randomData.map(item => (
                        <div key={item.id} id={RLogo.item}>
                            <Link href={`detail/detail/${item.id}`.substring(6)}>
                                {item.thumbnail && <Image src={item.thumbnail} alt="title" width={200} height={200} />}
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ran;
