$(document).ready(()=>{

    // Width do documento

    const width = ()=>{
        const largura = window.innerWidth

        if(largura < 1024){
            $('.bars-menu').click(()=>{
                $('.mobile').toggle()
            })
        
            $('.nav-item').click(()=>{
                $('.mobile').css('display', 'none')
            })
        }else{
            $('.mobile').css('display', 'block')

            $('.nav-item').click(()=>{
                $('.mobile').css('display', 'block')
            })
        }
        return largura
    }

    width()

    // Função menu mobile -  Desktop

    window.addEventListener('resize', ()=>{
        const tamanho = width()

        if(tamanho < 1024){
            $('.bars-menu').click(()=>{
                $('.mobile').toggle()
            })
        
            $('.nav-item').click(()=>{
                $('.mobile').css('display', 'none')
            })
        }else{
            $('.mobile').css('display', 'block')

            $('.nav-item').click(()=>{
                $('.mobile').css('display', 'block')
            })
        }
        
    })

    // Barra de navegação animação

    $(".nav-item").hover(function(){
        $('.nav-item').removeClass('select')
        $(this).addClass('select')
    })

})