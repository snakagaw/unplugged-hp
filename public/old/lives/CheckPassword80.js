/*
  JavaScript

  (C) 2010 ������ЃW���X�g�V�X�e��
*/

<!--
var	PW;
function _HpbPwdWnd(thisLink,keyString)
{
	if (typeof(PW)  != "undefined")
	{
		if (typeof(PW.closed) != "unknown")
		{
			if (PW.closed == false)
				return false;
		}
	}

	var	target = thisLink.target;
	var	defaultUrl = thisLink.href;
	var	escKeyString = escape(keyString);
	var	strCheckFunction = '_HpbChkPwd(keyinform.keyin.value,' + "'" + escKeyString + "','" + defaultUrl + "','" + target + "');";
	var	strOkButton = '<INPUT type="button" name="CheckPassword" value="OK" onclick="' + strCheckFunction + '">';
	var	strEscapedTarget, strEscapedDefault;
	var	strNeedPassword, strBadPassword, strSubString;
	var	strIsOpen, strIsClose;
	var 	strTmp = unescape("%u3042");
	if (strTmp.length == 1)
	{
		strNeedPassword = "%u30D1%u30B9%u30EF%u30FC%u30C9%u3092%u5165%u529B%u3057%u3066%u304F%u3060%u3055%u3044%u3002";
		strBadPassword  = "%u30D1%u30B9%u30EF%u30FC%u30C9%u304C%u6B63%u3057%u304F%u3042%u308A%u307E%u305B%u3093%u3002";
		strSubString    = "chr2 = decryptedPath.substring(i, i+6);";
	}
	else
	{
		strNeedPassword = "%83p%83X%83%8F%81%5B%83h%82%F0%93%FC%97%CD%82%B5%82%C4%82%AD%82%BE%82%B3%82%A2%81B";
		strBadPassword  = "%83p%83X%83%8F%81%5B%83h%82%AA%90%B3%82%B5%82%AD%82%A0%82%E8%82%DC%82%B9%82%F1%81B";
		strSubString    = "chr2 = decryptedPath.substring(i+6, i+6+6);";
	}

	if (navigator.appName.charAt(0) == "N")
	{
		strEscapedTarget  = "targetUrl";
		strEscapedDefault = "defaultUrl";
	}
	else
	{
		strEscapedTarget  = "unescape(targetUrl)";
		strEscapedDefault = "unescape(defaultUrl)";
	}

	if ((navigator.userAgent.indexOf("Mac") > -1))
	{
		strIsOpen  = "if (opener)";
		strIsClose = "if ( ! opener)";
	}
	else
	{
		strIsOpen  = "if ((typeof(opener.closed) != \"unknown\") && ! opener.closed)";
		strIsClose = "if ((typeof(opener.closed) == \"unknown\") || opener.closed)";
	}

	var	targetWin = "", defaultWin = "";
	if (target == null || target == "")
	{
		targetWin  = "opener.location.href = " + strEscapedTarget  + ";";
		defaultWin = "opener.location.href = " + strEscapedDefault + ";";
	}
	else if (target == "_blank")
	{
		targetWin  = 'opener.open(' + strEscapedTarget  + ',"_blank");';
		defaultWin = 'opener.open(' + strEscapedDefault + ',"_blank");';
	}
	else if (target == "_parent")
	{
		targetWin  = "opener.parent.location.href = " + strEscapedTarget  + ";";
		defaultWin = "opener.parent.location.href = " + strEscapedDefault + ";";
	}
	else if (target == "_self")
	{
		targetWin  = "opener.self.location.href = " + strEscapedTarget  + ";";
		defaultWin = "opener.self.location.href = " + strEscapedDefault + ";";
	}
	else if (target == "_top")
	{
		targetWin  = "opener.top.location.href = " + strEscapedTarget  + ";";
		defaultWin = "opener.top.location.href = " + strEscapedDefault + ";";
	}
	else
	{
		var	currentWin = self;
		var	parentWin;
		var	strParent = "parent";
		var	bFind = false;
		while (currentWin != self.top)
		{
			parentWin = currentWin.parent;
			var strTarget = "parentWin." + target;
			if (typeof(eval(strTarget)) == "object")
			{
				targetWin  = "opener." + strParent + "." + target + ".location.href = " + strEscapedTarget  + ";";
				defaultWin = "opener." + strParent + "." + target + ".location.href = " + strEscapedDefault + ";";
				break;
			}
			currentWin = currentWin.parent;
			strParent += ".parent";
		}
	}
	if (targetWin == "")
		targetWin  = 'opener.open(' + strEscapedTarget  + ',"_blank");';
	if (defaultWin == "")
		defaultWin = 'opener.open(' + strEscapedDefault + ',"_blank");';
	PW = window.open("", "", "width=300,height=100,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
	PW.focus();
	PW.document.open();
	PW.document.writeln('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">');
	PW.document.writeln('<HTML><HEAD>');
	PW.document.writeln('<META http-equiv="Content-Type" content="text/html; charset=UTF-8">');
	PW.document.writeln('<META http-equiv="Content-Style-Type" content="text/css">');
	PW.document.writeln('<TITLE>�p�X���[�h�t�������N</TITLE>');

	PW.document.writeln('<SCRIPT LANGUAGE="JavaScript" TYPE="text/javascript">');
	PW.document.writeln('<!--');
	PW.document.writeln('function _HpbChkPwd(keyin,escEncrypted,defaultUrl,target)');
	PW.document.writeln('{');
	PW.document.writeln('	var	encrypted = unescape(escEncrypted);');
	PW.document.writeln('	var indexbase = " !\\\"#$%&\\\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";');
	PW.document.writeln('	var passlen = keyin.length;');
	PW.document.writeln('	var enqlen  = encrypted.length;');
	PW.document.writeln('	var decrypted = "";');
	PW.document.writeln('	var decryptedPassword = "";');
	PW.document.writeln('	var decryptedPath     = "";');
	PW.document.writeln('	var targetUrl         = "";');
	PW.document.writeln('	var i, j, k, chr1, chr2, nbase;');
	PW.document.writeln('	var needPassword = "' + strNeedPassword + '";');
	PW.document.writeln('	var badPassword  = "' + strBadPassword  + '";');
	PW.document.writeln('	if (passlen <= 0)');
	PW.document.writeln('	{');
	PW.document.writeln('		alert(unescape(needPassword));');
	PW.document.writeln('		return ;');
	PW.document.writeln('	}');
	PW.document.writeln('	for (i = 0, j = passlen - 1, k = 0 ; i < enqlen ; i++, j--, k=0)');
	PW.document.writeln('	{');
	PW.document.writeln('		if (j < 0)');
	PW.document.writeln('		{');
	PW.document.writeln('			j = passlen - 1;');
	PW.document.writeln('		}');
	PW.document.writeln('		chr1 = indexbase.indexOf(keyin.charAt(j));');
	PW.document.writeln('		chr2 = indexbase.indexOf(encrypted.charAt(i));');
	PW.document.writeln('		if (chr2 < (chr1 + j))');
	PW.document.writeln('		{');
	PW.document.writeln('			nbase = (chr1 + j - chr2) / 0x5f;');
	PW.document.writeln('			k += (0x5f * Math.ceil(nbase));');
	PW.document.writeln('		}');
	PW.document.writeln('		k += (chr2 - chr1 - j);');
	PW.document.writeln('		decrypted += indexbase.charAt(k);');
	PW.document.writeln('	}');
	PW.document.writeln('	if (typeof(opener) == "undefined")');
	PW.document.writeln('	{');
	PW.document.writeln('		window.close();');
	PW.document.writeln('		return ;');
	PW.document.writeln('	}');
	PW.document.writeln('	' + strIsClose);
	PW.document.writeln('	{');
	PW.document.writeln('		window.close();');
	PW.document.writeln('		return ;');
	PW.document.writeln('	}');
	PW.document.writeln('	opener.document.isOpened = false;');
	PW.document.writeln('	decryptedPassword = decrypted.substring(decrypted.length - passlen, decrypted.length);');
	PW.document.writeln('	if (keyin == decryptedPassword)');
	PW.document.writeln('	{');
	PW.document.writeln('		decryptedPath = decrypted.substring(0, decrypted.length - passlen);');
	PW.document.writeln('		passlen       = decryptedPath.length;');
	PW.document.writeln('		for (i = 0 ; i < passlen ; i++)');
	PW.document.writeln('		{');
	PW.document.writeln('			chr1 = decryptedPath.charAt(i);');
	PW.document.writeln('			if (chr1 == "%")');
	PW.document.writeln('			{');
	PW.document.writeln('				' + strSubString);
	PW.document.writeln('				targetUrl += chr2;');
	PW.document.writeln('				i += 11;');
	PW.document.writeln('			}');
	PW.document.writeln('			else');
	PW.document.writeln('				targetUrl += chr1;');
	PW.document.writeln('		}');
	PW.document.writeln('		' + strIsOpen);
	PW.document.writeln('			' + targetWin);
	PW.document.writeln('		window.close();');
	PW.document.writeln('	}');
	PW.document.writeln('	else');
	PW.document.writeln('	{');
	PW.document.writeln('		if (defaultUrl.length)');
	PW.document.writeln('		{');
	PW.document.writeln('			' + strIsOpen);
	PW.document.writeln('				' + defaultWin);
	PW.document.writeln('		}');
	PW.document.writeln('		else');
	PW.document.writeln('		{');
	PW.document.writeln('			alert(unescape(badPassword));');
	PW.document.writeln('		}');
	PW.document.writeln('		window.close();');
	PW.document.writeln('	}');
	PW.document.writeln('}');
	PW.document.writeln('//-->');
	PW.document.writeln('</SCRIPT>');

	PW.document.writeln('</HEAD>');
	PW.document.writeln('<BODY onload="document.keyinform.keyin.focus()" onblur="document.keyinform.keyin.focus()" onerror="window.close();">');
	PW.document.writeln('<DIV align="center">');
	PW.document.writeln('<P>�p�X���[�h����͂��Ă��������B</P>');
	PW.document.writeln('<FORM name="keyinform" method="POST" onsubmit="' + strCheckFunction + 'return false;">');
	PW.document.writeln('<INPUT size="20" type="password" name="keyin">');
	PW.document.writeln(strOkButton);
	PW.document.writeln('</FORM>');
	PW.document.writeln('</DIV>');
	PW.document.writeln('</BODY>');
	PW.document.writeln('</HTML>');
	PW.document.close();

	return false;
}
//-->
