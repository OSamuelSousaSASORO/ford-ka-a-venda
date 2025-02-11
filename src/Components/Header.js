import React from "react";
import styles from './Header.module.css'
import foto from '../Photo/logoBlack.png'
import { useRef } from "react";

export default function Header(){
    
    const button1 = useRef()
    const button2 = useRef()
    const button3 = useRef()
    const button4 = useRef()
    const button5 = useRef()
    const button6 = useRef()
    const button7 = useRef()
    const button8 = useRef()
    const button9 = useRef()
    const menuHidden = useRef()
    const close = useRef()
    const menuScreenVisible = useRef()

    function visibleOBJ(){
        menuHidden.current.style.left = '0px';
        button1.current.style.left = '0px';
        button2.current.style.left = '0px';
        button3.current.style.left = '0px';
        button4.current.style.left = '0px';
        button5.current.style.left = '0px';
        button6.current.style.left = '0px';
        button7.current.style.left = '0px';
        button8.current.style.left = '0px';
        button9.current.style.left = '0px';
    }

    function hiddenOBJ(){
        menuHidden.current.style.left = '-100%';
        button1.current.style.left = '-150px';
        button2.current.style.left = '-150px';
        button3.current.style.left = '-150px';
        button4.current.style.left = '-150px';
        button5.current.style.left = '-150px';
        button6.current.style.left = '-150px';
        button7.current.style.left = '-150px';
        button8.current.style.left = '-150px';
        button9.current.style.left = '-150px';
    }

    function menuHiddenVisible(){
        visibleOBJ()
    }

    window.addEventListener('click', (e)=>{
        if (e.target === menuScreenVisible.current || e.target === close.current) {
            hiddenOBJ()
        }
    })

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.menu} onClick={()=>{menuHiddenVisible()}}>
                        <i className={styles.ione}></i>
                        <i className={styles.itwo}></i>
                    </div>
                    <img src={foto} alt='' className={styles.logo}></img>
                    <div className={styles.ourmodels}>Nossos modelos</div>
                </div>
            </div>
            <div className={styles.menuHidden} ref={menuHidden} >
                <div className={styles.hiddenBox}>
                    <div className={styles.first}>
                        <i ref={close}>X</i>
                        <button ref={button1}>Contato</button>
                        <button ref={button2}>Modelos</button>
                        <button ref={button3}>Compre agora</button>
                        <button ref={button4}>Sustentabilidade</button>
                        <button ref={button5}>Visão geral</button>
                        <button ref={button6}>Noticias FK</button>
                        <button ref={button7}>A empresa FK</button>
                    </div>
                    <div className={styles.secound}>
                        <button ref={button8}>Estoque</button>
                        <button ref={button9}>Encontre uma concessionária</button>
                    </div>
                </div>
                <div className={styles.space} ref={menuScreenVisible}></div>
            </div>
        </>
    )
}