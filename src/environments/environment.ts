export const environment = {
  production: false,
  qa:true,

  configuration:{
    url:"http://localhost:4200/",
    keycloak: {
      issuer: 'http://localhost:9898', //keycloak
      realm: 'micro-services',
      clientId: 'angu_front'
    }
  },

  api:{
    url:"http://localhost:8080",
    rutas:{

      student:{
        init:"/api/student"
      }
      /*empresa:{
        init:"empresa",
      },
      usuario:{
        init:"usuario",
      },
      notificacion:{
        init:"notificacion",
        empresaAsociada:"listarEmpresaAsociada",
      },
      reporte:{
        init:"reporte",
      },
      login:{
        validar:"login/validar",
        obtenerUsuario: "login/obtenerUsuarioURL",
        init:"oauth/token",
      },
      usuarioempresa:{
        init:"usuarioEmpresa",
      },
      usuariocliente:{
        init:"usuarioCliente",
      },
      dataEntry:{
        init:"dataEntry",
      },     
      cliente:{
        init:"cliente",
      },
      menu:{
        init:"menu",
      },
      portalfirma:{
        init:"portalFirmas",
        enviarDocumento:"enviarDocumento"
      },
      file:{
        init:"file",
      },
      certificado:{
        init:"certificado",
      },
      parametro:{
        init:"parametro",
      },
      recuperar: {
        init:"recuperar"
      },
      auth:{
        login:"oauth/token",
        prelogin: "pre/login",
        preloginPorCorreo: "pre/loginPorCorreo",
      },
      operaciones: {
        url: "operaciones/",
        crearGrupo: "crearGrupo"
      },
      validarDocumento: {
        init: "validarDocumento"
      }
      */

    }
  }
};