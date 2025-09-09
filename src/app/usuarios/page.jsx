"use client";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";
import { useEffect, useState } from "react";

export default function Usuarios() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
    
 const [data, setData] = useState({
        usuarios: [], 
        loading: true,
        current: 1,
        pageSize:0 
    });

    useEffect (() => {
        const fetchUsuarios = async () => {
            try{
                const { data : usuarios} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/usuarios`,
                );
                setData({usuarios, loading: false, current: 1, pageSize: 5});
            }
            catch(error){
                console.error("Erro ao buscar usuarios:", error);
                toast.error("Erro ao buscar usuarios");
                setData((d) => ({...d, loading: false}));
            }
        };
        fetchUsuarios();

},[]);

const paginatedUsuarios = () => {
    const start = (data.current - 1) * data.pageSize;
    return data.usuarios.slice(start, start + data.pageSize);
};

    
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Usuários</h1>

            <div className={styles.cardsContainer}>
                {paginatedUsuarios().map((usuario) => (
                    <Card key={usuario.id} className={styles.card}>
                        <p className={styles.nome}>{usuario.nome}</p>
                        {
                            usuario.idade && <p className={styles.idade}>{usuario.idade} anos</p>
                        }
                        <p className={styles.biografia}>{usuario.biografia}</p>
                        <p className={styles.redesSociais}>{usuario.redes_sociais}</p>
                        {
                            usuario.area_atuacao && 
                            <p className={styles.areaAtuacao}>{usuario.area_atuacao}</p>
                        }
                        <p className={styles.pais}>{usuario.pais}</p>
                        {
                            usuario.categoria_nome &&
                            <p className={styles.categoria}>{usuario.categoria_nome}</p>
                        }
                    </Card>
                ))}
            </div>
                    <div className={styles.pagination}>
                        <Pagination
                            current={data.current}
                            pageSize={data.pageSize}
                            total={data.profissionais.length}
                            onChange={(page) => setData((d) => ({...d, current: page}))}
                            showSizeChanger={false}
                        />
                    </div>

        </main>
    );
}