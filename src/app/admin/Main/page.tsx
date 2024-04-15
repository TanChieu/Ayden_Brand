'use client'
import React, { useState } from 'react';
import axios from 'axios';
import pageM from "../css/main.module.css";
import Link from 'next/link';
import brands from '../../config/brand.json';

const MainPage = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [error, setError] = useState('');
    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setThumbnail(`/brandLogo/${file.name}`);

        }
    };
    const checkIdExistence = async (id: string) => {
        try {
            const response = await axios.get(`/api/admin/main/${id}`);
            const exists = response.data.exists;

            if (typeof exists === 'boolean') {
                return exists;
            } else {
                console.error('Invalid response from server:', response.data);
                return false;
            }
        } catch (error) {
            console.error('Error checking ID existence:', error);
            return false;
        }
    };


    const handleSubmit = async () => {
        try {
            if (!id || !name || !description || !thumbnail) {
                setError('All fields are required.');
                return;
            }

            const idExists = await checkIdExistence(id);
            if (idExists) {
                setError('ID already exists.');
                return;
            }

            const response = await axios.post('/api/admin/main', {
                id: id,
                name: name,
                description: description,
                thumbnail: thumbnail
            });
            const data = response.data;
            console.log(data);
            if (data.isLogged === false) {
                alert('Create Success');
            } else {
                alert('ID already exists');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            if (!id) {
                setError('All fields are required.');
                return;
            }

            const idExists = await checkIdExistence(id);
            if (idExists) {
                setError('ID already exists.');
                return;
            }

            const response = await axios.post('/api/admin/main', {
                id: id,
                name: name,
                description: description,
                thumbnail: thumbnail
            });
            const data = response.data;
            console.log(data);
            if (data.isLogged === false) {

            } else {
                alert('Update Success');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleDelete = async () => {
        try {
            if (!id) {
                setError('ID is required.');
                return;
            }

            const response = await axios.post('/api/admin/main', { id: id });

            const data = response.data;
            console.log(data);

            if (data.success) {
                alert('Delete Failed');
            } else {

                alert('Delete Success');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className={pageM.container}>
            <div className={pageM.body}>
                <div className={pageM.bar}>
                    <div><Link href='/'><img src='/FashionNews/logo.svg' className={pageM.logo}></img></Link></div>
                    <h2>ADMIN</h2>
                </div>
            </div>
            <div className={pageM.bodyContent}>
                <div className={pageM.menu}>
                    <div className={pageM.contentM}>
                        <Link id={pageM.link} href="#">Trang chủ</Link>
                        <Link id={pageM.link} href="#">Trang 1</Link>
                        <Link id={pageM.link} href="#">Trang 2</Link>
                    </div>
                </div>
                <div className={pageM.panel}>
                    <div className={pageM.content}>
                        <div className={pageM.group}>
                            <a id={pageM.text}> Nhập ID </a><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            /><br /><br />
                            <a id={pageM.text}> Nhập tên </a><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="tên"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /></div>
                        <div className={pageM.group}>
                            <a id={pageM.text}> Nhập mô tả </a><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="mô tả"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            /><br /><br />
                            <input id={pageM.img}
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                            /><br /><br />
                            <input id={pageM.input}
                                type="text"
                                placeholder="Đường dẫn"
                                value={thumbnail}
                                disabled
                                onChange={(e) => setThumbnail(e.target.value)}
                            />
                        </div >
                        <div className={pageM.groupButton}>
                            <button onClick={handleSubmit} className={pageM.button}>Tạo</button><br /><br />
                            <button onClick={handleUpdate} className={pageM.button}>sửa</button><br /><br />
                            <button onClick={handleDelete} className={pageM.button}>Xoá</button>
                        </div>
                        {error && <p>{error}</p>}
                    </div>
                    <div className={pageM.panelContent}>
                        <h1>Brands Logo</h1>

                        <div className={pageM.item}><div>
                            <table className={pageM.table}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên thương hiệu</th>
                                        <th>Mô tả</th>
                                        <th>Đường dẫn hình ảnh</th>
                                    </tr>
                                </thead>
                                {brands.map(item =>
                                    <tbody key={item.id}>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.thumbnail}</td>
                                        </tr>
                                    </tbody>)}
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};
export default MainPage;
