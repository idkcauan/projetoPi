export interface Usuario{
    nome:string,
    email:string,
    senha:string,
    cargo?: 'admin' | 'user';
}