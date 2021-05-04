$.support.cors = true;

$(document).ready(
    function(){
        GETUsers();
    }
)

$.ajax({
    type:'GET',
    url:'http://localhost:9000/users',
    sucess: function(data){
        console.log(data);
    },
    error: function(data){
        console.log(data);
        
        $.each(data, function(i, user){
        $('#NOME_DA_TABLE').append(
            "<tr><td></td></tr>"
        
        )
     }
        )
}
}
)



$('#bt_cadastrar').click(
    function(){
        POSTUsers();
    }
)

function POSTUsers(){
    var User = {
        name : document.getElementById('input_nome').value,
        cpf : document.getElementById('input_cpf').value,
        occupation : document.getElementById('input_cargo').value
    };    

    if (User.name == '') {
        alert('Favor Indicar o Nome seu animal!')
    } else {
        $.ajax({
            type:'POST',
            url:'http://192.168.10.85:9000/users',    
            contentType:'application/json',
            data: JSON.stringify(User),
            success: function(data){
                alert('Cadastro incluído com Sucesso!');        
                console.log(data);
                
                $('#tabela_user').append(
                    '<tr> ' +
                    '    <td>0</td>'+
                    '    <td>'+data.guuid+'</td>'+
                    '    <td>'+data.name+'</td>'+
                    '    <td>'+data.cpf+'</td>'+
                    '    <td>'+data.occupation+'</td>'+
                    '</tr>'
                )                       
            },
            error: function(data){
                alert('Falha ao cadastrar!');
                console.log(data);
            }
        })
    }    
}

function GETUsers(){
    $.ajax({
        type:'GET',
        url:'http://192.168.10.85:9000/users',
        success: function(data){
            $.each(data, function(i, user){
                $('#tabela_user').append(
                    '<tr> ' +
                    '    <td>'+i+'</td>'+
                    '    <td>'+user.guuid+'</td>'+
                    '    <td>'+user.name+'</td>'+
                    '    <td>'+user.cpf+'</td>'+
                    '    <td>'+user.occupation+'</td>'+
                    '</tr>'
                )                    
            })            
        },
        error: function(data){
            console.log(data);
        }
    })
}